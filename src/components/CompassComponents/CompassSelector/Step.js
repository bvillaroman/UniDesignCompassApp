import React from "react";
import { StepContainer } from "../../../styles/CompassPage"
import { userCompassPage } from "../../../context/CompassPage/context"

const Step = ({activeStep = {}}) => {
  const {createInteraction} = userCompassPage()

  const {
    title = '',
    description = '' 
  } = activeStep; 

  const goToLog = (e) => {
    createInteraction({step: activeStep, duration: 0})
  }
  
  return (
    <StepContainer onClick={goToLog}>
      {title}
      {/* {duration} */}
    </StepContainer> 
)};
export default Step;
