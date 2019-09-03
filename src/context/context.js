import React, { useReducer, createContext, useContext} from "react";
import GlobalReducer, { SIGN_IN, SIGN_OUT, SELECT_COMPASS, ADD_COMPASS} from "./reducers"

// CONTEXT
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [globalState,dispatch] = useReducer(GlobalReducer, {
    user: {
      compasses: [],
    },
    compass: {}
  })
  return (
    <GlobalContext.Provider 
      value={{
        loginUser: (user) => dispatch({type: SIGN_IN, payload: user}),
        chooseCompass: (compass) => dispatch({type: SELECT_COMPASS, payload: compass}),
        logoutUser: () => dispatch({type: SIGN_OUT, payload: {}}),
        addCompass: (compass) => dispatch({type: ADD_COMPASS, payload: compass}),
        ...globalState
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const globalStore = () => (useContext(GlobalContext));
