import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Qttech from './pages/qttech'
import Qtacademy from './pages/qtacademy'
import Qtalliance from './pages/qtalliance'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="qttech" element={<Qttech />} />
          <Route path="qtacademy" element={<Qtacademy />} />
          <Route path="qtalliance" element={<Qtalliance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
