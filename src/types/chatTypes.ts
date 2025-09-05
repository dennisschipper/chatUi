export interface IChat {
  entries: IChatEntry[]
}

export interface IChatEntry {
  id?: string
  text: string
  from: string
  type: 'text' | 'items' | 'status'
  suggestions?: string[]
  items?: any[]
}
