import type { Ref } from "react"

interface IChatOptionsTargetProps {
  popoverProps: Record<string, unknown>
  ref: Ref<any>
}

export const ChatOptionsTarget = (props: IChatOptionsTargetProps) => {
  const { popoverProps, ref } = props
  return (
    <button {...popoverProps} ref={ref}>
      Options
    </button>
  )
}
