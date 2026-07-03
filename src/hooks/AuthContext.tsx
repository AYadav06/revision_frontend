import { createContext, useContext, useState } from "react";


const AuthContext=createContext();

export default function AuthProvider({children}){

 const [user,setUser]=useState(null);


 const login=(username )=>{
    setUser({name:"username",role:"admin"})
 };
 const logout=()=>{setUser(null)};

 return (

    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
 )
}

export const useAuth=()=>useContext(AuthContext);