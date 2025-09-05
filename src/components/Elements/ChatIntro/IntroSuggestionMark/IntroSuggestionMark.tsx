import type { IIntroSuggestionMark } from "src/types"

interface IIntroSuggestionMarkProps {
  mark: IIntroSuggestionMark
}

export const IntroSuggestionMark = (props: IIntroSuggestionMarkProps) => {
  const backgroundColor = `#${props.mark.color}`
  const backgroundImage = `url("${props.mark.icon}")`

  return (
    <div className="introSuggestionMark" style={{ backgroundColor }}>
      {props.mark.icon && <div className="icon" style={{ backgroundImage }} />}
      <div className="text">{props.mark.text}</div>
    </div>
  )
}
