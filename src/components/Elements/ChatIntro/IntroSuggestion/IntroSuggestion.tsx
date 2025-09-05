import { motion, type MotionProps, type Variants } from 'motion/react'
import type { BaseSyntheticEvent } from 'react'
import arrowRight from 'src/assets/icons/chatIntro/arrowRight.svg'
import stars from 'src/assets/icons/chatIntro/stars.svg'
import { highlightText } from 'src/helpers'
import type { IIntroSuggestion } from 'src/types'

interface IIntroSuggestionProps {
  suggestion: IIntroSuggestion
  onClick: (suggestion: IIntroSuggestion) => void
}

export const IntroSuggestion = (props: IIntroSuggestionProps) => {
  const startImg = `url("${stars}")`
  const endImg = `url("${arrowRight}")`

  const onClick = (_: BaseSyntheticEvent) => props.onClick(props.suggestion)
  const text = highlightText({...props.suggestion, highlightType: 'strong'})


  const motionProps: MotionProps = {
    initial: "initial", animate: "animate", whileHover: "focus", whileFocus: "focus"
  }

  const motionVariants: Variants = {
    initial: { opacity: 0.2 },
    animate: { opacity: 0.2 },
    focus: { x: -10, opacity: 1 }
  }

  return (
    <motion.button 
      {...motionProps}
      className="blank introSuggestion" 
      role="button"
      aria-label="A chat suggestion."
      onClick={onClick}
    >
      <div className="icon" style={{backgroundImage: startImg}} />
      <div className="text">
        <p>{text}</p>
      </div>
      <motion.div 
        variants={{...motionVariants}}
        className="icon" 
        style={{backgroundImage: endImg}} 
      />
    </motion.button>
  )
}
