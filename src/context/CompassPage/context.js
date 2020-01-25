import React, { useReducer, createContext} from "react";
import CompassReducer, { 
  PAUSE_TIMER,
  START_TIMER,
  UPDATE_COMPASS, 
  UPDATE_SESSION,
  UPDATE_NEWEST_LOG,
  UPDATE_NEWEST_DURATION,
  ADD_INTERACTION,
  UPDATE_INTERACTION,
  UPDATE_INTERACTIONS,
  INCREASE_TIMER,
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
  newestInteraction: {},
  newestLog: "",
  newestDuration: 0,
  interactions: [],
  time: 0,
  interactionAdded: false,
  interactionUpdated: false,
  pause: false
}

export const CompassProvider = ({children}) => {
  const [CompassState,dispatch] = useReducer(CompassReducer,initialState)
  return (
    <CompassContext.Provider 
      value={{
        pauseTimer: () => dispatch({type: PAUSE_TIMER}),
        startTimer: () => dispatch({type: START_TIMER}),
        increaseTimer: () => dispatch({type: INCREASE_TIMER}),
        updateCompass: (compass) => dispatch({type: UPDATE_COMPASS, payload: compass}),
        updateSession: (session) => dispatch({type: UPDATE_SESSION, payload: session}),
        addInteraction: (interaction) => dispatch({type: ADD_INTERACTION, payload: interaction}),
        updateNewestLog: (log) => dispatch({type: UPDATE_NEWEST_LOG, payload: log}),
        updateNewestDuration: (duration) => dispatch({type: UPDATE_NEWEST_DURATION, payload: duration}),
        updateInteractions: (interactions) => dispatch({type: UPDATE_INTERACTIONS, payload: interactions}), 
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


