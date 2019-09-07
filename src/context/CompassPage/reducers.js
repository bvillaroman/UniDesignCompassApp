
export const CREATE_SESSION="CREATE_SESSION"
export const CREATE_INTERACTION="CREATE_INTERACTION"
export const SUBMIT_INTERACTION="SUBMIT_INTERACTION"

export const defaultState = {
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

const createSession = (newSession, state) => {
  if (newSession !== {}) return { ...state, currentSession: newSession }
  return state
}
const createInteraction = (newInteraction, state) => {
  if (newInteraction !== {}) return { ...state, currentInteraction: newInteraction }
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
