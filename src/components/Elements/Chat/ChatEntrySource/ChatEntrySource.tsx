import cityScout from 'src/assets/cityScout.svg'

interface ChatEntrySourceProps {
  from: string
}

export const ChatEntrySource = (props: ChatEntrySourceProps) => {
  return (
    <div className="from">
      {props.from.toLowerCase() === 'cityscout' && (
        <img src={cityScout} alt="" />
      )}
      <span>{props.from} said...</span>
    </div>
  )
}