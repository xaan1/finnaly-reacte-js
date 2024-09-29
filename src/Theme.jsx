import { createContext,useReducer } from "react";


export const Theme = createContext()




export const ThemeProvider = ({children}) => {



    const initialState = "dark"





    function reducer(state, action) {


        switch(action.type){


            case "toggle":
                return state === "light" ? "dark" : "light"
            default:
                throw new Error()
        }




    }




      const [state , dispatch] = useReducer(reducer, initialState)


    return (
        <Theme.Provider value={{state , dispatch}}>
            {children}
        </Theme.Provider>
    )





}



export default ThemeProvider