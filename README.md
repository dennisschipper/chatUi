# CityScout Frontend

CityScout is a chat-based city recommendation system built with React, TypeScript, and Vite. It provides personalized travel recommendations through an interactive chat interface.

## Getting Started

Follow these steps to get the local frontend server up and running:

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cityScout-front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Other Available Scripts

- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
- `npm start` - Start production server (requires build first)

### Features

- Interactive landing page with city selection
- Chat-based recommendation interface
- Location details with photos and reviews
- Responsive design with smooth animations
- Development/production mode detection

### Backend Integration

The chat interface requires a local backend server to provide real responses to user queries. In development mode, the frontend will attempt to connect to the backend API.

**Backend Repository:**
- [CityScout Backend](https://github.com/weaviate/city-scout/tree/danny) (use the `danny` branch)
- Follow the setup instructions in the backend repository to get the API server running locally

**For testing without a backend:**
- Click the "Text cycle test" button in the chat interface to generate fake chat entries for testing purposes
- This allows you to explore the chat functionality and UI without needing the backend running

### Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **SCSS** - Styling
- **Motion** - Animations
- **ESLint** - Code linting

