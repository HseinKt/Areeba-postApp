import React, { useState } from "react";
import type { AuthUser } from "../types/auth.types";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContextStore";

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const navigate = useNavigate();

    const [user, setUser] = useState<AuthUser | null>(
        () => JSON.parse(localStorage.getItem('user') || 'null')
    )

    const [token, setToken] = useState<string>(
        () => localStorage.getItem('token') || ''
    )

    const login = (user: AuthUser) => {        
        setUser(user)
        setToken(user?.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user?.accessToken);
        navigate('/');
    }

    const logout = () => {

        console.log("hiii");
        
        setUser(null)
        setToken('');
        localStorage.clear();
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}