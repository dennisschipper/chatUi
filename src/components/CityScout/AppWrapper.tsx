import { UserLocationRequest } from '../Generic/Buttons/UserLocationRequest'
import { ChatOptions } from '../Elements/Popovers/ChatOptions/ChatOptions'

import { ChatInput, Messages, Cards, Recent, type IMessage, type IRecentItem } from 'weaviate-agent-chat-ui'
import { cards, testFlatData } from 'src/data/testFlatData'

interface IAppWrapperProps {
  addChatEntry: (text: string) => void
}

export const AppWrapper = (props: IAppWrapperProps) => {
  const { addChatEntry } = props
  const items: IMessage[] = testFlatData.slice(0, 13)
  const controls = [ <UserLocationRequest />, <ChatOptions /> ]

  const recentItems: IRecentItem[] = [
    { id: "1", text: "Established product volume declining" },
    { id: "2", text: "New and established products projected sales." }
  ]

  const onClickRecentItem = (recentItem: IRecentItem) => {
    console.log(recentItem)
  }

  return (
    <div className="appWrapper">
      <Messages
        maxItems={200}
        blockScrolling={true}
        messages={[]}
        title={{ text: "What's next?" }}
      />
      <Cards cards={cards} />
      <Recent 
        recentItems={recentItems} 
        onClick={onClickRecentItem} 
        header={{
          title: "Hey now"
        }}
      />
      <ChatInput onSubmit={addChatEntry} controls={controls} />
    </div>
  )
}
