import { useState, useRef, useEffect, ReactNode } from "react"
import { Card } from "../Card/Card"

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

  return props.display === false ? null : (
    <div>
      <div className={`cardSlider ${position.left ? 'left' : ''}`}>
        <div className={`cardWrapper ${position.right ? 'right' : ''}`} ref={wrapperRef} onScroll={updateScrollPosition}>
          <ul ref={ulRef}>
            {cards}
          </ul>
        </div>
      </div>
    </div>
  )
}
