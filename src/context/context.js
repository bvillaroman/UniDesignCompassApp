import React, { useReducer, createContext} from "react";
import GlobalReducer, { 
  SIGN_IN, 
  SIGN_OUT,
  defaultState
} from "./reducers"

// CONTEXT
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [globalState,dispatch] = useReducer(GlobalReducer,defaultState)
  return (
    <GlobalContext.Provider 
      value={{
        loginUser: (user) => dispatch({type: SIGN_IN, payload: user}),
        logoutUser: () => dispatch({type: SIGN_OUT, payload: {}}),
        ...globalState
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
