import {initialState} from "./intialState"
import {FETCH_USER_INFO,AUTH_USER} from "./constants"

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_INFO :
      return {
        ...state,
        userID: action.payload
      };
    case AUTH_USER :
      return {
        ...state,
        aws_user: action.aws_user,
        isAuthenticated: action.payload
      };
    default:
      return state;
  }
}

