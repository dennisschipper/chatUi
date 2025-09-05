import cityScout from 'src/assets/cityScout.svg'

interface IEmptyStateProps {
  display: boolean
}

export const EmptyState = (props: IEmptyStateProps) => {
  if (!props.display) {
    return null
  }

  return (
    <div className="emptyState">
      <div className="emptyStateMessage">
        <img src={cityScout} alt="" />
        <p>No messages yet. Start a conversation!</p>
      </div>
    </div>
  )
}
