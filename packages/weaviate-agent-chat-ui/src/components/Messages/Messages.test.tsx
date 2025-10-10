import { cleanup, render, screen } from '@testing-library/react'
import { IMessagesProps, Messages } from './Messages'
import { beforeEach, describe, expect, it } from 'vitest'
import { messagesText } from '../../text/messagesTest'

describe('Messages', () => {
  beforeEach(cleanup)

  describe("No Content", () => {
    it('Should display text when there is no messages to show.', () => {
      render(<Messages messages={[]} />)
      expect(screen.getByText(messagesText.noMessages)).toBeTruthy()
    })
  
    it("Should display custom text for no messages when it's provided", () => {
      const messagesProps: IMessagesProps = {
        messages: [],
        noMessages: { text: "No messages."}
      }
      render(<Messages {...messagesProps} />)
      expect(screen.getByText(messagesProps.noMessages?.text as string)).toBeTruthy()
    })
  
    it("Should display a custom component if it's provided", () => {
      const componentText = "No messages component."
      const messagesProps: IMessagesProps = {
        messages: [],
        noMessages: { component: <div>{componentText}</div> }
      }
      render(<Messages {...messagesProps} />)
      expect(screen.getByText(componentText)).toBeTruthy()
    })
  })

  describe("Content", () => {
    it("Should show any messages it gets", () => {
      const itemTexts: string[] = ["tester 1", "tester 2", "tester 3"]
      const items: IMessagesProps['messages'] = itemTexts.map(
        item => ({ id: item, content: <div>{item}</div>, source: { title:"hey"}, suggestions: [] })
      )
      render(<Messages messages={items} />)
      itemTexts.forEach(item => expect(screen.getByText(item)).toBeTruthy())
    })
  })
})
