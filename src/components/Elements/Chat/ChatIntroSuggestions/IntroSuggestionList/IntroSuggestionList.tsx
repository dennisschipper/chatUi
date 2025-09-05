import type { IIntroSuggestion } from "src/types"
import chatSuggestion from 'src/assets/chatSuggestion.svg'

interface IIntroSuggestionListProps {
  selectedSuggestion: IIntroSuggestion | undefined
  onSuggestionClick: (suggestion: string) => void
}

export const IntroSuggestionList = (props: IIntroSuggestionListProps) => {
  const { selectedSuggestion, onSuggestionClick } = props
  
  if (!selectedSuggestion) {
    return null
  }
  
  // Randomly select 2 suggestions from the list
  const randomSuggestions = [...selectedSuggestion.suggestions]
    .sort(() => 0.5 - Math.random())
    .slice(0, 2)
  
  const suggestionElements = randomSuggestions.map(
    suggestion => (
      <li key={suggestion}>
        <div 
          className="introSuggestionListItem"
          onClick={() => onSuggestionClick(suggestion)}
        >
          <div className="icon">
            <img src={chatSuggestion} alt="" />
          </div>
          <div className="content">{suggestion}</div>
        </div>
      </li>
    )
  )
  
  return (
    <ul className="introSuggestionList">
      {suggestionElements}
    </ul>
  )
}
