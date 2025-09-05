import { cloneElement, useContext, type ReactElement } from "react"
import type { IChatEntry } from "src/types"
import { AppContext } from "../AppContext/AppContext"
import { useWebSocket } from "src/hooks/useWebSocket"

interface IChatWrapperProps {
  children: ReactElement
}

export const ChatWrapper = (props: IChatWrapperProps) => {
  const { dispatch } = useContext(AppContext)

  const handleAddEntry = (chatEntry: IChatEntry) => {
    dispatch({ type: 'addChatEntryAction', payload: { chatEntry }})
  }

  const { sendMessage } = useWebSocket('ws://placeholder', {
    onMessage: (message) => {
      try {
        const chatEntry = JSON.parse(message.data) as IChatEntry
        handleAddEntry(chatEntry)
      } catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    }
  })

  const addChatEntry = (text: string) => {
    const chatEntry: IChatEntry = { type: 'text', text, from: "You" }
    handleAddEntry(chatEntry)
    sendMessage(JSON.stringify({ text }))
  }

  
  const content = cloneElement(props.children, { ...{ addChatEntry } })
  return content
}
