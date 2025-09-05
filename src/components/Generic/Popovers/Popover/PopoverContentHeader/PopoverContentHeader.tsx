import type { ReactNode } from "react"

interface IPopoverContentHeaderProps {
  onClose: () => void
  content?: ReactNode
}

export const PopoverContentHeader = (props: IPopoverContentHeaderProps) => {
  const onClick = () => props.onClose()

  return !props.content ? null : (
    <header className="popoverContentHeader">
      <div className="content">{props.content}</div>
      <div className="controls">
        <button onClick={onClick}>x</button>
      </div>
    </header>
  )
}
