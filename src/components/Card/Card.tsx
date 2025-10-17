import { motion } from "motion/react"
import { cloneElement, ReactElement, ReactNode } from "react"
import { defaultMotionProps as motionProps } from "../../helpers"

export type TCardProps = Partial<ICardProps>

export interface ICardProps {
  children: ReactNode | ReactNode[]
  component?: ReactElement<TCardProps>
}

export const Card = (props: ICardProps) => {
  if (props.component) {
    return cloneElement(props.component, { children: props.children })
  }
  
  return (
    <motion.div {...motionProps} className="card">
      {props.children}
    </motion.div>
  )
}
