import { UserLocationRequest } from '../Generic/Buttons/UserLocationRequest'
import { ChatOptions } from '../Elements/Popovers/ChatOptions/ChatOptions'
import { ChatInput, Messages, Cards, Recent, type IMessage, type IRecentItem } from 'weaviate-agent-chat-ui'
import { cards, recentItems, testFlatData } from 'src/data/testFlatData'

interface IAppWrapperProps {
  addChatEntry: (text: string) => void
}

export const AppWrapper = (props: IAppWrapperProps) => {
  const { addChatEntry } = props
  const messages: IMessage[] = testFlatData.slice(0, 13)
  const controls = [ <UserLocationRequest />, <ChatOptions /> ]
  const onClickRecentItem = (recentItem: IRecentItem) => console.log(recentItem)

  return (
    <div className="appWrapper">
      <Messages maxItems={200} blockScrolling={true} messages={messages} title={{ text: "What's next?" }} />
      {/* <Cards cards={cards} /> */}
      {/* <Recent recentItems={recentItems} onClick={onClickRecentItem} header={{ title: "Recent conversations" }} /> */}
      <ChatInput onSubmit={addChatEntry} controls={controls} />
    </div>
  )
}
