import React from "react";
import { StepContainer } from "../../../styles/CompassPage"
import { userCompassPage } from "../../../context/CompassPage/context"

const Step = ({activeStep = {}}) => {
  const {changeView,changeStep} = userCompassPage()

  const {
    title = '',
    // description = '',
    duration = '' 
  } = activeStep; 

  const goToLog = (e) => {
    changeStep(activeStep)
    changeView(2);
  }
  // console.log(activeStep)

  return (
    <StepContainer onClick={goToLog}>
      {title}
      {duration}
    </StepContainer> 
)};
export default Step;
