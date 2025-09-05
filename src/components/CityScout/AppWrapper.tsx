import { useContext } from 'react'
import { AppContext } from 'src/components/CityScout/AppContext/AppContext'
import { ChatContainer } from '../Generic/ChatContainer'
import { ChatInput } from '../Generic'
import { UserLocationRequest } from '../Generic/Buttons/UserLocationRequest'
import { ChatOptions } from '../Elements/Popovers/ChatOptions/ChatOptions'

interface IAppWrapperProps {
  addChatEntry: (text: string) => void
}

export const AppWrapper = (props: IAppWrapperProps) => {
  const { appState, dispatch } = useContext(AppContext)
  const { addChatEntry } = props

  const items = appState.chat.entries.map((entry, i) => ({
    item: <div key={entry.id ?? `entry-${i}`} data-entry-id={entry.id}>{entry.text}</div>,
    id: entry.id ?? `entry-${i}`
  }))

  const controls = [ <UserLocationRequest />, <ChatOptions /> ]

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <div className="appWrapper">  
        <ChatContainer items={items} blockScrolling={true} maxItems={15} />
        <ChatInput onSubmit={addChatEntry} controls={controls} />
      </div>
    </AppContext.Provider>
  )
}
