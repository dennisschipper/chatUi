import type { ReactNode } from "react"

interface IPopoverContentFooterProps {
  content: ReactNode
}

export const PopoverContentFooter = (props: IPopoverContentFooterProps) => {
  return !props.content ? null : (
    <footer className="popoverContentFooter">
      {props.content}
    </footer>
  )
}
