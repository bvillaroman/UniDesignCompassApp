import {initialState, CompassContext} from "./context"

const CompassContextMock = {
  updateCompass: jest.fn(),
  updateSession: jest.fn(),
  addInteraction: jest.fn(),
  updateInteraction: jest.fn(),
  updateInteractions: jest.fn(),
  updateTime: jest.fn(),
  clearCompass: jest.fn(),
  clearSession: jest.fn(),
  clearInteraction: jest.fn(),
  clearInteractions: jest.fn(),
  clearTime: jest.fn(),
  ...initialState,
}

export default CompassContextMock;