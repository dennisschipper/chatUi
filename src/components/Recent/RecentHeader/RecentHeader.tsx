import { cloneElement, ReactElement } from "react"

export type TRecentHeaderProps = Partial<IRecentHeaderProps>

export interface IRecentHeaderProps {
  title?: string
  component?: ReactElement<TRecentHeaderProps>
}
export const RecentHeader = (props: IRecentHeaderProps) => {
  if (props.component) {
    const component = cloneElement(props.component, {...props, component: undefined})
    return component
  }

  return !props.title ? null : (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}
