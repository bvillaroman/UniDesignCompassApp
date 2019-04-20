import {initialState} from "./intialState"
import {AUTH_USER} from "./constants"

export default (state = initialState, action) => {
  switch(action.type) {
    case AUTH_USER :
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
}

