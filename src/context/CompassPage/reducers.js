export const UPDATE_COMPASS = "UPDATE_COMPASS";
export const UPDATE_SESSION = "UPDATE_SESSION";
export const UPDATE_SESSIONS = "UPDATE_SESSIONS";
export const UPDATE_INTERACTION = "UPDATE_INTERACTION";
export const UPDATE_INTERACTIONS = "UPDATE_INTERACTIONS";
export const UPDATE_TIME = "UPDATE_TIME";
export const CLEAR_COMPASS = "CLEAR_COMPASS";
export const CLEAR_SESSION = "CLEAR_SESSION";
export const CLEAR_INTERACTION = "CLEAR_INTERACTION";
export const CLEAR_INTERACTIONS = "CLEAR_INTERACTION";
export const CLEAR_TIME = "CLEAR_TIME";

const updateCompass = (newCompass, state) => ({ ...state, compass: newCompass})
const updateSessions = (newSessions, state) => ({ ...state, compass: {
  ...state.compass,
  sessions: { 
    items : newSessions
  }
}})
const updateSession = (newSession, state) => ({ ...state, session: newSession})
const updateInteraction = (newInteraction, state) => {
  const interaction = {...state.interaction, ...newInteraction}
  let newInteractions = state.interactions;
  newInteractions = newInteractions.filter((item) => { return interaction.id !== item.id })
  newInteractions = [interaction, ...newInteractions]
  
  return { 
    ...state, 
    interaction, 
    interactions: newInteractions
  }
}
const updateInteractions = (newInteractions, state) => ({ ...state, interactions: newInteractions})
const updateTime = (newTime, state) => ({ ...state, time: newTime})

const clearCompass = (state) => ({ ...state, compass: {}})
const clearSession = (state) => ({ ...state, session: {}})
const clearInteraction = (state) => ({ ...state, interaction: {}})
const clearInteractions = (state) => ({ ...state, interactions: []})
const clearTime = (state) => ({ ...state, time: 0})

export default (state,{type,payload}) => {
  switch(type){
    case UPDATE_COMPASS:
      return updateCompass(payload, state);
    case UPDATE_SESSION:
      return updateSession(payload, state);
    case UPDATE_SESSIONS:
        return updateSessions(payload, state); 
    case UPDATE_INTERACTION:
      return updateInteraction(payload, state);
    case UPDATE_INTERACTIONS:
      return updateInteractions(payload, state);
    case UPDATE_TIME:
      return updateTime(payload, state);
    case CLEAR_COMPASS:
      return clearCompass(state);
    case CLEAR_SESSION:
      return clearSession(state);
    case CLEAR_INTERACTION:
      return clearInteraction(state);
    case CLEAR_INTERACTIONS:
      return clearInteractions(state);
    case CLEAR_TIME:
      return clearTime(state);
    default: 
      return state;
  }
};