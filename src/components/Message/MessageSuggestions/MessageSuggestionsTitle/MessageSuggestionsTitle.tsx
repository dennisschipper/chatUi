import { ReactElement } from "react"

export type TMessageSuggestionsTitleProps = Omit<IMessageSuggestionsTitleProps, 'component'>

export interface IMessageSuggestionsTitleProps {
  text?: string
  component?: ReactElement
}

export const MessageSuggestionsTitle = (props: IMessageSuggestionsTitleProps) => {
  const { text, component } = props
  if (!text && !component) return null
  if (component) return component
  
  return (
    <header>
      <div className="title">{props.text}</div>
    </header>
  )
}
