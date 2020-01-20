import {initialState} from "./context"

export const PAUSE_TIMER = "PAUSE_TIMER";
export const START_TIMER = "START_TIMER";
export const UPDATE_COMPASS = "UPDATE_COMPASS";
export const UPDATE_SESSION = "UPDATE_SESSION";
export const UPDATE_INTERACTION = "UPDATE_INTERACTION";
export const ADD_INTERACTION = "ADD_INTERACTION";
export const UPDATE_INTERACTIONS = "UPDATE_INTERACTIONS";
export const UPDATE_TIME = "UPDATE_TIME";
export const CLEAR_COMPASS = "CLEAR_COMPASS";
export const CLEAR_SESSION = "CLEAR_SESSION";
export const CLEAR_INTERACTION = "CLEAR_INTERACTION";
export const CLEAR_INTERACTIONS = "CLEAR_INTERACTION";
export const CLEAR_TIME = "CLEAR_TIME";

const updateCompass = (newCompass, state) => ({ ...state, compass: newCompass})
const updateSession = (newSession, state) => ({ ...state, session: newSession})
const addInteraction = (newInteraction, state) => {
  const interaction = {...state.newestInteraction, ...newInteraction}
  let newInteractions = state.interactions;
  newInteractions = newInteractions.filter((item) => { return interaction.id !== item.id })
  newInteractions = [interaction, ...newInteractions]
  
  return { 
    ...state, 
    interaction, 
    interactions: newInteractions,
    newestInteraction: interaction,
    interactionAdded: true,
    interactionUpdated: false
  }
}
const updateInteraction = (newInteraction, state) => ({
  ...state, 
  interaction: newInteraction, 
  interactionAdded: false, 
  interactionUpdated: true 
}) 
const updateInteractions = (newInteractions, state) => ({ 
  ...state, 
  interactions: newInteractions, 
  newestInteraction: newInteractions.length > 0 ? newInteractions[0] : {}, 
  interactionAdded: true, 
  interactionUpdated: false 
})
const updateTime = (newTime, state) => ({ ...state, time: newTime})

const clearCompass = () => (initialState)
const clearSession = (state) => ({ 
  ...state, 
  session: {}, 
  newestInteraction: {}, 
  interaction: {}, 
  interactions: [], 
  interactionAdded: false,
  interactionUpdated: false
  })
const clearInteraction = (state) => ({ ...state, interaction: {}, interactionAdded: false, interactionUpdated: false})
const clearInteractions = (state) => ({ ...state, interactions: []})
const clearTime = (state) => ({ ...state, time: 0})

export default (state,{type,payload}) => {
  switch(type){
    case PAUSE_TIMER:
      return {
        ...state, 
        pause: true
      }  
    case START_TIMER:
      return {
        ...state, 
        pause: false
      }  
    case UPDATE_COMPASS:
      return updateCompass(payload, state);
    case UPDATE_SESSION:
      return updateSession(payload, state);
    case UPDATE_INTERACTION:
      return updateInteraction(payload, state);
    case ADD_INTERACTION:
      return addInteraction(payload, state);
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