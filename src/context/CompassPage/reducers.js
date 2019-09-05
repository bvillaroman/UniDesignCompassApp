export const CHANGE_VIEW = "CHANGE_VIEW";
export const CREATE_SESSION="CREATE_SESSION"
export const CREATE_INTERACTION="CREATE_INTERACTION"
export const SUBMIT_INTERACTION="SUBMIT_INTERACTION"

export const defaultState = {
  view: 0,
  currentInteraction: {
    step: {},
    duration:'',
    log: ''
  },
  currentSession:{
    title:'',
    description:'',
    duration:'',
  },
  interactions : [],
  attachments: []
}

const changeView = (newView, state) => {
  if (newView !== '') return { ...state, view: newView }
  return state
}
const createSession = (newSession, state) => {
  if (newSession !== '') return { ...state, currentSession: newSession }
  return state
}
const createInteraction = (newInteraction, state) => {
  if (newInteraction !== '') {
    return { ...state, currentInteraction: newInteraction }
  }
  return state
}

const submitInteraction = (newInteraction, state) => {
  if (newInteraction !== '') {
    const newState = { 
      ...state, 
      interactions: state.interactions ? [newInteraction, ...state.interactions ] : [newInteraction],
      currentInteraction: {
        step: {},
        duration:'',
        log: ''
      },
    }
    return newState;
  }
  return state
}
 const CompassPageReducer = (state = defaultState,{type,payload}) => {
  switch(type){
    case CHANGE_VIEW:
      return changeView(payload, state);
    case CREATE_SESSION:
      return createSession(payload,state);
    case CREATE_INTERACTION:
      return createInteraction(payload, state);
    case SUBMIT_INTERACTION:
      return submitInteraction(payload, state);
    default: 
      return state;
  }
}
export default CompassPageReducer;
