import type { IChatEntry } from "src/types"

interface ITestControlsProps {
  onAddEntry: (entry: IChatEntry) => void
}

export const TestControls = (props: ITestControlsProps) => {
  const randomTexts = [
    "This is a random test message",
    "Another random chat entry",
    "Testing chat functionality",
    "Random message for testing",
    "Lorem ipsum dolor sit amet"
  ]

  const handleAddRandomEntry = () => {
    const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)]
    const entry: IChatEntry = {
      id: `random-${Date.now()}`,
      type: 'text',
      text: randomText,
      from: 'CityScout'
    }
    props.onAddEntry(entry)
  }

  return (
    <div className="testControls">
      <button onClick={handleAddRandomEntry}>Add Random Entry</button>
    </div>
  )
}
