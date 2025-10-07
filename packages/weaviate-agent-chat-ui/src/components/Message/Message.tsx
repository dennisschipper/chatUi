import { MessageSource } from "../Messages/MessageSource/MessageSource"
import { MessageInput } from "./MessageInput/MessageInput"
import { IMessage, IMessageSuggestion } from "../../types"
import { MessageContent } from "./MessageContent/MessageContent"
import { MessageSuggestions } from "./MessageSuggestions/MessageSuggestions"
import { IMessageSuggestionsTitleProps } from "./MessageSuggestions/MessageSuggestionsTitle/MessageSuggestionsTitle"
import { AnimatePresence, motion, MotionProps } from "motion/react"
import useMeasure from "react-use-measure"

export interface IMessageProps {
  message: IMessage
  title?: IMessageSuggestionsTitleProps
  onClickSuggestion?: (suggestion: IMessageSuggestion, message: IMessage) => void
}

export const Message = (props: IMessageProps) => {
  const { message } = props
  const displayMeta = props.message.meta?.displayMeta
  const onSubmitMeta = (text: string) => console.log(text)

  const onClickSuggestion = (suggestion: IMessageSuggestion, message: IMessage) => {
    console.log(message, suggestion)
  }

  const [ ref, bounds ] = useMeasure()

  const wrapperMotionProps: MotionProps = {
    initial: { height: bounds.height },
    animate: { height: bounds.height }
  }

  const motionProps: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.33 }
  } 
  
  return (
    <AnimatePresence>
      <motion.div className="messageWrapper" {...wrapperMotionProps}>
        <motion.div {...motionProps} className="message" ref={ref}>
          <MessageSource {...message.source} />
          <div className="messageBody">
            <MessageContent message={message}  />
            <MessageInput display={displayMeta} onSubmit={onSubmitMeta} />
          </div>
          <MessageSuggestions 
            onClickSuggestion={onClickSuggestion}
            message={message} 
            title={props.title}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
