import {initialState} from "./context"

const DashboardContextStateMock = {
  updateForm: jest.fn(),
  clearForm: jest.fn(),
  submitForm: jest.fn(),
  updateError: jest.fn(),
  switchTab: jest.fn(),
  ...initialState
}

export default DashboardContextStateMock;