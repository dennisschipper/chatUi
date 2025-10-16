import '../../styles/messages/index.scss'
import { ReactNode, useEffect, useRef, useState } from "react"
import { LoadMoreChatsButton } from "./LoadMoreChatsButton"
import { NewChatEntryNotification } from "./NewChatEntryNotification/NewChatEntryNotification"
import { MessageList } from "./MessageList"
import { NoContent } from "./NoContent/NoContent"
import { IMessage, IMessageSuggestion } from '../../types'
import { IMessageSuggestionsTitleProps } from '../Message/MessageSuggestions/MessageSuggestionsTitle/MessageSuggestionsTitle'
import { IMessageProps } from '../Message/Message'
import { IMessageSuggestionsProps } from '../Message/MessageSuggestions/MessageSuggestions'
import { Theme } from '../../helpers/theme'

export interface IMessagesProps {
  blockScrolling?: boolean
  maxItems?: number
  messages: IMessage[]
  noMessages?: { text?: string, component?: ReactNode }
  onClickSuggestion?: (suggestion: IMessageSuggestion, message: IMessage) => void
  onSubmitMeta?: (text: string) => void
  theme?: Theme

  messageProps?: Pick<IMessageProps, 'component'>
  messageSuggestionsProps?: Partial<IMessageSuggestionsProps>
  messageSuggestionsTitleProps?: Partial<IMessageSuggestionsTitleProps>
}

export const Messages = (props: IMessagesProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const maxItems = props.maxItems ?? 50
  const [ maxVisibleItems, updateMaxVisibleItems ] = useState(maxItems)
  const [ newMessages, updateNewMessages ] = useState<boolean>(false)
  const [ fullyScrolled, updateFullyScrolled ] = useState<boolean>(true)

  const scrollToNewEntries = () => {
    setTimeout(() => {
      const el = ref.current
      el && el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }, 200)
  }
  
  useEffect(() => {
    (props.blockScrolling !== true && props.messages.length > 0) && scrollToNewEntries()
  }, [props.messages.length, props.blockScrolling])

  useEffect(() => {
    props.messages.length > 0 && scrollToNewEntries()
  }, [])
  
  const prevItemsLength = useRef(props.messages.length)
  
  useEffect(() => {
    updateNewMessages(true)
    
    // If new items were added, increase maxVisibleItems by the number of new items
    const newItemsCount = props.messages.length - prevItemsLength.current
    if (newItemsCount > 0) updateMaxVisibleItems(prev => prev + newItemsCount)
    prevItemsLength.current = props.messages.length
  }, [props.messages.length])

  // Show the last maxVisibleItems
  const startIndex = Math.max(0, props.messages.length - maxVisibleItems)
  
  const onClick = () => updateMaxVisibleItems(maxVisibleItems + maxItems)
  
  const displayLoadMore = props.messages.length > maxVisibleItems
  const loadMoreCount = Math.min(maxItems, props.messages.length - maxVisibleItems)

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const el = event.currentTarget
    const fullyScrolled = el.scrollTop >= (el.scrollHeight - el.clientHeight - 20)
    updateFullyScrolled(fullyScrolled)
    fullyScrolled && updateNewMessages(false)
  }

  const displayEmpty = props.messages.length === 0
  const chatHeader = (
    <LoadMoreChatsButton 
      onClick={onClick} 
      count={loadMoreCount} 
      display={displayLoadMore} 
    />
  )
  
  const onClickEntryNotification = () => scrollToNewEntries()

  const component = props.noMessages?.component
  const text = props.noMessages?.text
  
  return (
    <div className="weaviate-chat-ui messages" data-theme={props.theme || 'light'}>
      <NewChatEntryNotification display={!fullyScrolled && newMessages && !!props.blockScrolling} onClick={onClickEntryNotification} />
      <NoContent display={displayEmpty} text={text} component={component} />
      <MessageList 
        ref={ref}
        startIndex={startIndex} 
        onScroll={onScroll} 
        header={chatHeader} 
        messages={props.messages}
        onClickSuggestion={props.onClickSuggestion}
        onSubmitMeta={props.onSubmitMeta}
        messageProps={props.messageProps}
        
        messageSuggestionsProps={props.messageSuggestionsProps}
        messageSuggestionsTitleProps={props.messageSuggestionsTitleProps}
      />
    </div>
  )
}
