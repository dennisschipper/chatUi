import arrowRight from 'src/assets/arrowRight.svg'

interface ChatSuggestionProps {
  text: string
  onClick: (text: string) => void
}

export const ChatSuggestion = (props: ChatSuggestionProps) => {
  const { text, onClick } = props

  return (
    <button className="chatSuggestion" onClick={() => onClick(text)}>
      <span>{text}</span>
      <img src={arrowRight} alt="" />
    </button>
  )
}
