import React,{ useState, useEffect} from "react";
import {LoggerInputs, SendButton, LoggerInput} from "../../../styles/CompassPage"
import {userLogger} from "../context"

const Logger = (props) => {
  const {setLog} = userLogger()
  const [value, setValue] = useState('');

  const submitLog = () => {
    setLog(value);
    setValue('');
  }

  useEffect(() => {
    function handler(event){
      if (event.key === 'Enter') submitLog()
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [value])

  return (
    <LoggerInputs>
      <LoggerInput
        focusIndicator="false"
        placeholder="Enter Log"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <SendButton
        primary
        label="Send"
        onClick={(e) => {submitLog()}}
      />
    </LoggerInputs>
  );
}
export default Logger;
