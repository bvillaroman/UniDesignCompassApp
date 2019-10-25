export const UPDATE_SHOW_MODAL = "UPDATE_SHOW_MODAL";
export const UPDATE_INTERACTION = "UPDATE_INTERACTION";
export const CLEAR_INTERACTION = "CLEAR_INTERACTION";

const updateInteraction = (newInteraction, state) => ({ ...state, interaction: newInteraction });
const clearInteraction = (state) => ({ ...state, interaction: {}})
const updateShowModal = (showModalBool,state) => ({ ...state, showModal: showModalBool});

export default (state,{type,payload}) => {
  switch(type){
    case UPDATE_SHOW_MODAL:
      return updateShowModal(payload, state);
    case UPDATE_INTERACTION:
      return updateInteraction(payload, state);
    case CLEAR_INTERACTION:
      return clearInteraction(state);
    default: 
      return state;
  }
};