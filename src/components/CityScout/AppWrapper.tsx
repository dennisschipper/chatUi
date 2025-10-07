import { UserLocationRequest } from '../Generic/Buttons/UserLocationRequest'
import { ChatOptions } from '../Elements/Popovers/ChatOptions/ChatOptions'
import { ChatInput, Messages, Cards, Recent, type IMessage, type IRecentItem, type IMessageSuggestion } from 'weaviate-agent-chat-ui'
import { cards, recentItems, systemMessage, testFlatData, userMessage } from 'src/data/testFlatData'
import { useState, type ReactNode } from 'react'
import user from '../../../packages/weaviate-agent-chat-ui/src/assets/icons/user.svg'
import ai from '../../../packages/weaviate-agent-chat-ui/src/assets/icons/ai.svg'


export const AppWrapper = () => {
  const controls = [ <UserLocationRequest />, <ChatOptions /> ]
  const onClickRecentItem = (recentItem: IRecentItem) => console.log(recentItem)

  const addMessage = (content: ReactNode) => {
    const message = userMessage(content)
    updateMessages([message, ...messages])
  }

  const addResponse = () => {
    const message = systemMessage()
    updateMessages([message, ...messages])
  }

  const [ messages, updateMessages ] = useState<IMessage[]>([])

  const onClick = () => addResponse()

  const onClickSuggestion = (suggestion: IMessageSuggestion, _: IMessage) => {
    addMessage(suggestion.text)
  }

  const displayRecent = !messages.length && !!recentItems.length

  return (
    <div className="appWrapper">
      <span className="addResponse" onClick={onClick}>Add response</span>
      <Messages 
        maxItems={200} 
        blockScrolling={true} 
        messages={messages} 
        title={{ text: "What's next?" }} 
        onClickSuggestion={onClickSuggestion}
      />
      <Cards cards={cards} display={!messages.length} />
      <Recent 
        display={displayRecent}
        recentItems={recentItems} 
        onClick={onClickRecentItem} 
        header={{ title: "Recent conversations" }} 
      />
      <ChatInput onSubmit={addMessage} controls={controls} />
    </div>
  )
}
