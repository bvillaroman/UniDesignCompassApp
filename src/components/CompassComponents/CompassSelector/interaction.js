import React, {useContext} from "react";
import { CSInteraction, CSInteractionContainer, CSInteractionButtonContainer } from "../../../styles/CompassPage"
import { LinkPrevious } from "grommet-icons"
import translateTime from "../../../utils/translateTime"
import {ReviewModalContext} from "../../../context/ReviewModal/context"

const Interaction = ({interaction = {}, isLastStep}) => {
  const { step, duration } = interaction;  
  const { updateShowModal, updateInteraction } = useContext(ReviewModalContext)

  const openReviewLog = (evt) => {
    updateInteraction(interaction);
    updateShowModal(true)
  }
  
  return (
    <CSInteractionContainer>
      <CSInteractionButtonContainer>
        <CSInteraction 
          label={step.name_of_step} 
          color={step.color}
          onClick={openReviewLog}
        /> 
        <span>{translateTime(duration)}</span>
      </CSInteractionButtonContainer>
      
      {!isLastStep && <LinkPrevious color="#5567FD" />}
    </CSInteractionContainer>

    
  )
};
export default Interaction;
