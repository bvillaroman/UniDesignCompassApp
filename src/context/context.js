import React, { useReducer, createContext, useContext} from "react";
import AuthReducer, { SIGN_IN, SIGN_OUT} from "./reducers"

// CONTEXT
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [AuthState,dispatch] = useReducer(AuthReducer, {
    user: {},
  })
  return (
    <AuthContext.Provider 
      value={{
        loginUser: (email) => dispatch({type: SIGN_IN, payload: email}),
        logoutUser: () => dispatch({type: SIGN_OUT, payload: {}}),
        ...AuthState
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const userAuth = () => {
  const contextValue = useContext(AuthContext);
  return contextValue;
};

