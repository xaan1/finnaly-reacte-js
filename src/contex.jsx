import { createContext } from "react"





 export const Auth = createContext()

 
const AuthContex =  ({children}) => {



    const isLoggin =  true

    return (
        <Auth.Provider value={isLoggin}>
            {children}
        </Auth.Provider>
    )



}


export default AuthContex