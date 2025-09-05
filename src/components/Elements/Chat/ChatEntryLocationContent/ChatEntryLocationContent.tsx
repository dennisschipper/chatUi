import type { ILocation } from "src/types"
import { LocationItem } from "src/components/Elements/Items/LocationItem/LocationItem"

interface ChatEntryLocationContentProps {
  items: ILocation[]
  activeLocationId: string | null
  onLocationClick: (locationId: string) => void
}

export const ChatEntryLocationContent = (props: ChatEntryLocationContentProps) => {
  const { items, activeLocationId, onLocationClick } = props

  const itemsList = items.map((item) => (
    <li key={item.id}>
      <LocationItem 
        location={item} 
        isActive={activeLocationId === item.id}
        onClick={() => onLocationClick(item.id)}
      />
    </li>
  ))

  return (
    <div className="chatEntryLocationContent">
      <ul className="locationItems">
        {itemsList}
      </ul>
    </div>
  )
}
