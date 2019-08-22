export const SIGN_UP = "SIGN_UP";
export const VERIFY_USER = "VERIFY_USER";
export const CHANGE_STATUS = "CHANGE_STATUS";

const signUp = (email, state) => {
  if (email !== '') return { ...state,email}
  return state
}
const verifyUser = (code, state) => {
  if (code !== '') return { ...state,code}
  return state
}
const changeStatus = (status, state) => {
  console.log("status change:")
  if (status !== '') return { ...state,status}
  return state
}

const authReducer = (state,{type,payload}) => {
  switch(type){
    case SIGN_UP:
      return signUp(payload, state);
    case VERIFY_USER:
      return verifyUser(payload, state);
    case CHANGE_STATUS:
      return changeStatus(payload, state);
    default: 
      return state;
  }
}
export default authReducer;
