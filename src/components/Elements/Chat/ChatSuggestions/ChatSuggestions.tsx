import { useState, useEffect } from "react"
import { ChatSuggestion } from "src/components/Elements/Chat/ChatSuggestion/ChatSuggestion"
import type { IChatEntry } from "src/types"

interface ChatSuggestionsProps {
  chatEntry: IChatEntry
  onChat: (text: string) => void
}

export const ChatSuggestions = (props: ChatSuggestionsProps) => {
  const { chatEntry, onChat } = props
  const [randomSuggestions, setRandomSuggestions] = useState<string[]>([])
  
  useEffect(() => {
    if (chatEntry.suggestions && chatEntry.suggestions.length > 0) {
      const selected = [...chatEntry.suggestions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
      setRandomSuggestions(selected)
    }
  }, [chatEntry.suggestions])
  
  if (!chatEntry.suggestions || chatEntry.suggestions.length === 0) {
    return null
  }

  const handleSuggestionClick = (text: string) => {
    onChat(text)
  }

  return (
    <div className="chatSuggestions">
      {randomSuggestions.map((suggestion) => (
        <ChatSuggestion 
          key={suggestion}
          text={suggestion}
          onClick={handleSuggestionClick}
        />
      ))}
    </div>
  )
}
