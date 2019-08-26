import React, { useReducer, createContext, useContext} from "react";
import CardPageReducer, {CHANGE_VIEW} from "./reducers"

// CONTEXT
export const CardPageContext = createContext();

export const CardPageProvider = ({children}) => {
  const [CardPageState,dispatch] = useReducer(CardPageReducer, {
    view: 0,
  })
  return (
    <CardPageContext.Provider 
      value={{
        changeView:(VIEW) => dispatch({type: CHANGE_VIEW, payload: VIEW}),
        ...CardPageState
      }}
    >
      {children}
    </CardPageContext.Provider>
  )
}

export const userCardPage = () => {
  const contextValue = useContext(CardPageContext);
  return contextValue;
};

