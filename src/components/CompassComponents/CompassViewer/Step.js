import React from "react";
import { StepContainer, StepText } from "../../../styles/CompassPage"

const Step = ({activeStep = {}, rotateAngle, selectStep,circleLength }) => {

  const { title, color } = activeStep; 
  
  return (
    <StepContainer 
      rotateAngle={rotateAngle} 
      onClick={e => selectStep(activeStep) }
      color={color}
      circleLength={circleLength}
    >
      <StepText>
        <p>{title}</p> 
      </StepText>
    </StepContainer> 
)};
export default Step;
