import React,{ useState} from "react";
import { 
  LoggerGrid,
  LoggerInput, 
  LoggerTA, 
  StepName,
  LoggerInnerNav,
  CompassButton,
} from "../../../styles/CompassPage"
import {userCompassPage} from "../../../context/CompassPage/context"


const Logger = () => {
  const {changeView, currentStep, changeStep, createInteraction } = userCompassPage()
  const [value, setValue] = useState('');

  const {title} = currentStep;

  const changeToCompass = (e) => {
    changeView(0)
    if (currentStep.duration) createInteraction({step: currentStep, duration: currentStep.duration})
    changeStep({})
  }

  return (
    <LoggerGrid
      rows={['15%', '85%']}
      columns={['fill']}
      fill="vertical"
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [0, 1], end: [0, 1] },
      ]}
    >
      <LoggerInnerNav gridArea="header" >
        <CompassButton onClick={changeToCompass}/>
        <StepName> {title} </StepName>
      </LoggerInnerNav>
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
