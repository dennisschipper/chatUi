import { IMessage } from "../../../types"

interface IMessageContentProps {
  message: IMessage
}

export const MessageContent = (props: IMessageContentProps) => {
  return (
    <div className="messageContent">
      {props.message.content}
    </div>
  )
}
