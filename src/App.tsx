import { useState, useCallback } from 'react'
import { ErrorState } from './components/ErrorState'
import { EmptyState } from './components/EmptyState'
import { AnaSayfa } from './screens/AnaSayfa'

type ViewState = 'counter' | 'history' | 'settings' | 'error'

function App() {
  const [view, setView] = useState<ViewState>('counter')
  const [count, setCount] = useState(0)
  const [target] = useState(100)
  const [todayIncrease, setTodayIncrease] = useState(0)
  const [lastAction, setLastAction] = useState<string | null>(null)

  const handleIncrement = useCallback(() => {
    setCount(prev => {
      const newCount = prev + 1
      setTodayIncrease(inc => inc + 1)
      setLastAction('Artır')
      return newCount
    })
  }, [])

  const handleDecrement = useCallback(() => {
    setCount(prev => {
      if (prev > 0) {
        const newCount = prev - 1
        setTodayIncrease(inc => Math.max(0, inc - 1))
        setLastAction('Azalt')
        return newCount
      }
      return prev
    })
  }, [])

  const handleReset = useCallback(() => {
    setCount(0)
    setTodayIncrease(0)
    setLastAction('Sıfırla')
  }, [])

  const handleNavigate = useCallback((destination: ViewState) => {
    setView(destination)
  }, [])

  const handleRetry = useCallback(() => {
    setView('counter')
  }, [])

  const handleGoHome = useCallback(() => {
    setView('counter')
  }, [])

  if (view === 'error') {
    return (
      <ErrorState
        onRetry={handleRetry}
        onGoHome={handleGoHome}
        onNavigate={handleNavigate}
      />
    )
  }

  if (view === 'history') {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
        <header className="w-full top-0 sticky bg-[#131318] flex justify-between items-center px-6 py-4 w-full z-50">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#e4e1e9] font-['Space_Grotesk'] tracking-tight">Sayaç Pro</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              aria-label="Ayarlar"
              onClick={() => handleNavigate('settings')}
              className="text-[#e4e1e9] hover:bg-[#1b1b20] transition-colors p-2 rounded-full active:scale-95 duration-200"
            >
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center px-6 pb-24">
          <div className="text-center mb-12">
            <h1 className="font-headline text-3xl font-extrabold tracking-tight mb-2">Geçmiş</h1>
            <p className="font-body text-[var(--color-on-surface-variant)] text-sm opacity-60">Yakında kullanıma sunulacak</p>
          </div>
        </main>
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center py-3 px-4 bg-[#131318] z-50 rounded-t-xl border-t border-[#3d4a3d]/15 shadow-[0_-4px_20px_rgba(75,226,119,0.06)]">
          <button
            onClick={() => handleNavigate('counter')}
            className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 hover:text-[#4be277] transition-all active:scale-90 duration-150"
          >
            <span className="material-symbols-outlined mb-1">home</span>
            <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Ana Sayfa</span>
          </button>
          <button
            onClick={() => handleNavigate('history')}
            className="flex flex-col items-center justify-center text-[#4be277] font-bold transition-all active:scale-90 duration-150"
          >
            <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
            <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Geçmiş</span>
          </button>
          <button
            onClick={() => handleNavigate('settings')}
            className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 hover:text-[#4be277] transition-all active:scale-90 duration-150"
          >
            <span className="material-symbols-outlined mb-1">settings</span>
            <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Ayarlar</span>
          </button>
        </nav>
      </div>
    )
  }

  if (view === 'settings') {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
        <header className="w-full top-0 sticky bg-[#131318] flex justify-between items-center px-6 py-4 w-full z-50">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#e4e1e9] font-['Space_Grotesk'] tracking-tight">Sayaç Pro</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              aria-label="Ayarlar"
              onClick={() => handleNavigate('settings')}
              className="text-[#e4e1e9] hover:bg-[#1b1b20] transition-colors p-2 rounded-full active:scale-95 duration-200"
            >
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center px-6 pb-24">
          <div className="text-center mb-12">
            <h1 className="font-headline text-3xl font-extrabold tracking-tight mb-2">Ayarlar</h1>
            <p className="font-body text-[var(--color-on-surface-variant)] text-sm opacity-60">Yakında kullanıma sunulacak</p>
          </div>
        </main>
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center py-3 px-4 bg-[#131318] z-50 rounded-t-xl border-t border-[#3d4a3d]/15 shadow-[0_-4px_20px_rgba(75,226,119,0.06)]">
          <button
            onClick={() => handleNavigate('counter')}
            className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 hover:text-[#4be277] transition-all active:scale-90 duration-150"
          >
            <span className="material-symbols-outlined mb-1">home</span>
            <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Ana Sayfa</span>
          </button>
          <button
            onClick={() => handleNavigate('history')}
            className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 hover:text-[#4be277] transition-all active:scale-90 duration-150"
          >
            <span className="material-symbols-outlined mb-1">history</span>
            <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Geçmiş</span>
          </button>
          <button
            onClick={() => handleNavigate('settings')}
            className="flex flex-col items-center justify-center text-[#4be277] font-bold transition-all active:scale-90 duration-150"
          >
            <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
            <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Ayarlar</span>
          </button>
        </nav>
      </div>
    )
  }

  if (count === 0 && !lastAction) {
    return (
      <EmptyState
        count={count}
        target={target}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        onNavigate={handleNavigate}
      />
    )
  }

  return (
    <AnaSayfa
      count={count}
      target={target}
      todayIncrease={todayIncrease}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
      onNavigate={handleNavigate}
    />
  )
}

export default App
