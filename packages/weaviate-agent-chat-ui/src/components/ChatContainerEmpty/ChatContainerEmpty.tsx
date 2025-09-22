interface IChatContainerEmptyProps {
  display: boolean
}

export const ChatContainerEmpty = (props: IChatContainerEmptyProps) => {
  return !props.display ? null : (
    <div className="chatContainerEmpty">
      No content. Why not start a chat now.
    </div>
  )
}
