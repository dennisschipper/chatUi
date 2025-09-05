import { useContext, useState } from "react"
import { AppContext } from "src/components/CityScout/AppContext/AppContext"
import { demoEntries } from "src/data/testData"

export const TestButton = () => {
  const { dispatch } = useContext(AppContext)
  const [ demoIndex, setDemoIndex ] = useState(0)

  const handleTextCycleTest = () => {
    if (demoIndex >= demoEntries.length) {
      // Reset state and start over
      dispatch({ type: 'resetChatAction' })
      setDemoIndex(0)
    } else {
      // Add next demo entry
      dispatch({ 
        type: 'addChatEntryAction', 
        payload: { chatEntry: demoEntries[demoIndex] } 
      })
      setDemoIndex(demoIndex + 1)
    }
  }

  return (
    <button 
      type="button" 
      onClick={handleTextCycleTest}
      className="testButton"
    >
      Test message
    </button>
  )
}