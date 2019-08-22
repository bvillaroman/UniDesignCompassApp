import React, { useReducer, createContext, useContext} from "react";
import AuthReducer, { SIGN_UP, VERIFY_USER, CHANGE_STATUS } from "./reducers"

// CONTEXT
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [AuthState,dispatch] = useReducer(AuthReducer, {
    email:'',
    code: '',
    status: '',
  })
  return (
    <AuthContext.Provider 
      value={{
        signupUser: (email) => dispatch({type: SIGN_UP, payload: email}),
        verifyUser: (code)  => dispatch({type: VERIFY_USER, payload: code}),
        changeStatus: (status)  => dispatch({type: CHANGE_STATUS, payload: status}),
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

