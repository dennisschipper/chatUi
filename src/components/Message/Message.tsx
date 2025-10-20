import { MessageSource } from "../Messages/MessageSource/MessageSource"
import { MessageInput } from "./MessageInput/MessageInput"
import { IMessage, IMessageSuggestion } from "../../types"
import { MessageContent } from "./MessageContent/MessageContent"
import { IMessageSuggestionsProps, MessageSuggestions } from "./MessageSuggestions/MessageSuggestions"
import { IMessageSuggestionsTitleProps } from "./MessageSuggestions/MessageSuggestionsTitle/MessageSuggestionsTitle"
import { AnimatePresence, motion, MotionProps } from "motion/react"
import useMeasure from "react-use-measure"
import { cloneElement, ReactElement } from "react"

export type TMessageProps = Partial<IMessageProps>

export interface IMessageProps {
  message: IMessage
  onClickSuggestion?: (suggestion: IMessageSuggestion, message: IMessage) => void
  onSubmitMeta?: (text: string) => void
  component?: ReactElement<TMessageProps>
  messageSuggestionsProps?: Partial<IMessageSuggestionsProps>
  messageSuggestionsTitleProps?: Partial<IMessageSuggestionsTitleProps>
}

export const Message = (props: IMessageProps) => {
  const { message, onClickSuggestion } = props
  const displayMeta = props.message.meta?.displayMeta
  const onSubmitMeta = (text: string) => 
    props.onSubmitMeta ? props.onSubmitMeta(text) : null

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

  if (props.component) {
    return cloneElement(props.component, {
      message: props.message,
      onClickSuggestion: props.onClickSuggestion,
      onSubmitMeta: props.onSubmitMeta
    })
  }
  
  return (
    <AnimatePresence>
      <motion.div className="chatui-messageWrapper" {...wrapperMotionProps}>
        <motion.div {...motionProps} className="message" ref={ref}>
          <MessageSource {...message.source} />
          <div className="chatui-messageBody">
            <MessageContent message={message}  />
            <MessageInput display={displayMeta} onSubmit={onSubmitMeta} />
          </div>
          <MessageSuggestions 
            onClickSuggestion={onClickSuggestion}
            message={message} 
            messageSuggestionsTitleProps={props.messageSuggestionsTitleProps}
            {...props.messageSuggestionsProps}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
