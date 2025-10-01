import { type ReactElement, type Ref } from 'react'
import { Message } from '../../Message/Message'
import { IMessage } from '../../../types'
import { IMessageSuggestionsTitleProps } from '../../Message/MessageSuggestions/MessageSuggestionsTitle/MessageSuggestionsTitle'

interface IMessageListProps {
  startIndex: number
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void
  header?: ReactElement
  ref: Ref<any>
  messages: IMessage[]
  displayMeta?: boolean
  title?: IMessageSuggestionsTitleProps
}

export const MessageList = (props: IMessageListProps) => {
  const display = !!props.messages.length
  const { displayMeta } = props

  const items = props.messages.map(message => (
    <li key={message.id}>
      <Message 
        message={message} 
        displayMeta={displayMeta}
        title={props.title}
      />
    </li>
  ))

  return !display ? null : (
    <div className="messageScroller" onScroll={props.onScroll} ref={props.ref}>
      {props.header}
      <ul className="chatContainerList">
        {items}
      </ul>
    </div>
  )
}
