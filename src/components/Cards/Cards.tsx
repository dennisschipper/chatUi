import '../../styles/cards/index.scss'
import { useState, useRef, useEffect, ReactNode } from "react"
import { Card } from "../Card/Card"
import { AnimatePresence, motion } from "motion/react"
import { defaultMotionProps as motionProps } from "../../helpers"

interface ICardsProps {
  display?: boolean
  cards: ReactNode[]
}

export const Cards = (props: ICardsProps) => {
  const [ position, updatePosition ] = useState<{left: boolean, right: boolean}>({
    left: false, right: false
  })

  const wrapperRef = useRef<HTMLDivElement>(null)
  const ulRef = useRef<HTMLUListElement>(null)

  const updateScrollPosition = () => {
    const wrapper = wrapperRef.current
    const ul = ulRef.current
    if (!wrapper || !ul) return

    const scrollLeft = wrapper.scrollLeft
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth

    updatePosition({ left: scrollLeft === 0, right: scrollLeft >= maxScrollLeft })
  }

  useEffect(() => {
    updateScrollPosition()
  }, [])

  const cards = props.cards.map(
    (card, i) => (
      <li key={i}>
        <Card>{card}</Card>
      </li>
    )
  )

  const display = props.display === false

  return (
    <AnimatePresence>
      { !display && 
        <motion.div {...motionProps}>
          <div className={`cardSlider ${position.left ? 'left' : ''}`}>
            <div className={`cardWrapper ${position.right ? 'right' : ''}`} ref={wrapperRef} onScroll={updateScrollPosition}>
              <ul ref={ulRef}>
                {cards}
              </ul>
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}
