import { UserLocationRequest } from '../Generic/Buttons/UserLocationRequest'
import { ChatOptions } from '../Elements/Popovers/ChatOptions/ChatOptions'
import { ChatInput, Messages, Cards, Recent, type IMessage, type IRecentItem, type IMessageSuggestion } from 'weaviate-agent-chat-ui'
import { cards, recentItems, systemMessage, systemMessageSuggestions, userMessage, chatHistory1, chatHistory2 } from 'src/data/testFlatData'
import { useState, type ReactNode } from 'react'


export const AppWrapper = () => {
  const controls = [ <UserLocationRequest />, <ChatOptions /> ]
  const onClickRecentItem = (recentItem: IRecentItem) => {
    if (recentItem.id === "1") {
      updateMessages(chatHistory1)
    } else if (recentItem.id === "2") {
      updateMessages(chatHistory2)
    }
  }
  
  const onSubmitMeta = (text: string) => addMessage(text)

  const addMessage = (content: ReactNode) => {
    const message = userMessage(content)
    updateMessages([...messages, message])
  }

  const addResponse = () => {
    const message = systemMessage(messageIndex)
    updateMessages([...messages, message])
  }

  const [ messages, updateMessages ] = useState<IMessage[]>([])
  const [ messageIndex, updateMessageIndex ] = useState<number>(0)

  const onClick = () => {
    if (messageIndex < systemMessageSuggestions.length) {
      addResponse()
      updateMessageIndex(messageIndex + 1)
    } else if (messageIndex === systemMessageSuggestions.length) {
      updateMessages([])
      updateMessageIndex(0)
    }
  }

  const onClickClear = () => updateMessages([])

  const onClickSuggestion = (suggestion: IMessageSuggestion, _: IMessage) => {
    addMessage(suggestion.text)
  }

  const displayRecent = !messages.length && !!recentItems.length

  return (
    <div className="appWrapper">
      <span className="addResponse" onClick={onClick}>Add response</span>
      <span className="clear" onClick={onClickClear}>Clear</span>
      <Messages 
        maxItems={200} 
        blockScrolling={false} 
        messages={messages} 
        title={{ text: "What's next?" }} 
        onClickSuggestion={onClickSuggestion}
        onSubmitMeta={onSubmitMeta}
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
