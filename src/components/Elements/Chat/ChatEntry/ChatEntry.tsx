import { useState } from "react"
import type { IChatEntry } from "src/types"
import { ChatEntryTextContent } from "src/components/Elements/Chat/ChatEntryTextContent/ChatEntryTextContent"
import { ChatEntryLocationContent } from "src/components/Elements/Chat/ChatEntryLocationContent/ChatEntryLocationContent"
import { ChatEntryStatusContent } from "src/components/Elements/Chat/ChatEntryStatusContent/ChatEntryStatusContent"
import { ChatEntrySource } from "src/components/Elements/Chat/ChatEntrySource/ChatEntrySource"
import { ChatSuggestions } from "src/components/Elements/Chat/ChatSuggestions/ChatSuggestions"
import { LocationPopover } from "src/components/Elements/LocationPopover/LocationPopover"
import { motion } from "motion/react"

interface ChatEntryProps {
  entry: IChatEntry
  onChat: (text: string) => void
}

export const ChatEntry = (props: ChatEntryProps) => {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null)

  // Hide entire entry if locations type has no items
  if (props.entry.type === 'locations' && (!props.entry.items || props.entry.items.length === 0)) {
    return null
  }

  const handleLocationClick = (locationId: string) => {
    setActiveLocationId(activeLocationId === locationId ? null : locationId)
  }

  const motionProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25 }
  }

  const activeLocation = props.entry.type === 'locations' && props.entry.items 
    ? props.entry.items.find(item => item.id === activeLocationId)
    : null

  return (
    <div className={`chatEntry ${props.entry.from.toLowerCase()}${props.entry.type === 'status' ? ' status' : ''}`}>
      <ChatEntrySource from={props.entry.from} />
      <motion.div {...motionProps} className="chatEntryContent">
        {props.entry.type === 'text' ? (
          <ChatEntryTextContent text={props.entry.text} />
        ) : props.entry.type === 'locations' && props.entry.items ? (
          <>
            <ChatEntryLocationContent 
              items={props.entry.items} 
              activeLocationId={activeLocationId}
              onLocationClick={handleLocationClick}
            />
          </>
        ) : props.entry.type === 'status' ? (
          <ChatEntryStatusContent text={props.entry.text} />
        ) : null}
      </motion.div>
      <LocationPopover
        isOpen={!!activeLocation}
        onClose={() => setActiveLocationId(null)}
        location={activeLocation ?? null}
      />
      {props.entry.type !== 'status' && (
        <ChatSuggestions chatEntry={props.entry} onChat={props.onChat} />
      )}
    </div>
  )
}
