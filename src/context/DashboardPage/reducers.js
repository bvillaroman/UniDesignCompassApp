export const UPDATE_FORM = "UPDATE_FORM";
export const UPDATE_ERROR = "UPDATE_ERROR";
export const SUBMIT_FORM = "SIGN_UP";
export const SWITCH_TAB = "VERIFY_USER";
// import {globalStore} from "../context"

const updateForm = (newForm, state) => ({ ...state, form: {...state.form, ...newForm}})
const updateError = (newError, state) => ({ ...state, error: {...state.error, ...newError}})
const switchTab = (tab, state) => ({...state,tab })
const submitForm = (form,state) => {
  // globalStore().
  return state
}

const dashboardReducer = (state,{type,payload}) => {
  switch(type){
    case UPDATE_FORM:
      return updateForm(payload, state);
    case UPDATE_ERROR:
      return updateError(payload, state);
    case SUBMIT_FORM:
      return submitForm(payload, state);
    case SWITCH_TAB:
      return switchTab(payload, state);
    default: 
      return state;
  }
}
export default dashboardReducer;
