import React from "react";
import { Navigate, Route, redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth()

  return currentUser ? children : <Navigate to='/login'/>
};

export default PrivateRoute;
