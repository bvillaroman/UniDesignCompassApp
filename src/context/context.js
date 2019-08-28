import React, { useReducer, createContext, useContext} from "react";
import GlobalReducer, { SIGN_IN, SIGN_OUT} from "./reducers"

// CONTEXT
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [globalState,dispatch] = useReducer(GlobalReducer, {
    user: {},
  })
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

export const globalStore = () => {
  const contextValue = useContext(GlobalContext);
  return contextValue;
};

