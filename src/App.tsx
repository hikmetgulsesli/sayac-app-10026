import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnaSayfa } from './screens/AnaSayfa'
import { BosDurumBaslangic } from './screens/BosDurumBaslangic'
import { HataDurumu } from './screens/HataDurumu'
import { Sayacapp10026Prd } from './screens/Sayacapp10026Prd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnaSayfa count={count} onIncrement={() => setCount(c => c + 1)} onDecrement={() => setCount(c => c - 1)} onReset={() => setCount(0)} />} />
        <Route path="/bos" element={<BosDurumBaslangic />} />
        <Route path="/hata" element={<HataDurumu />} />
        <Route path="/prd" element={<Sayacapp10026Prd />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App