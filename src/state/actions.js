import { FETCH_USER_INFO } from "./constants"

export const fetchUserInfo = (orderID) => ({
  type: FETCH_USER_INFO,
  payload: orderID
})