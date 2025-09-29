import { useState, useRef, useEffect } from "react"

export const Cards = () => {
  const [ position, updatePosition ] = useState<{
    i: number, left: boolean, right: boolean
  }>({
    i: 0,
    left: false,
    right: false
  })

  const wrapperRef = useRef<HTMLDivElement>(null)
  const ulRef = useRef<HTMLUListElement>(null)

  const updateScrollPosition = () => {
    const wrapper = wrapperRef.current
    const ul = ulRef.current
    if (!wrapper || !ul) return

    const scrollLeft = wrapper.scrollLeft
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth

    updatePosition({
      i: scrollLeft,
      left: scrollLeft === 0,
      right: scrollLeft >= maxScrollLeft
    })
  }

  useEffect(() => {
    updateScrollPosition()
  }, [])

  const [ x, ux ] = useState<boolean>(false)


  const className = `
    cardWrapper 
    ${position.left ? 'left' : ''} 
    ${position.right ? 'right' : ''}
    ${x ? 'x' : ''}
  `


  return (
    <div>
      <div>
        <span onClick={() => ux(!x)}>left:{position.i}</span>
        <span>full left: {String(position.left)}</span>
        <span>full right: {String(position.right)}</span>
      </div>
      <div className={`cardSlider`}>
        <div className={className} ref={wrapperRef} onScroll={updateScrollPosition}>
          <ul ref={ulRef}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
