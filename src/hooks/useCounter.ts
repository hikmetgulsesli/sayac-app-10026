import { useState } from 'react'

export function useCounter(): {
  value: number
  increment: () => void
  decrement: () => void
  reset: () => void
} {
  const [value, setValue] = useState(0)
  return {
    value,
    increment: () => setValue(v => v + 1),
    decrement: () => setValue(v => v - 1),
    reset: () => setValue(0),
  }
}
