import { IRecentItem } from "../../types"
import { IRecentHeaderProps, RecentHeader } from "./RecentHeader/RecentHeader"
import { RecentItem } from "./RecentItem/RecentItem"

interface IRecentProps {
  recentItems: IRecentItem[]
  onClick: (recentItem: IRecentItem) => void
  header?: IRecentHeaderProps
}

export const Recent = (props: IRecentProps) => {
  const recentItems = props.recentItems.map(
    (item, i) => (
      <li key={i}>
        <RecentItem recentItem={item} onClick={props.onClick} />
      </li>
    )
  )

  return !props.recentItems.length ? null : (
    <div className="recent">
      <RecentHeader {...props.header} />
      <hr />
      <ul className="recentsList">
        {recentItems}
      </ul>
    </div>
  )
}
