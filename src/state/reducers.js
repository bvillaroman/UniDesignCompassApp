import {initialState} from "./intialState"
import {FETCH_USER_INFO,AUTH_USER} from "./constants"

export default (state = initialState, action) => {
  console.log(state);
  switch(action.type) {
    case FETCH_USER_INFO :
      return {
        ...state,
        userID: action.payload
      };
    case AUTH_USER :
      return {
        ...state,
        isAuthenticated:action.payload
      };
    default:
      return state;
  }
}

