interface INewChatEntryNotificationProps {
  display: boolean
  onClick: () => void
}

export const NewChatEntryNotification = (props: INewChatEntryNotificationProps) => {
  return !props.display ? null : (
    <div className="newChatEntryNotification">
      <button onClick={props.onClick}>New message</button>
    </div>
  )
}
