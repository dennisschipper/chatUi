import { motion } from "motion/react"

interface IPlaceholderProps {
  text: string
  active: boolean
  onClick: () => void
}

export const Placeholder = (props: IPlaceholderProps) => {
  const { active } = props
  const motionProps = {
    initial: { opacity: 0, x: 0 },
    animate: { 
      x: active ? 0 : -20,
      opacity: active ? 1: 0, 
      filter: active ? "blur(0)" : "blur(25px)",
    },
    transition: { duration: 0.5 }
  }

  return (
    <motion.div className="chatui-placeholder" {...motionProps} onClick={props.onClick}>
      <span>{props.text}</span>
    </motion.div>
  )
}
