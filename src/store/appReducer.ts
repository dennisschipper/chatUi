import { testFlatData } from "src/data/testFlatData"
import type { IAppState } from "../types"
import { addChatEntryAction, resetChatAction, setUserLocationAction, clearUserLocationAction, type TActions } from "./storeActions"

export const initialState: IAppState = {
  chat: { entries: testFlatData },
  user: { location: undefined }
}

export const appReducer = (state: IAppState, action: TActions): IAppState => {
  switch(action.type) {
    case 'addChatEntryAction': return addChatEntryAction(state, action)
    case 'resetChatAction': return resetChatAction(state, action)
    case 'setUserLocationAction': return setUserLocationAction(state, action)
    case 'clearUserLocationAction': return clearUserLocationAction(state, action)
    default: return state
  }
}
