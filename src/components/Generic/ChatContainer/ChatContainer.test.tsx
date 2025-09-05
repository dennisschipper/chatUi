import { render, screen } from '@testing-library/react'
import { ChatContainer } from './ChatContainer'
import { type ReactElement } from 'react'
// Helper function to create test items
const createTestItems = (count: number): { item: ReactElement, id: string }[] => {
  return Array.from({ length: count }, (_, index) => ({
    item: <div key={`item-${index}`}>Test item {index + 1}</div>,
    id: `item-${index}`
  }))
}

describe('ChatContainer', () => {
  it('should show the empty message when no items are provided', () => {
    render(<ChatContainer items={[]} />)
    
    // Check that the empty component is displayed
    expect(document.querySelector('.chatContainerEmpty')).toBeInTheDocument()
    
    // Check that the list is not rendered (ChatContainerList returns null for empty items)
    expect(document.querySelector('.chatContainerList')).not.toBeInTheDocument()
  })

  it('should show the items when items are provided', () => {
    const testItems = createTestItems(5)
    render(<ChatContainer items={testItems} />)
    
    // Check that items are rendered
    expect(screen.getByText('Test item 1')).toBeInTheDocument()
    expect(screen.getByText('Test item 5')).toBeInTheDocument()
    
    // Check that the empty component is not displayed
    expect(document.querySelector('.chatContainerEmpty')).not.toBeInTheDocument()
    
    // Check that the list is rendered
    expect(document.querySelector('.chatContainerList')).toBeInTheDocument()
  })

  it('should not show the load more button when there are less than 50 items', () => {
    const testItems = createTestItems(30)
    render(<ChatContainer items={testItems} />)
    
    // Load more button should not be displayed
    expect(screen.queryByText(/Load \d+ more items/)).not.toBeInTheDocument()
    
    // All items should be visible
    expect(screen.getByText('Test item 1')).toBeInTheDocument()
    expect(screen.getByText('Test item 30')).toBeInTheDocument()
  })

  it('should show the load more button when there are more than 50 items', () => {
    const testItems = createTestItems(75)
    render(<ChatContainer items={testItems} />)
    
    // Load more button should be displayed
    expect(screen.getByText('Load 25 more items')).toBeInTheDocument()
    
    // Only the latest 50 items should be visible (items 26-75)
    expect(screen.getByText('Test item 26')).toBeInTheDocument()
    expect(screen.getByText('Test item 75')).toBeInTheDocument()
    
    // Earlier items should not be visible
    expect(screen.queryByText('Test item 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Test item 25')).not.toBeInTheDocument()
  })

  it('should show the load more button when there are more than 100 items and maxItems prop is set to 90', () => {
    const testItems = createTestItems(120)
    render(<ChatContainer items={testItems} maxItems={90} />)
    
    // Load more button should be displayed with correct count
    expect(screen.getByText('Load 30 more items')).toBeInTheDocument()
    
    // Only the latest 90 items should be visible (items 31-120)
    expect(screen.getByText('Test item 31')).toBeInTheDocument()
    expect(screen.getByText('Test item 120')).toBeInTheDocument()
    
    // Earlier items should not be visible
    expect(screen.queryByText('Test item 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Test item 30')).not.toBeInTheDocument()
  })

  it('should show correct count in load more button when remaining items are less than maxItems', () => {
    const testItems = createTestItems(60)
    render(<ChatContainer items={testItems} />)
    
    // Should show only 10 more items (60 total - 50 visible = 10 remaining)
    expect(screen.getByText('Load 10 more items')).toBeInTheDocument()
  })

  it('should handle blockScrolling prop', () => {
    const testItems = createTestItems(10)
    render(<ChatContainer items={testItems} blockScrolling={true} />)
    
    // Component should still render items normally
    expect(screen.getByText('Test item 1')).toBeInTheDocument()
    expect(screen.getByText('Test item 10')).toBeInTheDocument()
  })
})
