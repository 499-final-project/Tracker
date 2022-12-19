import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
const PrivateRoutes = () => {
    const {currentUser} = useContext(AuthContext);
    return(
      currentUser ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes