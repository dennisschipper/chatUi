import type { IMark } from "./markTypes"

export interface IIntroSuggestion {
  id: string
  text: string
  highlights: string[]
}

export interface IIntroSuggestionMark extends IMark {
  
}

export interface IIntroSection {
  title: string
  suggestions: IIntroSuggestion[]
  marks?: IIntroSuggestionMark[]
}

export interface IIntroGroup {
  color?: string
  id: string
  title: string
  subtitle: string
  sections: IIntroSection[]
}
