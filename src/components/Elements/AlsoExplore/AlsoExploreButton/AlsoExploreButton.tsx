import type { CSSProperties } from "react"
import type { IIntroGroup } from "src/types"
import hopRight from 'src/assets/icons/chatIntro/hopRight.svg'
import { motion, type MotionProps, type Variants } from "motion/react"

interface IAlsoExploreButtonProps {
  group: IIntroGroup
  onClick: (section: IIntroGroup) => void
}

export const AlsoExploreButton = (props: IAlsoExploreButtonProps) => {
  const onClick = () => props.onClick(props.group)
  
  const style: CSSProperties = { backgroundColor: props.group.color }

  const motionProps: MotionProps = {
    animate: "animate", whileHover: "hover", whileFocus: "hover"
  }

  const motionVariants: Variants = { 
    animate: { opacity: 0.5 }, 
    hover: { opacity: 1 } 
  }

  return (
    <motion.button {...motionProps} className="alsoExploreButton" onClick={onClick}>
      <span style={style}>
        <span className="text">{props.group.title}</span>
        <motion.span variants={{...motionVariants}} className="icon">
          <img src={hopRight} alt="" />
        </motion.span>
      </span>
    </motion.button>
  )
}
