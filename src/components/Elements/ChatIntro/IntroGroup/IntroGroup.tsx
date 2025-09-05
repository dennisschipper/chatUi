import type { IIntroGroup } from "src/types"
import { IntroSuggestionMark } from "../IntroSuggestionMark/IntroSuggestionMark"
import { IntroSuggestionMarks } from "../IntroSuggestionMarks/IntroSuggestionMarks"

interface IIntroGroupProps {
  group: IIntroGroup
}

export const IntroGroup = (props: IIntroGroupProps) => {
  return (
    <div className="introGroup">
      <IntroSuggestionMark mark={{ text: "Unlock product" }} />
      <header>
        <h2>{props.group.title}</h2>
        <p>{props.group.subtitle}</p>
      </header>
    </div>
  )
}
