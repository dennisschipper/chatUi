import { useRef, useState } from "react"
import { OverflowScroller } from "src/components/Generic"
import { AlsoExploreControls } from "./AlsoExploreControls/AlsoExploreControls"
import { AlsoExploreButton } from "./AlsoExploreButton/AlsoExploreButton"
import type { IIntroGroup, IScrollStatus } from "src/types"

interface IAlsoExploreProps {
  groups: IIntroGroup[]
  selectGroup: (group: IIntroGroup) => void
}

// Note: This can probably be reworked: Completely remove the overflow scroller from
// any context of the component and rewrite it's logic, then have the controls 
// included with the scroller. (Maybe context?)

export const AlsoExplore = (props: IAlsoExploreProps) => {
  const ref = useRef<HTMLDivElement>(null!)
  const [ scrollStatus, updateScrollStatus ] = useState<IScrollStatus>(
    { left: true, right: false }
  )
  const overflowing = !(scrollStatus.left === false && scrollStatus.right === false)

  const scroll = (left: number) => {
    ref.current && ref.current.scrollBy({ left, behavior: 'smooth'})
  }

  const items = props.groups.map(
    (group, i) => (
      <li key={i}>
        <AlsoExploreButton group={group} onClick={props.selectGroup} />
      </li>
    )
  )
  
  return (
    <div className="alsoExplore">
      <AlsoExploreControls 
        display={overflowing} scroll={scroll} scrollStatus={scrollStatus}
      />
      <div className="title">Also explore:</div>
      <OverflowScroller 
        ref={ref} updateScrollStatus={updateScrollStatus} scrollStatus={scrollStatus}
      >
        <ul className="exploreSectionsList">
          {items}
        </ul>
      </OverflowScroller>
    </div>
  )
}
