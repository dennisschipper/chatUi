import type { IMessage } from "weaviate-agent-chat-ui";

export interface IChat {
  entries: IMessage[]
}

export interface IChatEntry {
  id?: string
  text: string
  from: string
  type: 'text' | 'items' | 'status'
  suggestions?: string[]
  items?: any[]
}
