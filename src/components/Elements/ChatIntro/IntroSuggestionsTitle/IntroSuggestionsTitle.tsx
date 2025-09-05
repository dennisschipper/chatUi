interface IIntroSuggestionsTitleProps {
  title?: string
}

export const IntroSuggestionsTitle = (props: IIntroSuggestionsTitleProps) => {
  return !props.title ? null : (
    <header className="introSuggestionsTitle">
      <h2>{props.title}</h2>
    </header>
  )
}
