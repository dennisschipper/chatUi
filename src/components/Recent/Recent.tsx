import '../../styles/recent/index.scss'
import { AnimatePresence, motion } from "motion/react"
import { IRecentItem } from "../../types"
import { IRecentHeaderProps, RecentHeader } from "./RecentHeader/RecentHeader"
import { RecentItem } from "./RecentItem/RecentItem"
import { defaultMotionProps as motionProps, Theme } from "../../helpers"

interface IRecentProps {
  recentItems: IRecentItem[]
  onClick: (recentItem: IRecentItem) => void
  header?: IRecentHeaderProps
  display?: boolean
  theme?: Theme
}

export const Recent = (props: IRecentProps) => {
  const recentItems = props.recentItems.map(
    (item, i) => (
      <li key={item.id || i}>
        <RecentItem recentItem={item} onClick={props.onClick} />
      </li>
    )
  )

  const display = !props.recentItems.length || props.display === false

  return (
    <AnimatePresence>
      { !display &&
        <motion.div {...motionProps} className="weaviate-chat-ui chatui-recent" data-theme={props.theme || 'light'}>
          <RecentHeader {...props.header} />
          <hr className="chatui-hr" />
          <ul className="chatui-recentsList">
            {recentItems}
          </ul>
        </motion.div>
      }
    </AnimatePresence>
  )
}
