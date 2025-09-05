import { motion, type MotionProps, type Variants } from 'motion/react'
import chevronLeft from 'src/assets/icons/chatIntro/chevronLeft.svg'

export const IntroControlsBack = () => {
  
  const motionProps: MotionProps = {
    animate: "animate",
    whileHover: "hover",
    whileFocus: "hover"
  }
  const motionVariants: Variants = {
    animate: { opacity: 0.5 },
    hover: { scale: 1.33, opacity: 1 }
  }

  return (
    <div className="introControlsBack">
      <motion.button {...motionProps} className="blank">
        <div className="icon">
          <motion.img variants={{...motionVariants}} src={chevronLeft} alt="" />
        </div>
        <div className="text">Back</div>
      </motion.button>
    </div>
  )
}
