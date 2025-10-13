import { IMessageSuggestion } from "../../../../types"
import stars from '../../../../assets/icons/stars.svg'
import arrowRight from '../../../../assets/icons/arrowRight.svg'
import { highlightText } from "../../../../helpers"
import { cloneElement, KeyboardEventHandler, ReactElement } from "react"

export type TMessageSuggestionExternalProps = Omit<IMessageSuggestionProps, 'component'>

export interface IMessageSuggestionProps {
  suggestion: IMessageSuggestion
  onClick: (suggestion: IMessageSuggestion) => void
  component?: ReactElement
}

export const MessageSuggestion = (props: IMessageSuggestionProps) => {
  const onClick = () => props.onClick(props.suggestion)
  const { text, highlights } = props.suggestion
  const highlightedText = highlightText({ text, highlights, highlightType: 'strong' })

  if (props.component) {
    const component = cloneElement<any>(props.component, { onClick: props.onClick, suggestion: props.suggestion})
    return component
  }

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    e.key === 'Enter' && onClick()
  }

  return (
    <div 
      className="messageSuggestion" 
      onClick={onClick} 
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className="icon">
        <img src={stars} alt="" />
      </div>
      <div className="text">
        <span>{highlightedText}</span>
      </div>
      <div className="icon">
        <img src={arrowRight} alt="" />
      </div>
    </div>
  )
}
