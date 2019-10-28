import React, { useContext } from "react";
import { CompassContext } from "../../../context/CompassPage/context"
import { StepContainer, StepText } from "../../../styles/CompassPage"
import { startInteraction } from "../../../utils/mutations"
import translateTime from '../../../utils/translateTime'

const Step = ({activeStep = {}, rotateAngle, selectStep,circleLength }) => {
  const {session} = useContext(CompassContext)

  const {
    id,
    name_of_step,
    color,
    duration
  } = activeStep; 

  const goToLog = (e) => {
    startInteraction(session.id,id)
      .then((interaction) => {
        selectStep(interaction.data.createInteraction)        
      })
  }
  
  return (
    <StepContainer 
      rotateAngle={rotateAngle} 
      onClick={goToLog} 
      color={color}
      circleLength={circleLength}
    >
      <StepText>
        <p>{name_of_step}</p> 
        <p>{translateTime(duration)}</p>
      </StepText>
      
    </StepContainer> 
)};
export default Step;
