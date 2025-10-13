import { cloneElement, ReactElement } from "react"

export type TRecentHeaderProps = Omit<IRecentHeaderProps, 'component'>

export interface IRecentHeaderProps {
  title?: string
  component?: ReactElement
}
export const RecentHeader = (props: IRecentHeaderProps) => {
  if (props.component) {
    const component = cloneElement<any>(props.component, {...props, component: undefined})
    return component
  }

  return !props.title ? null : (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}
