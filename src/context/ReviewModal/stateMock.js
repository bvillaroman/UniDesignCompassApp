import {initialState} from "./context"

const ReviewModalStateMock = {
  updateShowModal: jest.fn(),
  updateInteraction: jest.fn(),
  clearInteraction: jest.fn(),
  ...initialState
}

export default ReviewModalStateMock;