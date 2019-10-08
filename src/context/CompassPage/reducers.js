export const UPDATE_COMPASS = "UPDATE_COMPASS";
export const UPDATE_SESSION = "UPDATE_SESSION";
export const UPDATE_INTERACTION = "UPDATE_INTERACTION";
export const UPDATE_INTERACTIONS = "UPDATE_INTERACTIONS";
export const CLEAR_COMPASS = "CLEAR_COMPASS";
export const CLEAR_SESSION = "CLEAR_SESSION";
export const CLEAR_INTERACTION = "CLEAR_INTERACTION";
export const CLEAR_INTERACTIONS = "CLEAR_INTERACTION";

const updateCompass = (newCompass, state) => ({ ...state, compass: newCompass})
const updateSession = (newSession, state) => ({ ...state, session: newSession})
const updateInteraction = (newInteraction, state) => ({ ...state, interaction: newInteraction})
const updateInteractions = (newInteractions, state) => ({ ...state, interactions: newInteractions})

const clearCompass = (state) => ({ ...state, compass: {}})
const clearSession = (state) => ({ ...state, session: {}})
const clearInteraction = (state) => ({ ...state, interaction: {}})
const clearInteractions = (state) => ({ ...state, interactions: []})

export default (state,{type,payload}) => {
  switch(type){
    case UPDATE_COMPASS:
      return updateCompass(payload, state);
    case UPDATE_SESSION:
      return updateSession(payload, state);
    case UPDATE_INTERACTION:
      return updateInteraction(payload, state);
    case UPDATE_INTERACTIONS:
      return updateInteractions(payload, state);
    case CLEAR_COMPASS:
      return clearCompass(state);
    case CLEAR_SESSION:
      return clearSession(state);
    case CLEAR_INTERACTION:
      return clearInteraction(state);
    case CLEAR_INTERACTIONS:
      return clearInteractions(state);
    default: 
      return state;
  }
};