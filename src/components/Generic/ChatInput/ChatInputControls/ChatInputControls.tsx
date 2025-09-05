import { type ReactElement } from 'react'

interface IChatInputControlsProps {
  customControls?: ReactElement[]
}

export const ChatInputControls = (props: IChatInputControlsProps) => {
  if (!props.customControls || props.customControls.length === 0) {
    return null
  }

  return (
    <>
      {props.customControls.map((control, index) => (
        <div key={index}>{control}</div>
      ))}
    </>
  )
}