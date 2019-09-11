import React from "react";
import { StepContainer } from "../../../styles/CompassPage"
import { userCompassPage } from "../../../context/CompassPage/context"
import { startInteraction } from "../../../utils/mutations"

const Step = ({activeStep = {}}) => {

  const {createInteraction} =  userCompassPage()

  const {
    id,
    name_of_step,
  } = activeStep; 

  const goToLog = (e) => {
    startInteraction("e680f0e4-47b6-4dbb-a98d-90a4b8389d45",id)
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
