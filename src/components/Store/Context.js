import { createContext, useContext, useEffect, useState } from "react";


const StoreContext  = createContext({});

const StoreProvider = ({ children }) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
        if(isAuthenticated){
            setToken(JSON.parse(isAuthenticated));
        }
    },[])

    return (
        <StoreContext.Provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

function UserContext(){
    const context = useContext(StoreContext);
    return context;
}


export {StoreProvider,UserContext};