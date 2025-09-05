interface IChatIntroHeaderProps {
  title: string
  subtitle?: string
}

export const ChatIntroHeader = (props: IChatIntroHeaderProps) => {
  return (
    <header className="chatIntroHeader">
      <h1>{props.title}</h1>
      {props.subtitle && <p>{props.subtitle}</p>}
    </header>
  )
}
