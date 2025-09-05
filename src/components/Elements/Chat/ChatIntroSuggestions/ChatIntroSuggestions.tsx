import { useState } from "react"
import { IntroSuggestionTags } from "./IntroSuggestionTags/IntroSuggestionTags"
import { IntroSuggestionList } from "./IntroSuggestionList/IntroSuggestionList"
import { introSuggestions } from "src/data/testData"
import { motion } from "motion/react"

interface ChatIntroSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void
}

export const ChatIntroSuggestions = (props: ChatIntroSuggestionsProps) => {
  const { onSuggestionClick } = props
  const [selectedTag, setSelectedTag] = useState<string | null>("For foodies")

  const handleTagClick = (tagText: string) => {
    setSelectedTag(tagText)
  }

  const selectedSuggestion = introSuggestions.find(s => s.tag === selectedTag)

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  }

  return (
    <motion.div {...motionProps} className="chatIntroSuggestions">
      <IntroSuggestionTags 
        suggestions={introSuggestions} 
        selectedTag={selectedTag}
        onTagClick={handleTagClick}
      />
      <IntroSuggestionList 
        selectedSuggestion={selectedSuggestion} 
        onSuggestionClick={onSuggestionClick} 
      />
    </motion.div>
  )
}
