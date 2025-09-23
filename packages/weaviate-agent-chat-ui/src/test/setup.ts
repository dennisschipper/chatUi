import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.mock('motion/react', () => ({
  motion: {
    div: 'div',
  },
}))