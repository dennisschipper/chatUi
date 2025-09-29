import { BrowserRouter } from 'react-router'
import './styles/index.scss'
import { AppRouter } from './components/CityScout/AppRouter/AppRouter'
import 'weaviate-agent-chat-ui/dist/index.css'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
