import React, { useReducer, createContext, useContext} from "react";
import GlobalReducer, { 
  SIGN_IN, 
  SIGN_OUT, 
  SELECT_COMPASS, 
  SELECT_INTERACTION, 
  SELECT_SESSION ,
  REMOVE_COMPASS, 
  REMOVE_INTERACTION, 
  REMOVE_SESSION,
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
        selectCompass: (compass) => dispatch({type: SELECT_COMPASS, payload: compass}),
        selectSession: (session) => dispatch({type: SELECT_SESSION, payload: session}),
        selectInteraction: (interaction) => dispatch({type: SELECT_INTERACTION, payload: interaction}),
        removeCompass: () => dispatch({type: REMOVE_COMPASS, payload: {}}),
        removeSession: () => dispatch({type: REMOVE_SESSION, payload: {}}),
        removeInteraction: () => dispatch({type: REMOVE_INTERACTION, payload: {}}),
        ...globalState
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const globalStore = () => (useContext(GlobalContext));
