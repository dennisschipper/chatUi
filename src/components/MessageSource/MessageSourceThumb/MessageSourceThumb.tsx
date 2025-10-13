interface IMessageSourceThumbProps {
  icon?: string
}

export const MessageSourceThumb = (props: IMessageSourceThumbProps) => {
  return !props.icon ? null : (
    <div className="messageSourceThumb">
      <img src={props.icon} alt="icon" />
    </div> 
  )
}
