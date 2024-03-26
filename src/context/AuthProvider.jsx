// AuthContext

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { createContext } = require("react");

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null);
    const navigate = useNavigate()

    const login = (info) => {
        setUser(info)
        navigate("/dashboard")
    };

    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user))
    }, [user] );  //! componentDidUpdate

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;