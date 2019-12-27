import React, { useContext } from "react";
import { CompassContext } from "../../context/CompassPage/context"
import { StepContainer, StepText } from "../../styles/CompassPage"
import { startInteraction } from "../../utils/mutations"
import translateTime from '../../utils/translateTime'

const Step = ({activeStep = {}, rotateAngle, circleLength }) => {
  const {session,updateInteraction, interaction} = useContext(CompassContext)

  const {
    id,
    name_of_step,
    color,
    duration
  } = activeStep; 

  const goToLog = (e) => {
    // console.log(interaction.hasOwnProperty("id"))
    if(!interaction.hasOwnProperty("id") || id !== interaction.step.id) {
      startInteraction(session.id,id)
        .then((interaction) => {
          updateInteraction(interaction.data.createInteraction)        
        })
    }
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
