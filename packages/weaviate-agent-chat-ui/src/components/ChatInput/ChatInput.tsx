import { useRef, useState, type BaseSyntheticEvent, type KeyboardEventHandler, type ReactElement } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { ChatSubmit } from '../Generic/ChatSubmit'
import { Placeholder } from '../Generic/Placeholder/Placeholder'

interface IChatInputProps {
  onSubmit: (value: string) => void
  onChange?: (value: string) => void
  placeholder?: string
  controls?: ReactElement[]
}

export const ChatInput = (props: IChatInputProps) => {
  const [value, setValue] = useState('')

  const handleChange = (newValue: string) => {
    setValue(newValue)
    props.onChange?.(newValue)
  }

  const handleSubmit = () => {
    if (value.trim()) {
      props.onSubmit(value.trim())
      setValue('')
    }
  }

  const onChange = (e: BaseSyntheticEvent) => handleChange(e.target.value)
  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSubmit())
  }
  const placeholder = props.placeholder || "Add a new item..."

  const inputRef = useRef<HTMLTextAreaElement>(null)

  const [ focused, updateFocused ] = useState<boolean>(false)
  
  const onPlaceholderClick = () => inputRef.current && inputRef.current.focus()

  const onFocus = () => updateFocused(true)
  const onBlur = () => updateFocused(false)

  const submitDisabled = !value.trim()

  return (
    <div className="chatInput">
      <div className="textInputContainer">
        <Placeholder 
          onClick={onPlaceholderClick} 
          text={props.placeholder ?? "Type a message..."} 
          active={!focused && !value.length}
        />
        <TextareaAutosize
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <hr />
        <ChatSubmit onClick={handleSubmit} disabled={submitDisabled} />
      </div>
      <hr />
      <div className="inputControls">
        Powered by Weaviate
      </div>
    </div>
  )
}
