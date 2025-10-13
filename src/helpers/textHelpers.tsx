export const highlightText = (payload: {text: string, highlights?: string[], highlightType?: 'span' | 'strong'}) => {
  const { text, highlights, highlightType } = payload
  
  if (!highlights || highlights.length === 0) return text

  const tag = highlightType || 'span'
  let highlightedText = text

  highlights.forEach((highlight) => {
    const regex = new RegExp(`(${highlight})`, 'gi')
    highlightedText = highlightedText.replace(regex, `<${tag}>$1</${tag}>`)
  })

  return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
}
