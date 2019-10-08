import React, { useReducer, createContext} from "react";
import CompassReducer, { 
  UPDATE_COMPASS, 
  UPDATE_SESSION,
  UPDATE_INTERACTION,
  UPDATE_INTERACTIONS,
  CLEAR_COMPASS, 
  CLEAR_SESSION, 
  CLEAR_INTERACTION,
  CLEAR_INTERACTIONS
} from "./reducers"

// CONTEXT
export const CompassContext = createContext();

export const initialState = {
  compass: {},
  session: {},
  interaction: {},
  interactions: []
}

export const CompassProvider = ({children}) => {
  const [CompassState,dispatch] = useReducer(CompassReducer,initialState)
  return (
    <CompassContext.Provider 
      value={{
        updateCompass: (compass) => dispatch({type: UPDATE_COMPASS, payload: compass}),
        updateSession: (session) => dispatch({type: UPDATE_SESSION, payload: session}),
        updateInteraction: (interaction) => dispatch({type: UPDATE_INTERACTION, payload: interaction}),
        updateInteractions: (interactions) => dispatch({type: UPDATE_INTERACTIONS, payload: interactions}), 
        clearCompass: () => dispatch({type: CLEAR_COMPASS}),
        clearSession: () => dispatch({type: CLEAR_SESSION}),
        clearInteraction: () => dispatch({type: CLEAR_INTERACTION}),
        clearInteractions: () => dispatch({type: CLEAR_INTERACTIONS}),
        ...CompassState
      }}
    >
      {children}
    </CompassContext.Provider>
  )
}


