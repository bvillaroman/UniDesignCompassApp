import {defaultState} from "./reducers"

const GlobalStateMock = {
  loginUser: jest.fn(),
  logoutUser: jest.fn(),
  ...defaultState
}

export default GlobalStateMock ;