import {initialState} from "./intialState"
import {FETCH_USER_INFO} from "./constants"

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_INFO :
      return {
        ...state,
        userID: action.payload
      };
    default:
      return state;
  }
}

