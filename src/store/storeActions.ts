import type { IAppState, IChatEntry, IUserLocation } from "src/types"

export type TActions = TAddChatEntryAction | TResetChatAction | TSetUserLocationAction | TClearUserLocationAction

export type TAddChatEntryAction = ({ type: 'addChatEntryAction', payload: { chatEntry: IChatEntry } })
export const addChatEntryAction = (state: IAppState, action: TAddChatEntryAction): IAppState => {
  return {
    ...state,
    chat: {
      ...state.chat,
      entries: [...state.chat.entries, action.payload.chatEntry]
    }
  }
}

export type TResetChatAction = ({ type: 'resetChatAction' })
export const resetChatAction = (state: IAppState, _: TResetChatAction): IAppState => {
  return {
    ...state,
    chat: {
      entries: []
    }
  }
}

export type TSetUserLocationAction = ({ type: 'setUserLocationAction', payload: { location: IUserLocation } })
export const setUserLocationAction = (state: IAppState, action: TSetUserLocationAction): IAppState => {
  return {
    ...state,
    user: {
      ...state.user,
      location: action.payload.location
    }
  }
}

export type TClearUserLocationAction = ({ type: 'clearUserLocationAction' })
export const clearUserLocationAction = (state: IAppState, _: TClearUserLocationAction): IAppState => {
  return {
    ...state,
    user: {
      ...state.user,
      location: undefined
    }
  }
}
