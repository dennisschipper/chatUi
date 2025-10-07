import { type ReactElement, type Ref } from 'react'
import { Message } from '../../Message/Message'
import { IMessage, IMessageSuggestion } from '../../../types'
import { IMessageSuggestionsTitleProps } from '../../Message/MessageSuggestions/MessageSuggestionsTitle/MessageSuggestionsTitle'

interface IMessageListProps {
  startIndex: number
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void
  header?: ReactElement
  ref: Ref<any>
  messages: IMessage[]
  title?: IMessageSuggestionsTitleProps
  onClickSuggestion?: (suggestion: IMessageSuggestion, message: IMessage) => void
}

export const MessageList = (props: IMessageListProps) => {
  const display = !!props.messages.length

  const items = props.messages.map(message => (
    <li key={message.id} className={message.source.title.toLowerCase()}>
      <Message 
        message={message} 
        title={props.title}
      />
    </li>
  ))

  return !display ? null : (
    <div className="messageScroller" onScroll={props.onScroll} ref={props.ref}>
      {props.header}
      <ul className="messageList">
        {items}
      </ul>
    </div>
  )
}
