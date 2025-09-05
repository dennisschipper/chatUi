import { BrowserRouter } from 'react-router'
import './styles/index.scss'
import { AppContext } from './components/CityScout/AppContext/AppContext'
import { useReducer } from 'react'
import { appReducer, initialState } from './store/appReducer'
import { AppRouter } from './components/CityScout/AppRouter/AppRouter'
import { ChatWrapper } from './components/CityScout/ChatWrapper/ChatWrapper'

export const App = () => {
  const [ appState, dispatch ] = useReducer(appReducer, initialState)
  return (
    <>
    <AppContext.Provider value={{ appState, dispatch }}>
      <BrowserRouter>
        <ChatWrapper>
          <AppRouter />
        </ChatWrapper>
      </BrowserRouter>
    </AppContext.Provider>
    </>
  )
}

export default App
