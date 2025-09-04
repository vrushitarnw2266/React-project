import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    // You can initialize auth state here, e.g., from localStorage or an API call
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>  
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;