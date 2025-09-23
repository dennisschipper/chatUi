import submit from '../../../assets/icons/submit.svg'
import TextareaAutosize from 'react-textarea-autosize'
import chatBubble from '../../../assets/icons/chatBubble.svg'
import { Placeholder } from '../../Generic/Placeholder/Placeholder'
import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useRef, useState } from 'react'
import { inputText } from '../../../text/messagesTest'

export interface IMessageInputProps {
  display?: boolean
  placeholder?: string
  onSubmit: (text: string) => void
}

export const MessageInput = (props: IMessageInputProps) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [ value, updateValue ] = useState<string>("")
  const [ focused, updateFocused ] = useState<boolean>(false)
  const [ disabled, updateDisabled ] = useState<boolean>(value.trim().length === 0)
  const placeholder = props.placeholder ?? inputText.messageInputPlaceholder

  const handleSubmit = () => {
    !disabled && props.onSubmit(value), updateValue("")
  }
  
  const onClickPlaceholder = () => ref.current?.focus()
  
  const onFocus: FocusEventHandler<HTMLTextAreaElement> = (e) => {
    updateFocused(e.type === "focus")
  }
  
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    updateValue(e.target.value)
    updateDisabled(value.trim().length === 0)
  }

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSubmit())
  }

  const placeholderActive = !focused && !value.trim().length

  return !props.display ? null : (
    <>
      <div className="messageInput">
        <hr />
        <div className="inputWrapper">
          <div className="icon">
            <img src={chatBubble} alt="" />
          </div>
          <div className="textareaWrapper">
            <Placeholder 
              active={placeholderActive} 
              onClick={onClickPlaceholder} 
              text={placeholder} 
            />
            <TextareaAutosize 
              ref={ref} 
              value={value}
              placeholder={placeholder} 
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onFocus}
              onKeyDown={onKeyDown}
            />
          </div>
          <button className="blank" disabled={disabled}>
            <img src={submit} />
          </button>
        </div>
      </div>
    </>
  )
}
