import { IMessage, IMessageSuggestion } from "../../../types"
import { MessageSuggestion } from "./MessageSuggestion/MessageSuggestion"
import { IMessageSuggestionsTitleProps, MessageSuggestionsTitle } from "./MessageSuggestionsTitle/MessageSuggestionsTitle"

interface IMessageSuggestionsProps {
  message: IMessage
  title?: IMessageSuggestionsTitleProps
  onClickSuggestion: (suggestion: IMessageSuggestion, message: IMessage) => void
}

export const MessageSuggestions = (props: IMessageSuggestionsProps) => {

  const onClick = (suggestion: IMessageSuggestion) => {
    props.onClickSuggestion(suggestion, props.message)
  }

  const items = props.message.suggestions?.map(
    s => (
      <li key={s.text}>
        <MessageSuggestion suggestion={s} onClick={onClick} />
      </li>
    )
  )

  return !props.message.suggestions?.length ? null : (
    <div className="messageSuggestions">
      <MessageSuggestionsTitle {...props.title} />
      <ul>
        {items}
      </ul>
    </div>
  )
}
