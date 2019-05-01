import { AUTH_USER,LOGOUT_USER,UPDATE_USER } from "./constants"

export const authenticateUser = (payload) => dispatch => {
  dispatch({
    type: AUTH_USER,
    payload
  })
}
export const updateUser = (payload) => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload
  })
}
export const logOutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  })
}

