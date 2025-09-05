import { useState, cloneElement, type ReactElement, type ReactNode, useRef } from 'react'
import { useFloating, autoUpdate, offset, flip, useClick, useDismiss, useRole, useInteractions, type Placement, arrow } from '@floating-ui/react'
import { PopoverContentWrapper } from './PopoverContentWrapper/PopoverContentWrapper'

interface IPopoverProps {
  target: ReactElement
  content: ReactElement
  placement?: Placement
  header?: ReactNode
  footer?: ReactNode
}

export const Popover = (props: IPopoverProps) => {
  const [ open, onOpenChange ] = useState(false)
  const arrowRef = useRef(null)

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange,
    placement: props.placement ?? 'top-end',
    whileElementsMounted: autoUpdate,
    middleware: [ 
      offset(10), 
      flip({ fallbackAxisSideDirection: 'start' }),
      arrow({ element: arrowRef })
    ]
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click, dismiss, role
  ])

  const target = cloneElement(props.target, {...{
    ref: refs.setReference, popoverProps: getReferenceProps()
  }})

  const content = (
    <PopoverContentWrapper 
      context={context} 
      floatingProps={getFloatingProps()}
      floatingStyles={floatingStyles}
      ref={refs.setFloating}
      children={props.content}
      header={props.header}
      onOpenChange={onOpenChange}
      arrowRef={arrowRef}
      footer={props.footer}
    />
  )

  return (
    <>
      { target }
      { open && content }
    </>
  )
}
