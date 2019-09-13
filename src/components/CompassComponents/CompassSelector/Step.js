import React from "react";
import { StepContainer } from "../../../styles/CompassPage"
import { globalStore } from "../../../context/context"
import { startInteraction } from "../../../utils/mutations"

const Step = ({activeStep = {}, rotateAngle}) => {
  const {selectInteraction, session} = globalStore()

  const {
    id,
    name_of_step,
  } = activeStep; 

  const goToLog = (e) => {
    startInteraction(session,id)
      .then((interaction) => {
        selectInteraction(interaction.data.createInteraction.id);
      })
  }
  
  return (
    <StepContainer rotateAngle={rotateAngle} onClick={goToLog}>
      {name_of_step}
      {/* {duration} */}
    </StepContainer> 
)};
export default Step;
