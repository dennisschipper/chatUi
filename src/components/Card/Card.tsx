import { motion } from "motion/react"
import { ReactNode } from "react"
import { defaultMotionProps as motionProps } from "../../helpers"

interface ICardProps {
  children: ReactNode | ReactNode[]
}

export const Card = (props: ICardProps) => {
  return (
    <motion.div {...motionProps} className="card">
      {props.children}
    </motion.div>
  )
}
