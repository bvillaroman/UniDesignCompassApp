import React,{ useState, useEffect} from "react";
import { 
  LoggerInput, 
  LoggerTA, 
  LoggerNav, 
  StepName,
  LoggerInnerNav,
  CompassButton,
} from "../../../styles/CompassPage"
import {userCompassPage} from "../../../context/CompassPage/context"


const Logger = () => {
  const {changeView, currentStep } = userCompassPage()
  const [value, setValue] = useState('');

  const {
    stepTitle
  } = currentStep;

  const changeToCompass = (e) => changeView(1)

  return (
    <>
      <LoggerNav gridArea="header" >
        <LoggerInnerNav>
          <CompassButton onClick={changeToCompass}/>
          <StepName> {stepTitle} </StepName>
        </LoggerInnerNav>
      </LoggerNav>
      <LoggerTA gridArea="main" >
        <LoggerInput
          placeholder="Enter Log"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </LoggerTA>
    </>
  );
}
export default Logger;
