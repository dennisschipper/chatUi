import { MessageSource } from "../Messages/MessageSource/MessageSource"
import { MessageInput } from "./MessageInput/MessageInput"
import { IMessage, IMessageSuggestion } from "../../types"
import { MessageContent } from "./MessageContent/MessageContent"
import { MessageSuggestions } from "./MessageSuggestions/MessageSuggestions"
import { IMessageSuggestionsTitleProps } from "./MessageSuggestions/MessageSuggestionsTitle/MessageSuggestionsTitle"

export interface IMessageProps {
  message: IMessage
  displayMeta?: boolean
  title?: IMessageSuggestionsTitleProps
}

export const Message = (props: IMessageProps) => {
  const { displayMeta, message } = props

  const onSubmitMeta = (text: string) => console.log(text)

  const onClickSuggestion = (suggestion: IMessageSuggestion, message: IMessage) => {
    console.log(message, suggestion)
  }

  return (
    <div className="message">
      <MessageSource {...message.source} />
      <div className="messageBody">
        <MessageContent message={message}  />
        <MessageInput display={displayMeta} onSubmit={onSubmitMeta} />
      </div>
      <MessageSuggestions 
        onClickSuggestion={onClickSuggestion}
        message={message} 
        title={props.title}
      />
    </div>
  )
}
