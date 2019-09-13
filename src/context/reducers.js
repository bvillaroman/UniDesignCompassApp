export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const SELECT_COMPASS = "SELECT_COMPASS";
export const SELECT_SESSION = "SELECT_SESSION";
export const SELECT_INTERACTION = "SELECT_INTERACTION";
export const REMOVE_COMPASS = "REMOVE_COMPASS" ;
export const REMOVE_SESSION = "REMOVE_SESSION" ;
export const REMOVE_INTERACTION = "REMOVE_INTERACTION" ;

export const defaultState = {
  user: {},
  compass: typeof localStorage !== 'undefined' && localStorage.getItem('compass') ? localStorage.getItem('compass') : '',
  session: typeof localStorage !== 'undefined' && localStorage.getItem('session') ? localStorage.getItem('session') : '',
  interaction: typeof localStorage !== 'undefined' && localStorage.getItem('interaction') ? localStorage.getItem('interaction') : '',
}

const loginUser = (newUser, state) => {
  if (newUser !== {}) return { ...state,user: newUser}
  return state
}
const logoutUser = (currentUser, state) => {
  if (currentUser !== {}) return { ...state,user: {},compass: {}}
  return state
}
const selectCompass = (newCompass, state) => {
  if(typeof localStorage !== 'undefined') localStorage.setItem('compass', newCompass)
  return { ...state,compass: newCompass}
}
const selectSession = (newSession, state) => {
  if(typeof localStorage !== 'undefined') localStorage.setItem('session', newSession)
  return { ...state,session: newSession}
}
const selectInteraction = (newInteraction, state) => {
  if(typeof localStorage !== 'undefined') localStorage.setItem('newInteraction', newInteraction)
  return { ...state,interaction: newInteraction}
}
const removeCompass = (state) => {
  if(typeof localStorage !== 'undefined') localStorage.removeItem('compass')
  return { ...state,compass: ''}
}
const removeSession = (state) => {
  if(typeof localStorage !== 'undefined') localStorage.removeItem('session')
  return { ...state,session: ''}
}
const removeInteraction = (state) => {
  if(typeof localStorage !== 'undefined') localStorage.removeItem('interaction')
  return { ...state,interaction: ''}
}

const GlobalReducer = (state,{type,payload}) => {
  switch(type){
    case SIGN_IN:
      return loginUser(payload, state);
    case SIGN_OUT:
      return logoutUser(payload, state);
    case SELECT_COMPASS:
      return selectCompass(payload, state);
    case SELECT_SESSION:
      return selectSession(payload, state);
    case SELECT_INTERACTION:
      return selectInteraction(payload, state);
    case REMOVE_COMPASS:
      return removeCompass(state);
    case REMOVE_SESSION:
      return removeSession(state);
    case REMOVE_INTERACTION:
      return removeInteraction(state);
    default: 
      return state;
  }
}
export default GlobalReducer;
