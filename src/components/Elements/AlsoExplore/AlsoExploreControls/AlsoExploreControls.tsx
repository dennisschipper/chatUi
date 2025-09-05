import type { IScrollStatus } from "src/types"

interface IAlsoExploreControlsProps {
  display: boolean
  scroll: (left: number) => void
  scrollStatus: IScrollStatus
}

export const AlsoExploreControls = (props: IAlsoExploreControlsProps) => {
  const { left, right } = props.scrollStatus
  const onClickLeft = () => props.scroll(-100)
  const onClickRight = () => props.scroll(100)
  
  return !props.display ? null : (
    <nav className="alsoExploreControls">
      <button className="blank left" onClick={onClickLeft} disabled={!left}>
        <span className="body">
          <span className="disk" />
        </span>
      </button>
      <button className="blank right" onClick={onClickRight} disabled={!right}>
        <span className="body">
          <span className="disk" />
        </span>
      </button>
    </nav>
  )
}
