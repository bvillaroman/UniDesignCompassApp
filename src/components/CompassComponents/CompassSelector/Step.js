import React from "react";
import { StepContainer } from "../../../styles/CompassPage"
import { userCompassPage } from "../../../context/CompassPage/context"

const Step = ({activeStep = {}}) => {
  const {changeView,changeStep} = userCompassPage()

  const {
    title = '',
    duration = 'T00:00:00' 
  } = activeStep; 

  const goToLog = (e) => {
    changeStep(activeStep)
    changeView(1);
  }
  // console.log(activeStep)

  return (
    <StepContainer onClick={goToLog}>
      {title}
      {/* {duration} */}
    </StepContainer> 
)};
export default Step;
