export const CHANGE_VIEW = "CHANGE_VIEW";
export const CHANGE_ACTIVE_STEP = "CHANGE_ACTIVE_STEP";


const defaultState = {
  view: 0,
  currentStep:{
    title:'',
    description:'',
    duration:'',
    log: ''
  },
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

 const CompassPageReducer = (state = defaultState,{type,payload}) => {
  switch(type){
    case CHANGE_VIEW:
      return changeView(payload, state);
    case CHANGE_ACTIVE_STEP:
      return changeStep(payload, state);
    default: 
      return state;
  }
}
export default CompassPageReducer;
