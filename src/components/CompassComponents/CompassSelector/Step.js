import React from "react";
import { StepContainer } from "../../../styles/CompassPage"
import { userCompassPage } from "../../../context/CompassPage/context"

const Step = ({activeStep = {}}) => {
  const {createInteraction} = userCompassPage()

  const {
    description_of_step,
    id,
    name_of_step,
  } = activeStep; 

  const goToLog = (e) => {
    createInteraction({step: activeStep, duration: 0})
  }
  
  return (
    <StepContainer onClick={goToLog}>
      {name_of_step}
      {/* {duration} */}
    </StepContainer> 
)};
export default Step;
