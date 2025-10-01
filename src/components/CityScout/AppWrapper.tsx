import { UserLocationRequest } from '../Generic/Buttons/UserLocationRequest'
import { ChatOptions } from '../Elements/Popovers/ChatOptions/ChatOptions'
import { ChatInput, Messages, Cards, Recent, type IMessage, type IRecentItem } from 'weaviate-agent-chat-ui'
import { cards, recentItems, testFlatData } from 'src/data/testFlatData'
import { useState, type ReactNode } from 'react'
import user from '../../../packages/weaviate-agent-chat-ui/src/assets/icons/user.svg'
import ai from '../../../packages/weaviate-agent-chat-ui/src/assets/icons/ai.svg'


export const AppWrapper = () => {
  const controls = [ <UserLocationRequest />, <ChatOptions /> ]
  const onClickRecentItem = (recentItem: IRecentItem) => console.log(recentItem)

  const addMessage = (value: ReactNode) => {
    const message: IMessage = {
      content: value,
      id: String(Math.random()),
      source: { title: "You", icon: user },
      suggestions: [{ text: "Ask a better question that this.", highlights: ["better question"] }]
    }
    updateMessages([message, ...messages])
  }

  const addResponse = (value: ReactNode) => {
    const message: IMessage = {
      content: value,
      id: String(Math.random()),
      source: { title: "ChatUI", icon: ai },
      suggestions: [{ text: "Ask a better question that this.", highlights: ["better question"] }]
    }
    updateMessages([message, ...messages])
  }

  const [ messages, updateMessages ] = useState<IMessage[]>([])

  const onClick = () => {
    addResponse(<div>sdf</div>)
  }

  return (
    <div className="appWrapper">
      <span className="addResponse" onClick={onClick}>Add response</span>
      <Messages maxItems={200} blockScrolling={true} messages={messages} title={{ text: "What's next?" }} />
      <Cards cards={cards} display={!messages.length} />
      <Recent recentItems={[]} onClick={onClickRecentItem} header={{ title: "Recent conversations" }} />
      <ChatInput onSubmit={addMessage} controls={controls} />
    </div>
  )
}
