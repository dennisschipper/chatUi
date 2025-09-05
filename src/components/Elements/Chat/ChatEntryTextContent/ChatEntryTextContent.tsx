interface ChatEntryTextContentProps {
  text: string
}

export const ChatEntryTextContent = (props: ChatEntryTextContentProps) => {
  return (
    <div className="chatEntryTextContent">
      {props.text}
    </div>
  )
}
