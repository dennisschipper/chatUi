
import { IMessageSource } from "../../../types"

interface IMessageSourceProps extends IMessageSource {}

export const MessageSource = (props: IMessageSourceProps) => {
  return (
    <div className="messageSource">
      <div className="thumb">{props.icon}</div>
      <span className="text">{props.title}</span>
    </div>
  )
}
