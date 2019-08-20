export const ADD_LOG = "ADD_LOG";
export const REMOVE_LOG = "REMOVE_LOG";

const submitLog = (newLog, {logs}) => {
  if (newLog !== '') return { logs: [...logs, newLog] }
  return { logs }
}

 const LoggerReducer = (state,{type,payload}) => {
  switch(type){
    case ADD_LOG:
      return submitLog(payload, state);
    default: 
      return state;
  }
}
export default LoggerReducer;
