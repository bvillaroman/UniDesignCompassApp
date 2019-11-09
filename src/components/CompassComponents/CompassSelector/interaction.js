import React, {useContext} from "react";
import { CSInteraction, CSInteractionContainer, CSInteractionButtonContainer } from "../../../styles/CompassPage"
import { LinkNext } from "grommet-icons"
import translateTime from "../../../utils/translateTime"
import {getInteraction} from "../../../utils/queries"
import {ReviewModalContext} from "../../../context/ReviewModal/context"

const Interaction = ({interaction = {}, isLastStep}) => {
  const { step, duration } = interaction;  
  const { updateShowModal, updateInteraction } = useContext(ReviewModalContext)

  const openReviewLog = (evt) => {
    updateShowModal(true)
    getInteraction(interaction.id)
      .then((res => {
        updateInteraction(res.data.getInteraction);
      }))
    
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
      
      {!isLastStep && <LinkNext color="#5567FD" />}
    </CSInteractionContainer>

    
  )
};
export default Interaction;
