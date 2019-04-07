import { FETCH_USER_INFO ,AUTH_USER } from "./constants"
import { Auth } from "aws-amplify";
import config from "../aws-exports";
Auth.configure(config);

export const fetchUserInfo = (orderID) => ({
  type: FETCH_USER_INFO,
  payload: orderID
})

export const authenticateUser =(username,password) => dispatch=> {
  const user = Auth.signIn(username,password);
  dispatch({
    type: AUTH_USER,
    payload: true
  });
}