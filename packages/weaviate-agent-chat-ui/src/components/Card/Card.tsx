import { motion, MotionProps } from "motion/react"
import { ReactNode } from "react"

interface ICardProps {
  children: ReactNode | ReactNode[]
}
export const Card = (props: ICardProps) => {
  const motionProps: MotionProps = {
    initial: { opacity: 0  },
    animate: { opacity: 1  },
    exit: { opacity: 0 },
    transition: { duration: 0.25 }
  }

  return (

    <motion.div {...motionProps} className="card">{props.children}</motion.div>
  )
}
