import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Company from './pages/company'
import TrainingBase from './pages/training-base'
import Alliance from './pages/alliance'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="training-base" element={<TrainingBase />} />
          <Route path="alliance" element={<Alliance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
