import React, { useReducer, createContext, useContext} from "react";
import DashboardReducer, { UPDATE_FORM, SUBMIT_FORM,SWITCH_TAB,UPDATE_ERROR } from "./reducers"

// CONTEXT
export const DashboardContext = createContext();

export const DashboardProvider = ({children}) => {
  const [DashboardState,dispatch] = useReducer(DashboardReducer, {
    form : {
      title: "",
      description: "",
      date_start: "",
      steps: []
    },
    errors: {
      title: "",
      description: "",
      date_start: "",
      steps: ""
    },
    tab: 0
  })
  return (
    <DashboardContext.Provider 
      value={{
        updateForm: (form) => dispatch({type: UPDATE_FORM, payload: form}),
        submitForm: (form) => dispatch({type: SUBMIT_FORM, payload: form}),
        updateError: (error) => dispatch({type: UPDATE_ERROR, payload: error}),
        switchTab: (tab)  => dispatch({type: SWITCH_TAB, payload: tab}),
        ...DashboardState
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export const userDashboard = () => {
  const contextValue = useContext(DashboardContext);
  return contextValue;
};
