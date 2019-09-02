export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const SELECT_COMPASS = "SELECT_COMPASS";

const loginUser = (newUser, state) => {
  if (newUser !== {}) return { ...state,user: newUser}
  return state
}
const logoutUser = (currentUser, state) => {
  if (currentUser !== {}) return { ...state,user: {},compass: {}}
  return state
}
const selectCompass = (newCompass, state) => {
  if (newCompass !== {}) return { ...state,compass: newCompass}
  return state
}


const GlobalReducer = (state,{type,payload}) => {
  switch(type){
    case SIGN_IN:
      return loginUser(payload, state);
    case SIGN_OUT:
      return logoutUser(payload, state);
    case SELECT_COMPASS:
      return selectCompass(payload, state);
    default: 
      return state;
  }
}
export default GlobalReducer;
