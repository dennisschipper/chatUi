import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.mock("react-use-measure", () => ({
  default: vi.fn(() => [vi.fn(), { width: 100, height: 100 }]),
}))

vi.mock('motion/react', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual as any,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: new Proxy({}, { get: () => (props: any) => <div {...props} /> }),
  }
})
