interface ChatEntryStatusContentProps {
  text: string
}

export const ChatEntryStatusContent = (props: ChatEntryStatusContentProps) => {
  return (
    <div className="chatEntryStatusContent">
      {props.text}
    </div>
  )
}