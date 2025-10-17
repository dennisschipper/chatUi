import { IRecentItem } from "../../../types"
import chat from '../../../assets/icons/chat.svg'
import arrowRight from '../../../assets/icons/arrowRight.svg'
import { ReactElement } from "react"

export type TRecentItemProps = Partial<IRecentItemProps>

export interface IRecentItemProps {
  recentItem: IRecentItem
  onClick: (recentItem: IRecentItem) => void
  component?: ReactElement<TRecentItemProps>
}

export const RecentItem = (props: IRecentItemProps) => {
  const onClick = () => {
    props.onClick(props.recentItem)
  }

  const onKeyDown: React.KeyboardEventHandler<HTMLElement> = (e) => {
    e.key === 'Enter' && onClick()
  }
  
  return (
    <div className="recentItem" onClick={onClick} tabIndex={0} onKeyDown={onKeyDown}>
      <div className="icon">
        <img src={chat} alt="" />
      </div>
      <div className="text">{props.recentItem.text}</div>
      <div className="iconEnd">
        <img src={arrowRight} alt="" />
      </div>
    </div>
  )
}
