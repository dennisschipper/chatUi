export interface IReview {
  text: string
  highlights: string[]
  tags: string[]
  source?: {
    from: string
    url?: string
    date: string
  }
}