import { AUTH_USER,LOGOUT_USER } from "./constants"

export const authenticateUser = (payload) => dispatch => {
  dispatch({
    type: AUTH_USER,
    payload
  })
}
export const logOutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  })
}

