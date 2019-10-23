export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const defaultState = {
  user: {},
}
const loginUser = (newUser, state) => {
  if (newUser !== {}) return { ...state,user: newUser}
  return state
}
const logoutUser = (currentUser, state) => {
  if (currentUser !== {}) return { ...state,user: {},compass: {}}
  return state
}

const GlobalReducer = (state,{type,payload}) => {
  switch(type){
    case SIGN_IN:
      return loginUser(payload, state);
    case SIGN_OUT:
      return logoutUser(payload, state);
    default: 
      return state;
  }
}
export default GlobalReducer;
