import { useContext } from 'react'
import { AppContext } from 'src/components/CityScout/AppContext/AppContext'
import { ChatInput } from '../Generic'
import { UserLocationRequest } from '../Generic/Buttons/UserLocationRequest'
import { ChatOptions } from '../Elements/Popovers/ChatOptions/ChatOptions'

import { Messages, type IMessage } from 'weaviate-agent-chat-ui'

interface IAppWrapperProps {
  addChatEntry: (text: string) => void
}

export const AppWrapper = (props: IAppWrapperProps) => {
  const { appState } = useContext(AppContext)
  const { addChatEntry } = props
  const items: IMessage[] = appState.chat.entries.slice(0, 5)
  const controls = [ <UserLocationRequest />, <ChatOptions /> ]

  return (
    <div className="appWrapper">  
      <Messages 
        maxItems={200} 
        blockScrolling={true} 
        messages={items} 
        title={{ text: "What's next?" }}
      />
      <ChatInput onSubmit={addChatEntry} controls={controls} />
    </div>
  )
}
