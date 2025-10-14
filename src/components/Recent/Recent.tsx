import '../../styles/recent/index.scss'
import { AnimatePresence, motion } from "motion/react"
import { IRecentItem } from "../../types"
import { IRecentHeaderProps, RecentHeader } from "./RecentHeader/RecentHeader"
import { RecentItem } from "./RecentItem/RecentItem"
import { defaultMotionProps as motionProps } from "../../helpers"

interface IRecentProps {
  recentItems: IRecentItem[]
  onClick: (recentItem: IRecentItem) => void
  header?: IRecentHeaderProps
  display?: boolean
}

export const Recent = (props: IRecentProps) => {
  const recentItems = props.recentItems.map(
    (item, i) => (
      <li key={i}>
        <RecentItem recentItem={item} onClick={props.onClick} />
      </li>
    )
  )

  const display = !props.recentItems.length || props.display === false

  return (
    <AnimatePresence>
      { !display &&
        <motion.div {...motionProps} className="recent">
          <RecentHeader {...props.header} />
          <hr />
          <ul className="recentsList">
            {recentItems}
          </ul>
        </motion.div>
      }
    </AnimatePresence>
  )
}
