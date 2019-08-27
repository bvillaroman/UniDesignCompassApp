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
    steps: [
      {
        title:'Step 1',
        description:'',
        duration:'',
        log: ''
      },
      {
        title:'Step 2',
        description:'',
        duration:'',
        log: ''
      },
      {
        title:'Step 3',
        description:'',
        duration:'',
        log: ''
      },
      {
        title:'Step 4',
        description:'',
        duration:'',
        log: ''
      },
      {
        title:'Step 5',
        description:'',
        duration:'',
        log: ''
      },
      {
        title:'Step 6',
        description:'',
        duration:'',
        log: ''
      }
    ],
    attachments: []
  })
  return (
    <CompassPageContext.Provider 
      value={{
        changeView:(VIEW) => dispatch({type: CHANGE_VIEW, payload: VIEW}),
        changeStep:(STEP) => dispatch({type: CHANGE_ACTIVE_STEP, payload: STEP}),
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

