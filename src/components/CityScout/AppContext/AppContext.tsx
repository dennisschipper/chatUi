import { createContext, type Dispatch } from "react";
import type { TActions } from "src/store/storeActions";
import type { IAppState } from "src/types";

export const AppContext = createContext<{appState: IAppState, dispatch: Dispatch<TActions>}>(null!)
