import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const[isLogin, setIsLogin] = useState(false)

    const handleLoginActivity = (value) => {
        setIsLogin(value)
    }
    return <LoginContext.Provider value={{isLogin, handleLoginActivity}}>
        {children}
    </LoginContext.Provider>
}