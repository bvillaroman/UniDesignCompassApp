import React, { useReducer, createContext, useContext} from "react";
import CompassPageReducer, {defaultState, CHANGE_VIEW,CHANGE_ACTIVE_STEP, CREATE_SESSION, CREATE_INTERACTION,SUBMIT_INTERACTION} from "./reducers"

// CONTEXT
export const CompassPageContext = createContext();

export const CompassPageProvider = ({children}) => {
  const [CompassPageState,dispatch] = useReducer(CompassPageReducer, defaultState)
  return (
    <CompassPageContext.Provider 
      value={{
        changeView:(view) => dispatch({type: CHANGE_VIEW, payload: view}),
        createSession:(session) => dispatch({type: CREATE_SESSION, payload: session}),
        createInteraction:(interaction) => dispatch({type: CREATE_INTERACTION, payload: interaction}),
        submitInteraction:(interaction) => dispatch({type: SUBMIT_INTERACTION, payload: interaction}),
        ...CompassPageState
      }}
    >
      {children}
    </CompassPageContext.Provider>
  )
}

export const userCompassPage = () => {
  const contextValue = useContext(CompassPageContext);
  return contextValue;
};

