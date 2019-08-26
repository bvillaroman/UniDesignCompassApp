import React,{ useState, useEffect} from "react";
import { 
  LoggerInput, 
  LoggerTA, 
  LoggerNav, 
  StepName,
  LoggerInnerNav,
  CompassButton,
} from "../../../styles/CompassPage"
import {userCardPage} from "../../../context/CardPage/context"


const Logger = ({stepTitle}) => {
  const {changeView} = userCardPage()
  const [value, setValue] = useState('');

  const changeToCompass = (e) => changeView(1)

  return (
    <>
      <LoggerNav gridArea="header" >
        <LoggerInnerNav>
          <CompassButton onClick={changeToCompass}/>
          <StepName> Step Title </StepName>
          
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
