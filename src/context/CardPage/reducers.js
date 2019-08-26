export const CHANGE_VIEW = "CHANGE_VIEW";

const changeView = (newView, {view}) => {
  if (newView !== '') return { view: newView }
  return { view }
}

 const CardPageReducer = (state,{type,payload}) => {
  switch(type){
    case CHANGE_VIEW:
      return changeView(payload, state);
    default: 
      return state;
  }
}
export default CardPageReducer;
