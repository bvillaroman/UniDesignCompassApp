export const UPDATE_FORM = "UPDATE_FORM";
export const CLEAR_FORM = "UPDATE_FORM";
export const UPDATE_ERROR = "UPDATE_ERROR";
export const SUBMIT_FORM = "SIGN_UP";
export const SWITCH_TAB = "SWITCH_TAB";

const updateForm = (newForm, state) => ({ ...state, form: {...state.form, ...newForm}})
const clearForm = (state) => ({ ...state, form: {}})
const updateError = (newError, state) => ({ ...state, error: {...state.error, ...newError}})
const switchTab = (tab, state) => ({...state,tab })
const submitForm = (state) => {
  return {...state, form: {}}
}

const dashboardReducer = (state,{type,payload}) => {
  switch(type){
    case UPDATE_FORM:
      return updateForm(payload, state);
    case CLEAR_FORM:
      return clearForm(state);
    case UPDATE_ERROR:
      return updateError(payload, state);
    case SUBMIT_FORM:
      return submitForm(state);
    case SWITCH_TAB:
      return switchTab(payload, state);
    default: 
      return state;
  }
}
export default dashboardReducer;
