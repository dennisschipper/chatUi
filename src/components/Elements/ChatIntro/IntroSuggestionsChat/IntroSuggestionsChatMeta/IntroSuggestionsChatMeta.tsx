import { AnimatePresence, motion, type MotionProps } from "motion/react"

interface IIntroSuggestionsChatMetaProps {
  display: boolean
}

export const IntroSuggestionsChatMeta = (props: IIntroSuggestionsChatMetaProps) => {
  const motionProps: MotionProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 0.33, y: 0, transition: { delay: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { delay: 0 } },
    whileHover: { opacity: 0.66 },
    transition: { delay: 0.1 }
  }

  return (
    <AnimatePresence mode="popLayout">
      { props.display && 
        <motion.div className="introSuggestionsChatMeta" {...motionProps}>
          <p>Press enter to ask a question or <button className="flat" tabIndex={-1}>escape to cancel</button>.</p>
        </motion.div>
      }
    </AnimatePresence>
  )
}
