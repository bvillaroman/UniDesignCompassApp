export const SIGN_IN = "ADD_LOG";
export const SIGN_OUT = "REMOVE_LOG";

const loginUser = (newUser, state) => {
  if (newUser !== {}) return { ...state,user: newUser}
  return state
}
const logoutUser = (currentUser, state) => {
  if (currentUser !== {}) return { ...state,user: {}}
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
