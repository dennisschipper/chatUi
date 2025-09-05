import { useCallback, useRef } from 'react'
import type { IChatEntry } from 'src/types'

interface WebSocketMessage {
  data: string
}

interface UseWebSocketOptions {
  onMessage?: (message: WebSocketMessage) => void
  onOpen?: () => void
  onClose?: () => void
  onError?: () => void
}

interface UseWebSocketReturn {
  sendMessage: (message: string) => void
  lastMessage: WebSocketMessage | null
  readyState: number
}

export const useWebSocket = (url: string, options: UseWebSocketOptions = {}): UseWebSocketReturn => {
  const lastMessage = useRef<WebSocketMessage | null>(null)
  const readyState = 1 // WebSocket.OPEN

  const sendMessage = useCallback((message: string) => {
    try {
      const parsedMessage = JSON.parse(message)
      
      // Send status message after 333ms
      setTimeout(() => {
        const statusEntry: IChatEntry = {
          type: 'status',
          text: 'Processing...',
          from: 'System',
          id: `status-${Date.now()}`
        }
        
        const statusMessage: WebSocketMessage = {
          data: JSON.stringify(statusEntry)
        }
        
        lastMessage.current = statusMessage
        options.onMessage?.(statusMessage)
      }, 333)

      // Send text response after 1 second
      setTimeout(() => {
        const textEntry: IChatEntry = {
          type: 'text',
          text: `Response: ${parsedMessage.text || parsedMessage}`,
          from: 'Assistant',
          id: `text-${Date.now()}`
        }
        
        const textMessage: WebSocketMessage = {
          data: JSON.stringify(textEntry)
        }
        
        lastMessage.current = textMessage
        options.onMessage?.(textMessage)
      }, 1000)
      
    } catch (error) {
      console.error('Error processing message:', error)
    }
  }, [options])

  return {
    sendMessage,
    lastMessage: lastMessage.current,
    readyState
  }
}