import { AUTH_USER } from "./constants"

export const authenticateUser = (payload) => dispatch => {
  dispatch({
    type: AUTH_USER,
    payload
  })
}
