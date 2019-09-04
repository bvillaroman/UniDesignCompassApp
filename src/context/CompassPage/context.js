import React, { useReducer, createContext, useContext} from "react";
import CompassPageReducer, {CHANGE_VIEW,CHANGE_ACTIVE_STEP} from "./reducers"

// CONTEXT
export const CompassPageContext = createContext();

export const CompassPageProvider = ({children}) => {
  const [CompassPageState,dispatch] = useReducer(CompassPageReducer, {
    view: 0,
    currentStep:{
      title:'',
      description:'',
      duration:'',
      log: ''
    },
    attachments: []
  })
  return (
    <CompassPageContext.Provider 
      value={{
        changeView:(view) => dispatch({type: CHANGE_VIEW, payload: view}),
        changeStep:(step) => dispatch({type: CHANGE_ACTIVE_STEP, payload: step}),
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

