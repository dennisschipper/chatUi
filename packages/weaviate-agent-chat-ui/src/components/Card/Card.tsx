import { ReactNode } from "react"

interface ICardProps {
  children: ReactNode | ReactNode[]
}
export const Card = (props: ICardProps) => {
  return (
    <div className="card">{props.children}</div>
  )
}
