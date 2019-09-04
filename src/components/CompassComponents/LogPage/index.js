import React,{ useState} from "react";
import { 
  LoggerGrid,
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
    <LoggerGrid
      rows={['auto', 'fill']}
      columns={['flex']}
      fill
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'main', start: [1, 0], end: [1, 1] },
      ]}
    >
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
    </LoggerGrid>
  );
}
export default Logger;
