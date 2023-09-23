import { Children, createContext,useContext,useMemo,useState } from "react";
const UserContext = createContext();
export const useUser=()=>{
    return useContext(UserContext);
}
export const UserProvider = ({Children})=>{
    const [isUserLoggedIn, setIsUserLoggedIn]=useState(false);
    const login=()=>{
        setIsUserLoggedIn(true);
    }
    const logout=()=>{
        setIsUserLoggedIn(false);
    }
    const userValue=useMemo(()=>(
        {
            isUserLoggedIn,login,logout
        }
    ), [isUserLoggedIn]);

    return(
        <UserContext.Provider value={userValue}>
            {Children}
        </UserContext.Provider>
    )
}