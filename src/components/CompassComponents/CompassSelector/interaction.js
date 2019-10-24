import React from "react";
import { CSInteraction, CSInteractionContainer, CSInteractionButtonContainer } from "../../../styles/CompassPage"
import { LinkPrevious } from "grommet-icons"
import translateTime from "../../../utils/translateTime"

const Interaction = ({interaction = {}, isLastStep}) => {
  const { step, duration } = interaction;  
  
  return (
    <CSInteractionContainer>
      <CSInteractionButtonContainer>
        <CSInteraction label={step.name_of_step} color={step.color}/> 
        <span>{translateTime(duration)}</span>
      </CSInteractionButtonContainer>
      
      {!isLastStep && <LinkPrevious color="#5567FD" />}
    </CSInteractionContainer>

    
  )
};
export default Interaction;
