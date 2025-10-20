import '../../styles/cards/index.scss'
import { useState, useRef, useEffect, ReactNode, ReactElement, cloneElement } from "react"
import { Card, TCardProps } from "../Card/Card"
import { AnimatePresence, motion } from "motion/react"
import { defaultMotionProps as motionProps, Theme } from "../../helpers"

export type TCardsProps = Partial<Omit<ICardsProps, 'component'>>

interface ICardsProps {
  display?: boolean
  cards: ReactNode[]
  theme?: Theme
  component?: ReactElement<TCardsProps>
  cardProps?: TCardProps
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
        <Card {...props.cardProps}>{card}</Card>
      </li>
    )
  )

  if (props.component) {
    return cloneElement(props.component, { 
      cards: props.cards,
      display: props.display,
      theme: props.theme
    })
  }

  const cardSliderClassName = `
    weaviate-chat-ui 
    chatui-cardSlider 
    ${position.left ? 'left' : ''}
  `

  const cardWrapperClassName = `
    chatui-cardWrapper 
    ${position.right ? 'right' : ''}
  `

  return (
    <AnimatePresence>
      { !!props.display &&
        <motion.div {...motionProps}>
          <div className={cardSliderClassName} data-theme={props.theme || 'light'}>
            <div 
              className={cardWrapperClassName} 
              ref={wrapperRef} 
              onScroll={updateScrollPosition}
            >
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
