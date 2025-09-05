import type { IIntroSuggestion } from "src/types"
import { IntroSuggestion } from "../IntroSuggestion/IntroSuggestion"

interface IIntroSuggestionsListProps {
  suggestions: IIntroSuggestion[]
  onClick: (suggestion: IIntroSuggestion) => void
}

export const IntroSuggestionsList = (props: IIntroSuggestionsListProps) => {
  const suggestions = props.suggestions.map(
    s => (
      <li key={s.id}>
        <IntroSuggestion suggestion={s} onClick={props.onClick} />
      </li>
    )
  )

  return (
    <ul className="introSuggestionList">
      {suggestions}
    </ul>
  )
}
