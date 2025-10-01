import { ReactNode } from "react";

export interface IRecentItem {
  id?: string
  text: string
}

export interface IMessageSource {
  title: string 
  icon?: string
}

export interface IMessage {
  id: string | number
  source: IMessageSource
  content: ReactNode
  suggestions?: IMessageSuggestion[]
  meta?: { displayMeta: boolean }
}

export interface IMessageSuggestion {
  text: string,
  highlights?: string[]
}
