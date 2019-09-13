import React, { useContext } from "react";
import { CSInteraction } from "../../../styles/CompassPage"
import { GlobalContext } from "../../../context/context"

const Interaction = ({interaction = {}}) => {
  const {selectInteraction} = useContext(GlobalContext);

  const {
    id,
    step,
  } = interaction; 

  const goToLog = (e) => {
    selectInteraction(id);
  }
  
  return (
    <CSInteraction onClick={goToLog}>
      {step.name_of_step}  
    </CSInteraction>
)};
export default Interaction;
