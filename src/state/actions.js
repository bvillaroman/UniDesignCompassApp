import { FETCH_USER_INFO, AUTH_USER } from "./constants"

export const fetchUserInfo = (orderID) => ({
  type: FETCH_USER_INFO,
  payload: orderID
})

export const authenticateUser = (authenticated = false) => dispatch => {

  dispatch(
    {
      type: AUTH_USER,
      payload: "true",
      aws_user: [1]
    }
  )
}
