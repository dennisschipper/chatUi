import { UserLocationRequest } from '../Generic/Buttons/UserLocationRequest'
import { ChatOptions } from '../Elements/Popovers/ChatOptions/ChatOptions'
import { ChatInput, Messages, Cards, Recent, type IMessage, type IRecentItem } from 'weaviate-agent-chat-ui'
import { cards, recentItems, testFlatData } from 'src/data/testFlatData'


export const AppWrapper = () => {
  const controls = [ <UserLocationRequest />, <ChatOptions /> ]
  const onClickRecentItem = (recentItem: IRecentItem) => console.log(recentItem)

  const addMessage = () => {
    
  }

  const messages: IMessage[] = [

  ]

  return (
    <div className="appWrapper">
      <Messages maxItems={200} blockScrolling={true} messages={messages} title={{ text: "What's next?" }} />
      <Cards cards={cards} />
      <Recent recentItems={recentItems} onClick={onClickRecentItem} header={{ title: "Recent conversations" }} />
      <ChatInput onSubmit={addMessage} controls={controls} />
    </div>
  )
}
