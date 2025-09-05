import type { IIntroSuggestion, IIntroSuggestionMark } from "src/types"
import { IntroSuggestionsChat } from "../IntroSuggestionsChat/IntroSuggestionsChat"
import { IntroSuggestionsTitle } from "../IntroSuggestionsTitle/IntroSuggestionsTitle"
import { IntroSuggestionsList } from "../IntroSuggestionsList/IntroSuggestionsList"
import { IntroSuggestionMarks } from "../IntroSuggestionMarks/IntroSuggestionMarks"

interface IIntroSuggestionsProps {
  title?: string
  suggestions: IIntroSuggestion[]
  marks?: IIntroSuggestionMark[]
  onSubmit: (text: string) => void
}

export const IntroSuggestions = (props: IIntroSuggestionsProps) => {
  const onClick = (suggestion: IIntroSuggestion) => console.log(suggestion.text)
  
  return (
    <div className="introSuggestions">
      <IntroSuggestionMarks marks={props.marks} />
      <IntroSuggestionsTitle title={props.title} />
      <IntroSuggestionsList onClick={onClick} suggestions={props.suggestions} />
      <IntroSuggestionsChat onSubmit={props.onSubmit} />
    </div>
  )
}
