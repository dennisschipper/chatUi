import submit from '../../../assets/icons/submit.svg'

interface IChatSubmitProps {
  onClick: () => void
  disabled?: boolean
}

export const ChatSubmit = (props: IChatSubmitProps) => {
  return (
    <button onClick={props.onClick} className="chatSubmit" disabled={props.disabled}>
      <img src={submit} alt="" />
    </button>
  )
}
