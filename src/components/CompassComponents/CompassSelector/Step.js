import React, { useContext } from "react";
import { StepContainer } from "../../../styles/CompassPage"
import { GlobalContext } from "../../../context/context"
import { startInteraction } from "../../../utils/mutations"

const Step = ({activeStep = {}, rotateAngle, selectStep,circleLength}) => {
  const {session = ""} = useContext(GlobalContext);

  const {
    id,
    name_of_step,
    color
  } = activeStep; 

  const goToLog = (e) => {
    startInteraction(session,id)
      .then((interaction) => {
        selectStep(interaction.data.createInteraction)        
      })
  }
  
  return (
    <StepContainer 
      rotateAngle={rotateAngle} 
      onClick={goToLog} 
      color={color}
      circleLength={circleLength}
    >
      {name_of_step}
      {/* {duration} */}
    </StepContainer> 
)};
export default Step;
