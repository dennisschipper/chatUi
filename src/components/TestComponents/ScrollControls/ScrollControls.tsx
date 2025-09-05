import { useState } from "react"
import type { IChatEntry } from "src/types"

interface IScrollControlsProps {
  items: IChatEntry[]
}

export const ScrollControls = (props: IScrollControlsProps) => {
  const [targetId, updateTargetId] = useState("")

  const handleRandom = () => {
    const visibleItems = props.items.filter(item => item.id)
    if (visibleItems.length > 0) {
      const randomItem = visibleItems[Math.floor(Math.random() * visibleItems.length)]
      updateTargetId(randomItem.id || "")
    }
  }

  const handleJump = () => {
    if (targetId) {
      const element = document.querySelector(`[data-entry-id="${targetId}"]`)
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="scrollControls">
      <input 
        type="text" 
        value={targetId} 
        onChange={(e) => updateTargetId(e.target.value)}
        placeholder="Enter entry ID"
      />
      <button onClick={handleRandom}>Random</button>
      <button onClick={handleJump}>Jump</button>
    </div>
  )
}