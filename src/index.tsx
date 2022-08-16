import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import Homepage from './pages/homepage/Homepage'
import Layout from './components/Layout'
import {Login} from './pages/login/Login'
import ProtectedRoutes from './auth/ProtectedRoutes'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './pages/signup/Signup'
import {store} from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
