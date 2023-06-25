import React, { createContext, useContext, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPasword(email, password)
    }


    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}