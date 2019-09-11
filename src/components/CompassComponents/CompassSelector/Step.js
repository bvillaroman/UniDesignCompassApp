import React from "react";
import { StepContainer } from "../../../styles/CompassPage"
import { globalStore } from "../../../context/context"
import { startInteraction } from "../../../utils/mutations"

const Step = ({activeStep = {}}) => {
  const {setInteraction, session} = globalStore()

  const {
    id,
    name_of_step,
  } = activeStep; 

  const goToLog = (e) => {
    startInteraction(session,id)
      .then((interaction) => {
        setInteraction(interaction.data.createInteraction.id);
      })
  }
  
  return (
    <StepContainer onClick={goToLog}>
      {name_of_step}
      {/* {duration} */}
    </StepContainer> 
)};
export default Step;
