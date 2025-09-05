import { useState, cloneElement, type ReactElement, useRef } from 'react'
import { useFloating, autoUpdate, offset, flip, useHover, useFocus, useDismiss, useRole, useInteractions, type Placement, FloatingPortal, FloatingArrow, arrow } from '@floating-ui/react'

interface ITooltipProps {
  target: ReactElement
  content: string | ReactElement
  placement?: Placement
  delay?: number
}

export const Tooltip = (props: ITooltipProps) => {
  const [ open, onOpenChange ] = useState(false)
  const arrowRef = useRef(null)

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange,
    placement: props.placement ?? 'top',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: 'start' }),
      arrow({ element: arrowRef })
    ]
  })

  const hover = useHover(context, { delay: { open: props.delay ?? 0, close: 100 } })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover, focus, dismiss, role
  ])

  const target = cloneElement(props.target, {...{
    ref: refs.setReference, ...getReferenceProps()
  }})

  return (
    <>
      {target}
      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="tooltip"
            {...getFloatingProps()}
          >
            <FloatingArrow ref={arrowRef} context={context} tipRadius={3} width={10} height={6} />
            {props.content}
          </div>
        </FloatingPortal>
      )}
    </>
  )
}
