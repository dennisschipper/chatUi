import { useContext } from "react"
import { AppContext } from "src/components/CityScout/AppContext/AppContext"
import { ChatEntry } from "src/components/Elements/Chat/ChatEntry/ChatEntry"
import { EmptyState } from "src/components/Elements/Chat/EmptyState/EmptyState"

interface ChatEntriesProps {
  onChat: (text: string) => void
}

export const ChatEntries = (props: ChatEntriesProps) => {
  const { appState } = useContext(AppContext)
  
  const entries = appState.chat.entries.map((entry, index) => (
    <ChatEntry key={entry.id || index} entry={entry} onChat={props.onChat} />
  ))
  
  return (
    <div className="chatEntries">
      {appState.chat.entries.length === 0 ? (
        <EmptyState />
      ) : (
        entries
      )}
    </div>
  )
}