import { Routes, Route } from 'react-router'
import { AppWrapper } from '../AppWrapper'
import { ChatIntro } from 'src/components/Elements/ChatIntro/ChatIntro'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppWrapper addChatEntry={null!} />} />
      <Route path="/intro" element={<ChatIntro />} />
    </Routes>
  )
}
