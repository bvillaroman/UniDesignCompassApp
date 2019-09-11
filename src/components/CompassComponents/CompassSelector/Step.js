import React from "react";
import { StepContainer } from "../../../styles/CompassPage"
import { userCompassPage } from "../../../context/CompassPage/context"
import { startInteraction } from "../../../utils/mutations"

const Step = ({activeStep = {}}) => {

  const {createInteraction, currentSession} =  userCompassPage()

  const {
    id,
    name_of_step,
  } = activeStep; 

  const goToLog = (e) => {
    startInteraction(currentSession.id,id)
      .then((interaction) => {
        createInteraction(interaction.data.createInteraction);
      })
  }
  
  return (
    <StepContainer onClick={goToLog}>
      {name_of_step}
      {/* {duration} */}
    </StepContainer> 
)};
export default Step;
