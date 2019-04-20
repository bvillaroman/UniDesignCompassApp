import {initialState} from "./intialState"
import {AUTH_USER, LOGOUT_USER} from "./constants"


export default (state = initialState, action) => {
  switch(action.type) {
    case AUTH_USER :
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case LOGOUT_USER :
      return {
        ...state,
        user: {},
        isAuthenticated: false
      };
    default:
      return state;
  }
}

