import type { IIntroSuggestion } from "src/types"

interface IIntroSuggestionTagsProps {
  suggestions: IIntroSuggestion[]
  selectedTag: string | null
  onTagClick: (tagText: string) => void
}

export const IntroSuggestionTags = (props: IIntroSuggestionTagsProps) => {
  const { suggestions, selectedTag, onTagClick } = props
  
  const tagElements = suggestions.map(
    suggestion => (
      <li key={suggestion.tag}>
        <button 
          className={`introSuggestionTag ${selectedTag === suggestion.tag ? 'active' : ''}`}
          onClick={() => onTagClick(suggestion.tag)}
        >
          {suggestion.tag}
        </button>
      </li>
    )
  )
  return (
    <ul className="introSuggestionTags">
      {tagElements}
    </ul>
  )
}
