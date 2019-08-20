import React, { useReducer, createContext, useContext} from "react";
import LoggerReducer, {ADD_LOG} from "./reducers"

// CONTEXT
export const LoggerContext = createContext();

export const LoggerProvider = ({children}) => {
  const [LoggerState,dispatch] = useReducer(LoggerReducer, {
    logs: []
  })
  return (
    <LoggerContext.Provider 
      value={{
        setLog: (log) => dispatch({type: ADD_LOG, payload: log}),
        ...LoggerState
      }}
    >
      {children}
    </LoggerContext.Provider>
  )
}

export const userLogger = () => {
  const contextValue = useContext(LoggerContext);
  return contextValue;
};

