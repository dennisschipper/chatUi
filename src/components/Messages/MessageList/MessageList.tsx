import { type ReactElement, type Ref } from 'react'
import { Message, TMessageProps } from '../../Message/Message'
import { IMessage, IMessageSuggestion } from '../../../types'
import { IMessageSuggestionsTitleProps } from '../../Message/MessageSuggestions/MessageSuggestionsTitle/MessageSuggestionsTitle'
import { IMessageSuggestionsProps } from '../../Message/MessageSuggestions/MessageSuggestions'

interface IMessageListProps {
  startIndex: number
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void
  header?: ReactElement
  ref: Ref<any>
  messages: IMessage[]
  onClickSuggestion?: (suggestion: IMessageSuggestion, message: IMessage) => void
  onSubmitMeta?: (text: string) => void

  messageProps?: TMessageProps
  messageSuggestionsProps?: Partial<IMessageSuggestionsProps>
  messageSuggestionsTitleProps?: Partial<IMessageSuggestionsTitleProps>
}

export const MessageList = (props: IMessageListProps) => {
  const display = !!props.messages.length

  const items = props.messages.map(message => (
    <li key={message.id} className={message.source.title.toLowerCase()}>
      <Message 
        message={message} 
        onClickSuggestion={props.onClickSuggestion}
        onSubmitMeta={props.onSubmitMeta}
        messageSuggestionsProps={props.messageSuggestionsProps}
        messageSuggestionsTitleProps={props.messageSuggestionsTitleProps}
      />
    </li>
  ))

  return !display ? null : (
    <div className="chatui-messageScroller" onScroll={props.onScroll} ref={props.ref}>
      {props.header}
      <ul className="chatui-messageList">
        {items}
      </ul>
    </div>
  )
}
