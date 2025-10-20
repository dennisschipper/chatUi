interface ILoadMoreChatsButtonProps {
  onClick: () => void
  count: number
  display: boolean
}

export const LoadMoreChatsButton = (props: ILoadMoreChatsButtonProps) => {
  return !props.display ? null : (
    <button onClick={props.onClick} className="chatui-button chatui-loadMoreChatsButton">
      Load {props.count} more items
    </button>
  )
}
