import type { IChat } from "."

export interface IUserLocation {
  lat: number
  lon: number
}

export interface IUser {
  location?: IUserLocation
}

export interface IAppState {
  chat: IChat
  user: IUser
}
