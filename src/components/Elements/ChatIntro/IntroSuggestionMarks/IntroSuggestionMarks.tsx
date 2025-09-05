import type { IIntroSuggestionMark } from "src/types"
import { IntroSuggestionMark } from "../IntroSuggestionMark/IntroSuggestionMark"

interface IIntroSuggestionMarksProps {
  marks?: IIntroSuggestionMark[]
}

export const IntroSuggestionMarks = (props: IIntroSuggestionMarksProps) => {
  const marks = props.marks?.map((m, i) => <IntroSuggestionMark key={i} mark={m} />)

  return !props.marks?.length ? null : (
    <div className="introSuggestionMarks">
      {marks}
    </div>
  )
}
