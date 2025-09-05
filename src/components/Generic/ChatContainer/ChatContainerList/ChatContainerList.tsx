import { type ReactElement, type Ref } from 'react'

interface IChatContainerListProps {
  items: ReactElement[]
  itemIds: string[]
  startIndex: number
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void
  header?: ReactElement
  ref: Ref<any>
}

export const ChatContainerList = (props: IChatContainerListProps) => {
  const display = !!props.items.length

  const items = props.items.map((item, index) => (
    <li key={props.itemIds[index]}>{item}</li>
  ))

  return !display ? null : (
    <div className="chatScroller" onScroll={props.onScroll} ref={props.ref}>
      {props.header}
      <ul className="chatContainerList">
        {items}
      </ul>
    </div>
  )
}
