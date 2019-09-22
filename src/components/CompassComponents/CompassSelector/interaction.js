import React from "react";
import { CSInteraction, CSInteractionContainer } from "../../../styles/CompassPage"
import { LinkPrevious } from "grommet-icons"
const Interaction = ({interaction = {}, isLastStep, goToInteraction}) => {

  const { step } = interaction; 

  const goToLog = (e) => {
    goToInteraction(interaction)
  }
  
  return (
    <CSInteractionContainer>
      <CSInteraction label={step.name_of_step} onClick={goToLog} color={step.color}/>
      {!isLastStep && <LinkPrevious color="#5567FD" />}
    </CSInteractionContainer>
    
  )
};
export default Interaction;
