import React, { useReducer, createContext} from "react";
import DashboardReducer, { UPDATE_FORM, SUBMIT_FORM,SWITCH_TAB,UPDATE_ERROR, CLEAR_FORM } from "./reducers"

// CONTEXT
export const DashboardContext = createContext();

export const initialState = {
  form : {
    title: "",
    description: "",
    compassType: "",
    steps: [],
    admins: [],
    readers: []
  },
  errors: {
    title: "",
    description: "",
    compassType: "",
    steps: [],
    admins: [],
    readers: []
  },
  tab: 0
}

export const DashboardProvider = ({children}) => {
  const [DashboardState,dispatch] = useReducer(DashboardReducer, initialState)
  return (
    <DashboardContext.Provider 
      value={{
        updateForm: (form) => dispatch({type: UPDATE_FORM, payload: form}),
        clearForm: () => dispatch({type: CLEAR_FORM}),
        submitForm: () => dispatch({type: SUBMIT_FORM}),
        updateError: (error) => dispatch({type: UPDATE_ERROR, payload: error}),
        switchTab: (tab)  => dispatch({type: SWITCH_TAB, payload: tab}),
        ...DashboardState
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}


