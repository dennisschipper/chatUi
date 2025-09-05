import type { ReactNode } from "react"

interface IContentPanelProps {
  children: ReactNode | ReactNode[]
}

export const ContentPanel = (props: IContentPanelProps) => {
  return (
    <div className="contentPanel">
      {props.children}
    </div>
  )
}
