import React from 'react'
import {Navigate, useLocation} from "react-router-dom"
import { globalState } from '../context/Context'
import Loader from '../loader/Loader'

const ProtectedRoute = ({ children }) => {
    
    const { user,token,userLoading } = globalState()
    let location = useLocation();
    if (!token) {
        return <Navigate to="/account" state={{ from: location}} replace />
    }
        return children
   
}
export default ProtectedRoute