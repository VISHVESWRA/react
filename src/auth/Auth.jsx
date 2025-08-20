import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsloggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);