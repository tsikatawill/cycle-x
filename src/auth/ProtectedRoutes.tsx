import { Navigate, Outlet } from 'react-router-dom'
import useAuth from './useAuth'

const ProtectedRoutes = () => {
  const isLoggedIn = useAuth()

  return isLoggedIn ? <Outlet /> : <Navigate to="/Login" />
}

export default ProtectedRoutes
