import { useState, useCallback, useEffect, useRef } from 'react'
import { ErrorState } from './components/ErrorState'
import { EmptyState } from './components/EmptyState'

type ViewState = 'counter' | 'history' | 'settings' | 'error'

// Expose sayacApp globally for testing/automation
interface SayacAppAPI {
  view: ViewState
  count: number
  target: number
  todayIncrease: number
  lastAction: string | null
  increment: () => void
  decrement: () => void
  reset: () => void
  navigate: (view: ViewState) => void
}

declare global {
  interface Window {
    sayacApp?: SayacAppAPI
  }
}

function App() {
  const [view, setView] = useState<ViewState>('counter')
  const [count, setCount] = useState(0)
  const [target] = useState(100)
  const [todayIncrease, setTodayIncrease] = useState(0)
  const [lastAction, setLastAction] = useState<string | null>(null)

  // Refs for stable references in window.sayacApp
  const incrementRef = useRef<() => void>()
  const decrementRef = useRef<() => void>()
  const resetRef = useRef<() => void>()
  const navigateRef = useRef<(v: ViewState) => void>()

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

  // Update refs
  incrementRef.current = handleIncrement
  decrementRef.current = handleDecrement
  resetRef.current = handleReset
  navigateRef.current = handleNavigate

  // Expose app state and controls globally for E2E testing
  useEffect(() => {
    window.sayacApp = {
      get view() { return view },
      get count() { return count },
      get target() { return target },
      get todayIncrease() { return todayIncrease },
      get lastAction() { return lastAction },
      increment: () => incrementRef.current?.(),
      decrement: () => decrementRef.current?.(),
      reset: () => resetRef.current?.(),
      navigate: (v: ViewState) => navigateRef.current?.(v),
    }
  }, [view, count, target, todayIncrease, lastAction])

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
          <h1 className="font-headline text-3xl font-extrabold tracking-tight mb-2">Sayaç Uygulaması</h1>
          <p className="font-body text-[var(--color-on-surface-variant)] text-sm opacity-60">Hassas Sayım ve Takip Paneli</p>
        </div>
        <div className="w-full max-w-md bg-[var(--color-surface-container-highest)] rounded-[2rem] p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[var(--color-primary)]/5 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[var(--color-secondary-container)]/5 rounded-full blur-[80px]"></div>
          <div className="relative z-10 py-12 flex flex-col items-center">
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-[var(--color-on-surface-variant)] mb-4">Mevcut Değer</span>
            <span className="display-lg font-bold text-[var(--color-primary)] tracking-tighter">{count}</span>
          </div>
          <div className="w-full grid grid-cols-3 gap-4 mt-8 relative z-10">
            <button
              onClick={handleDecrement}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-[var(--color-secondary-container)]/20 text-[var(--color-error)] hover:bg-[var(--color-secondary-container)]/30 transition-all active:scale-95 duration-150 group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-container)] flex items-center justify-center mb-1 shadow-lg">
                <span className="material-symbols-outlined text-white">remove</span>
              </div>
              <span className="font-label text-sm font-semibold">Azalt</span>
            </button>
            <button
              onClick={handleReset}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-[var(--color-surface-container-low)] text-[var(--color-tertiary)] hover:bg-[var(--color-surface-variant)] transition-all active:scale-95 duration-150 group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-tertiary-container)]/20 flex items-center justify-center mb-1">
                <span className="material-symbols-outlined">refresh</span>
              </div>
              <span className="font-label text-sm font-semibold">Sıfırla</span>
            </button>
            <button
              onClick={handleIncrement}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-[var(--color-primary-container)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary-container)]/30 transition-all active:scale-95 duration-150 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] flex items-center justify-center mb-1 shadow-[0_4px_15px_rgba(75,226,119,0.3)]">
                <span className="material-symbols-outlined text-[var(--color-on-primary)]">add</span>
              </div>
              <span className="font-label text-sm font-semibold">Artır</span>
            </button>
          </div>
          <div className="mt-12 flex justify-between w-full text-[10px] text-[var(--color-on-surface-variant)] opacity-40 font-body uppercase tracking-widest border-t border-[var(--color-outline-variant)]/10 pt-4">
            <span>ID: sayac-app-10026</span>
            <span>Son Güncelleme: Az önce</span>
          </div>
        </div>
        <div className="w-full max-w-md grid grid-cols-2 gap-4 mt-6">
          <div className="bg-[var(--color-surface-container-low)] p-4 rounded-2xl flex flex-col gap-2">
            <span className="material-symbols-outlined text-[var(--color-primary)] text-xl">trending_up</span>
            <span className="font-label text-xs opacity-60">Hedef Değer</span>
            <span className="font-headline text-lg">{target}</span>
          </div>
          <div className="bg-[var(--color-surface-container-low)] p-4 rounded-2xl flex flex-col gap-2">
            <span className="material-symbols-outlined text-[var(--color-tertiary)] text-xl">history</span>
            <span className="font-label text-xs opacity-60">Bugünkü Artış</span>
            <span className="font-headline text-lg">+{todayIncrease}</span>
          </div>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center py-3 px-4 bg-[#131318] z-50 rounded-t-xl border-t border-[#3d4a3d]/15 shadow-[0_-4px_20px_rgba(75,226,119,0.06)]">
        <button
          onClick={() => handleNavigate('counter')}
          className="flex flex-col items-center justify-center text-[#4be277] font-bold transition-all active:scale-90 duration-150"
        >
          <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
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
          className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 hover:text-[#4be277] transition-all active:scale-90 duration-150"
        >
          <span className="material-symbols-outlined mb-1">settings</span>
          <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Ayarlar</span>
        </button>
      </nav>
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[60%] h-[40%] bg-[var(--color-primary)]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[40%] bg-[var(--color-secondary-container)]/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  )
}

export default App
