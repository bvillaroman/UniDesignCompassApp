import React, { useContext } from "react";
import { CSInteraction, CSInteractionContainer } from "../../../styles/CompassPage"
import { GlobalContext } from "../../../context/context"
import { LinkPrevious } from "grommet-icons"
const Interaction = ({interaction = {}, isLastStep}) => {
  const {selectInteraction} = useContext(GlobalContext);

  const {
    id,
    step,
  } = interaction; 

  const goToLog = (e) => {
    selectInteraction(id);
  }
  
  return (
    <CSInteractionContainer>
      <CSInteraction label={step.name_of_step} onClick={goToLog} color={step.color}/>
      {!isLastStep && <LinkPrevious color="#5567FD" />}
    </CSInteractionContainer>
    
  )
};
export default Interaction;
