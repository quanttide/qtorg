import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Qttech from './pages/qttech'
import Qtacademy from './pages/qtacademy'
import Qtalliance from './pages/qtalliance'
import People from './pages/People'
import PersonDetail from './pages/PersonDetail'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="orgs" element={<Home />} />
          <Route path="orgs/qttech" element={<Qttech />} />
          <Route path="orgs/qtacademy" element={<Qtacademy />} />
          <Route path="orgs/qtalliance" element={<Qtalliance />} />
          <Route path="people" element={<People />} />
          <Route path="people/:personId" element={<PersonDetail />} />
          {/* 旧路由重定向 */}
          <Route path="qttech" element={<Navigate to="/orgs/qttech" replace />} />
          <Route path="qtacademy" element={<Navigate to="/orgs/qtacademy" replace />} />
          <Route path="qtalliance" element={<Navigate to="/orgs/qtalliance" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
