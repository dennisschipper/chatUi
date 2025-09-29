import { UserLocationRequest } from '../Generic/Buttons/UserLocationRequest'
import { ChatOptions } from '../Elements/Popovers/ChatOptions/ChatOptions'

import { ChatInput, Messages, type IMessage } from 'weaviate-agent-chat-ui'
import { testFlatData } from 'src/data/testFlatData'

interface IAppWrapperProps {
  addChatEntry: (text: string) => void
}

export const AppWrapper = (props: IAppWrapperProps) => {
  const { addChatEntry } = props
  const items: IMessage[] = testFlatData.slice(0, 13)
  const controls = [ <UserLocationRequest />, <ChatOptions /> ]

  return (
    <div className="appWrapper">  
      <Messages 
        maxItems={200} 
        blockScrolling={true} 
        messages={[]} 
        title={{ text: "What's next?" }}
      />
      <div>sdf</div>
      <ChatInput onSubmit={addChatEntry} controls={controls} />
    </div>
  )
}
