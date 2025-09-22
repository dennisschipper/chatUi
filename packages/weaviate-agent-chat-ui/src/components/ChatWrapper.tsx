import { ReactElement, useEffect, useRef, useState } from "react"
import { LoadMoreChatsButton } from "./LoadMoreChatsButton"
import { NewChatEntryNotification } from "./NewChatEntryNotification/NewChatEntryNotification"
import { ChatContainerEmpty } from "./ChatContainerEmpty"
import { ChatContainerList } from "./ChatContainerList"

interface IChatItem {
  item: ReactElement 
  id: string
}

interface IChatWrapperProps {
  items: IChatItem[]
  blockScrolling?: boolean
  maxItems?: number
}

export const ChatWrapper = (props: IChatWrapperProps) => {

  const ref = useRef<HTMLDivElement>(null)
  
  const maxItems = props.maxItems ?? 50
  const [ maxVisibleItems, updateMaxVisibleItems ] = useState(maxItems)
  const [ newMessages, updateNewMessages ] = useState<boolean>(false)
  const [ fullyScrolled, updateFullyScrolled ] = useState<boolean>(true)

  const scrollToNewEntries = () => {
    setTimeout(() => {
      const el = ref.current
      el && el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }, 100)
  }
  
  useEffect(() => {
    !props.blockScrolling && props.items.length > 0 && scrollToNewEntries()
  }, [props.items.length, props.blockScrolling])

  useEffect(() => {
    props.items.length > 0 && scrollToNewEntries()
  }, [])
  
  const prevItemsLength = useRef(props.items.length)
  
  useEffect(() => {
    updateNewMessages(true)
    
    // If new items were added, increase maxVisibleItems by the number of new items
    const newItemsCount = props.items.length - prevItemsLength.current
    if (newItemsCount > 0) {
      updateMaxVisibleItems(prev => prev + newItemsCount)
    }
    prevItemsLength.current = props.items.length
  }, [props.items.length])

  // Show the last maxVisibleItems
  const visibleItemsWithIds = props.items.slice(-maxVisibleItems)
  const visibleItems = visibleItemsWithIds.map(item => item.item)
  const visibleItemIds = visibleItemsWithIds.map(item => item.id)
  const startIndex = Math.max(0, props.items.length - maxVisibleItems)
  
  const onClick = () => {
    updateMaxVisibleItems(maxVisibleItems + maxItems)
  }
  
  const displayLoadMore = props.items.length > maxVisibleItems
  const loadMoreCount = Math.min(maxItems, props.items.length - maxVisibleItems)

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const el = event.currentTarget
    const fullyScrolled = el.scrollTop >= (el.scrollHeight - el.clientHeight - 20)
    updateFullyScrolled(fullyScrolled)
    fullyScrolled && updateNewMessages(false)
  }

  const displayEmpty = props.items.length === 0
  const chatHeader = (
    <LoadMoreChatsButton 
      onClick={onClick} 
      count={loadMoreCount} 
      display={displayLoadMore} 
    />
  )
  
  const onClickEntryNotification = () => {
    scrollToNewEntries()
  }
  
  return (
    <div className="chatContainer">
      <NewChatEntryNotification 
        display={!fullyScrolled && newMessages && !!props.blockScrolling} 
        onClick={onClickEntryNotification} 
      />
      <ChatContainerEmpty display={displayEmpty} />
      <ChatContainerList 
        ref={ref}
        items={visibleItems} 
        itemIds={visibleItemIds}
        startIndex={startIndex} 
        onScroll={onScroll} 
        header={chatHeader} 
      />
    </div>
  )
}
