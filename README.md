# Weaviate Agent Chat UI

React component library for building conversational AI interfaces.

## Installation

```bash
npm install weaviate-agent-chat-ui
```

## Usage

```typescript
import { ChatInput, Messages, Cards, Recent } from 'weaviate-agent-chat-ui'
import 'weaviate-agent-chat-ui/dist/index.css'

function App() {
  const [messages, setMessages] = useState([])

  return (
    <>
      <Messages messages={messages} />
      <ChatInput onSubmit={(text) => console.log(text)} />
    </>
  )
}
```

## Components

### Messages
Display a list of chat messages with suggestions and sources.

### ChatInput
Input component for submitting chat messages with controls.

### Cards
Display a grid of interactive cards.

### Recent
Show recent conversation items.

## Development

### Building the Package

```bash
npm install
npm run build
```

### Development with Demo

For live reload during development:

1. Start the demo project in development mode (at `../chatUi-demo`)
2. The demo links directly to this package's source code
3. Changes to the package will hot-reload in the demo

### Project Structure

```
src/
├── components/        # React components
│   ├── ChatInput/    # Input component
│   ├── Messages/     # Message display
│   ├── Cards/        # Card components
│   └── Recent/       # Recent items
├── assets/           # SVG icons and assets
└── index.ts          # Package exports
```

## TypeScript

Full TypeScript support with exported types:

```typescript
import type { IMessage, IRecentItem, IMessageSuggestion } from 'weaviate-agent-chat-ui'
```

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **SCSS** - Styling
- **Motion** - Animations

## License

MIT
