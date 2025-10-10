import { AnimatePresence, motion, MotionProps } from "motion/react"
import { IMessage, IMessageSuggestion } from "../../../types"
import { MessageSuggestion } from "./MessageSuggestion/MessageSuggestion"
import { IMessageSuggestionsTitleProps, MessageSuggestionsTitle } from "./MessageSuggestionsTitle/MessageSuggestionsTitle"
import { defaultMotionProps } from "../../../helpers"

interface IMessageSuggestionsProps {
  message: IMessage
  title?: IMessageSuggestionsTitleProps
  onClickSuggestion: (suggestion: IMessageSuggestion, message: IMessage) => void
}

export const MessageSuggestions = (props: IMessageSuggestionsProps) => {

  const onClick = (suggestion: IMessageSuggestion) => {
    props.onClickSuggestion(suggestion, props.message)
  }

  const items = props.message.suggestions?.map(
    s => (
      <li key={s.text}>
        <MessageSuggestion suggestion={s} onClick={onClick} />
      </li>
    )
  )

  const display = !!props.message.suggestions?.length

  const motionProps: MotionProps = {
    ...defaultMotionProps,
    exit: { x: -50, opacity: 0 },
    transition: { duration: 2 }
  }

  return (
    <AnimatePresence>
      { display && 
        <motion.div {...motionProps} className="messageSuggestions" key={"hey"}>
          <MessageSuggestionsTitle {...props.title} />
          <ul>
            {items}
          </ul>
        </motion.div>
      }
    </AnimatePresence>
  )
}
