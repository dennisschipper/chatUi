interface ILoadMoreChatsButtonProps {
  onClick: () => void
  count: number
  display: boolean
}

export const LoadMoreChatsButton = (props: ILoadMoreChatsButtonProps) => {
  return !props.display ? null : (
    <button onClick={props.onClick} className="loadMoreChatsButton">
      Load {props.count} more items
    </button>
  )
}
