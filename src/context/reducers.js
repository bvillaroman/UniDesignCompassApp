export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const SELECT_COMPASS = "SELECT_COMPASS";
export const ADD_COMPASS = "ADD_COMPASS";

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
const addCompass = (newCompass, state) => {
  if (newCompass !== {}) {
    const compasses = (state.user.compasses) ? [...state.user.compasses,newCompass] : [newCompass]
    const newState = { 
      ...state,
      user: {
        ...state.user,
        compasses
      }
    }
    return newState
  }
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
    case ADD_COMPASS:
      return addCompass(payload, state);
    default: 
      return state;
  }
}
export default GlobalReducer;
