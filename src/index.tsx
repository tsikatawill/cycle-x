import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import {Login} from './pages/login/Login'
import ProtectedRoutes from './auth/ProtectedRoutes'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
