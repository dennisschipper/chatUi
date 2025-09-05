import useMeasure from "react-use-measure"
import { useEffect, type ReactNode, type RefObject, type UIEventHandler } from "react"
import type { IScrollStatus } from "src/types"

interface IOverflowScrollerProps {
  children: ReactNode
  ref: RefObject<HTMLDivElement>
  updateScrollStatus: (scrollStatus: IScrollStatus) => void
  scrollStatus: IScrollStatus
}

export const OverflowScroller = (props: IOverflowScrollerProps) => {
  const { children, scrollStatus } = props
  const [ ref, bounds ] = useMeasure()

  const scrollPositions = (el: HTMLDivElement) => ({
    left: el.scrollLeft > 0, right: el.scrollLeft < el.scrollWidth - el.clientWidth
  })

  useEffect(() => {
    props.updateScrollStatus(scrollPositions(props.ref.current))
  }, [ bounds ])

  const onScroll: UIEventHandler<HTMLDivElement> = () => {
    props.updateScrollStatus(scrollPositions(props.ref.current))
  }
  
  const overflowing = !(scrollStatus.left === false && scrollStatus.right === false)
  const className = `
    overflowScrollerWrapper 
    ${scrollStatus.left ? 'left' : ''} 
    ${scrollStatus.right ? 'right' : ''} 
    ${overflowing ? 'overflowing' : ''}
  `

  return (
    <div className={className}>
      <div className="overflowScroller" ref={props.ref} onScroll={onScroll}>
        <div ref={ref}>
          {children}
        </div>
      </div>
    </div>
  )
}
