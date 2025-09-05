export const server = "http://localhost:8000/api/"
export const headers = { 'Content-Type': 'application/json' }
export const postHeader: RequestInit = { method: 'POST', headers }
export const getHeader: RequestInit = { method: 'GET', headers }
export const deleteHeader: RequestInit = { method: 'DELETE', headers }
export const socketUrl = import.meta.env.VITE_WEBSOCKETS_PATH

export type TSendQueryEndpoint = (query: string, coordinates?: { user?: { lng: number, lat: number }; neighborhoods?: { lng: number, lat: number }[] }) => Promise<{
  user_id: string
  conversation_id: string
  message_id: string
  places: {
    place_id: string
    name: string
    address: string
    rating: number
    reviews: { review_id: string, place_id: string, source: string, text: string, upvotes: number, stars: unknown }[]
    tags: string[]
  }[]
}>
export const sendQueryEndpoint: TSendQueryEndpoint = (query, coordinates) => {
  const userId = 1
  const conversationId = 2
  const url = `${server}query/${userId}/${conversationId}`
  
  const requestBody: any = { query };
  if (coordinates) {
    requestBody.coordinates = coordinates;
  }
  
  const body = JSON.stringify(requestBody)

  return fetch(url, {...postHeader, body })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .catch(error => {
      console.error('Error fetching items:', error)
      throw error
    })
}
