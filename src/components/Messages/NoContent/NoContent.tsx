import { ReactNode } from "react"
import { messagesText } from "../../../text/messagesTest"

interface INoContentProps {
  display: boolean
  text?: string
  component?: ReactNode
}

export const NoContent = (props: INoContentProps) => {
  const content = () => {
    if (!props.text && !props.component) return messagesText.noMessages
    if (props.text && !props.component) return props.text
    if (!props.text && props.component) return props.component
  }
  return !props.display ? null : (
    <div className="chatContainerEmpty">
      {content()}
    </div>
  )
}
