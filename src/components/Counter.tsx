import { useCounter } from '../hooks/useCounter'

export function Counter(): JSX.Element {
  const { value, increment, decrement, reset } = useCounter()
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-8xl font-bold text-[var(--color-on-surface)]">
        {value}
      </div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-6 py-3 bg-[var(--color-error)] text-white rounded-lg hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2"
        >
          Azalt
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[var(--color-outline)] text-white rounded-lg hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2"
        >
          Sıfırla
        </button>
        <button
          onClick={increment}
          className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] rounded-lg hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2"
        >
          Artır
        </button>
      </div>
    </div>
  )
}
