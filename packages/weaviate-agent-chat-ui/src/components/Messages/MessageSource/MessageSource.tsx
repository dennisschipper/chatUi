import { IMessageSource } from "../../../types"
import { MessageSourceThumb } from "../../MessageSource/MessageSourceThumb/MessageSourceThumb"

interface IMessageSourceProps extends IMessageSource {

}

export const MessageSource = (props: IMessageSourceProps) => {
  const { title, icon } = props
  const className = `messageSource ${title === "You" ? 'right' : ''}`
  return (
    <div className={className}>
      <MessageSourceThumb icon={icon} />
      <span className="text">{title} said...</span>
    </div>
  )
}
