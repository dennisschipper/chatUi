import { motion, type MotionProps } from 'motion/react'
import { useEffect, useState, type ChangeEventHandler, type CSSProperties, type FormEventHandler, type KeyboardEventHandler } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import useMeasure from 'react-use-measure'
import chatBubble from 'src/assets/icons/chatIntro/chatBubble.svg'
import send from 'src/assets/icons/chatIntro/send.svg'
import { IntroSuggestionsChatMeta } from './IntroSuggestionsChatMeta/IntroSuggestionsChatMeta'

interface IIntroSuggestionsChatProps {
  onSubmit: (text: string) => void
}

export const IntroSuggestionsChat = (props: IIntroSuggestionsChatProps) => {
  const [ ref, bounds ] = useMeasure()
  const [ focused, updateFocused ] = useState<boolean>(false)
  const [ height, updateHeight ] = useState<number>(0)
  const [ value, updateValue ] = useState<string>('')

  const chatIcon = `url("${chatBubble}")`
  const sendIcon = `url("${send}")`

  const onFocus = () => updateFocused(true)
  const onBlur = () => updateFocused(false)
  
  const className = `introSuggestionsChat ${focused ? 'focused' : ''}`

  useEffect(() => {
    updateHeight(focused ? bounds.height + 10 : bounds.height)
  }, [bounds.height, focused])

  const motionProps: MotionProps = {
    animate: { height },
    transition: { delay: 0 }
  }

  

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    updateValue(e.target.value)
  }

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submitable && props.onSubmit(value)
    }

    if (e.key === 'Escape') {
      updateValue("")
      e.currentTarget.blur()
    }
  }

  const submitable: boolean = !!value.trim().length

  // Send icon
  const sendMotionProps: MotionProps = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: submitable ? 1 : 0.33, x: -0 },
    exit: { opacity: 0, x: -10 },
    transition: { delay: 0.33, duration: 0.33 }
  }
  const chatBubbleClassName = `icon chatBubble ${focused ? 'active' : ''}`
  const chatBubbleStyle: CSSProperties = { backgroundImage: chatIcon }

  // Chat icon
  const chatBubbleMotionProps: MotionProps = {
    initial: { opacity: 0, scale: 0.33 },
    animate: { opacity: 0.33, scale: 1 },
    transition: { delay: 0.2 }
  }
  const sendClassName = "icon send"
  const sendStyle: CSSProperties = { backgroundImage: sendIcon }

  return (
    <motion.div className={className} {...motionProps}>
      <div className="wrapper" ref={ref}>
        <div className="content">
          <motion.div {...chatBubbleMotionProps} className={chatBubbleClassName} style={chatBubbleStyle} />
          <TextareaAutosize 
            placeholder="Ask a question about this"
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
          />
          <motion.div {...sendMotionProps} className={sendClassName} style={sendStyle} />
        </div>
        <IntroSuggestionsChatMeta display={focused} />
      </div>
    </motion.div>
  )
}
