import { introGroups } from "src/data/testData"
import { IntroSuggestions } from "./IntroSuggestions/IntroSuggestions"
import { ContentPanel } from "src/components/Generic/ContentPanel/ContentPanel"
import { ChatIntroHeader } from "./ChatIntroHeader/ChatIntroHeader"
import { AlsoExplore } from "../AlsoExplore/AlsoExplore"
import type { IIntroGroup } from "src/types"
import { useState } from "react"
import { IntroControlsBack } from "./IntroControls/IntroControlsBack/IntroControlsBack"
import { IntroGroup } from "./IntroGroup/IntroGroup"

export const ChatIntro = () => {
  const [ selectedGroup, updateSelectedGroup ] = useState<IIntroGroup>(introGroups[0])
  
  const onSubmit = (text: string) => console.log(text)
  
  const introSuggestions = selectedGroup.sections.map(
    s => <IntroSuggestions key={s.title} {...s} onSubmit={onSubmit} />
  )
  
  const groups = introGroups.map(
    group => (
      <li key={group.id}>
        <IntroGroup group={group} />
      </li>
    )
  )

  return (
    <div className="chatIntro">
      <div className="introControls">
        <IntroControlsBack />
      </div>

      <ContentPanel>
        {groups}
      </ContentPanel>

      <ContentPanel>
        <ChatIntroHeader title={selectedGroup.title} subtitle={selectedGroup.subtitle} />
        {introSuggestions}
      </ContentPanel>

      <ContentPanel>
        <AlsoExplore groups={introGroups} selectGroup={updateSelectedGroup} />
      </ContentPanel>
    </div>
  )
}
