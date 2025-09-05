import { Popover } from "src/components/Generic/Popovers"
import { ChatOptionsTarget } from "./ChatOptionsTarget/ChatOptionsTarget"

export const ChatOptions = () => {
  const target = <ChatOptionsTarget ref={null!} popoverProps={null!} />
  const content = (
    <div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
      <div>I am content</div>
    </div>
  )
  const header = <div>I am header.</div>
  const footer = <div>I am footer.</div>
  return (
    <>
      <Popover 
        target={target} 
        content={content}
        header={header}
        footer={footer}
      />
    </>
  )
}
