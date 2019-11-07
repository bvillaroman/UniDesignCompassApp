import React, { useReducer, createContext} from "react";
import CompassReducer, { 
  UPDATE_COMPASS, 
  UPDATE_SESSIONS,
  UPDATE_SESSION,
  UPDATE_INTERACTION,
  UPDATE_INTERACTIONS,
  UPDATE_TIME,
  CLEAR_COMPASS, 
  CLEAR_SESSION, 
  CLEAR_INTERACTION,
  CLEAR_INTERACTIONS,
  CLEAR_TIME,
} from "./reducers"

// CONTEXT
export const CompassContext = createContext();

export const initialState = {
  compass: {},
  session: {},
  interaction: {},
  interactions: [],
  time: 0
}

export const CompassProvider = ({children}) => {
  const [CompassState,dispatch] = useReducer(CompassReducer,initialState)
  return (
    <CompassContext.Provider 
      value={{
        updateCompass: (compass) => dispatch({type: UPDATE_COMPASS, payload: compass}),
        updateSessions: (sessions) => dispatch({type: UPDATE_SESSIONS, payload: sessions}),
        updateSession: (session) => dispatch({type: UPDATE_SESSION, payload: session}),
        updateInteraction: (interaction) => dispatch({type: UPDATE_INTERACTION, payload: interaction}),
        updateInteractions: (interactions) => dispatch({type: UPDATE_INTERACTIONS, payload: interactions}), 
        updateTime: (time) => dispatch({type: UPDATE_TIME, payload: time}), 
        clearCompass: () => dispatch({type: CLEAR_COMPASS}),
        clearSession: () => dispatch({type: CLEAR_SESSION}),
        clearInteraction: () => dispatch({type: CLEAR_INTERACTION}),
        clearInteractions: () => dispatch({type: CLEAR_INTERACTIONS}),
        clearTime: () => dispatch({type: CLEAR_TIME}),
        ...CompassState
      }}
    >
      {children}
    </CompassContext.Provider>
  )
}


