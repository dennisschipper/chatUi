import { ReactNode } from "react";

export interface IMessageSource {
  title: string 
  icon?: string
}

export interface IMessage {
  id: string | number
  source: IMessageSource
  content: ReactNode
  suggestions: IMessageSuggestion[]
}

export interface IMessageSuggestion {
  text: string,
  highlights?: string[]
}
