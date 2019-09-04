export const CHANGE_VIEW = "CHANGE_VIEW";
export const CHANGE_ACTIVE_STEP = "CHANGE_ACTIVE_STEP";
export const CREATE_SESSION="CREATE_SESSION"
export const CREATE_INTERACTION="CREATE_INTERACTION"

export const defaultState = {
  view: 0,
    currentStep:{
      title:'',
      description:'',
      duration:'',
      log: ''
    },
    currentSession:{
      title:'',
      description:'',
      duration:'',
      log: ''
    },
    interactions : [],
    attachments: []
}

const changeView = (newView, state) => {
  if (newView !== '') return { ...state, view: newView }
  return state
}
const changeStep = (newStep, state) => {
  if (newStep !== '') return { ...state, currentStep: newStep }
  return state
}
const createSession = (newSession, state) => {
  if (newSession !== '') return { ...state, currentSession: newSession }
  return state
}
const createInteraction = (newInteraction, state) => {
  if (newInteraction !== '') {
    if (state.interactions) return { ...state, interactions: [newInteraction, ...state.interactions ] }
    return { ...state, interactions: [newInteraction] }
  }
  return state
}
 const CompassPageReducer = (state = defaultState,{type,payload}) => {
  switch(type){
    case CHANGE_VIEW:
      return changeView(payload, state);
    case CHANGE_ACTIVE_STEP:
      return changeStep(payload, state);
    case CREATE_SESSION:
      return createSession(payload,state);
    case CREATE_INTERACTION:
      return createInteraction(payload, state);
    default: 
      return state;
  }
}
export default CompassPageReducer;
