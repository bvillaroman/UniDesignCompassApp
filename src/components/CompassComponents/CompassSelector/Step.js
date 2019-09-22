import React, { useContext } from "react";
import { StepContainer, StepText } from "../../../styles/CompassPage"
import { GlobalContext } from "../../../context/context"
import { startInteraction } from "../../../utils/mutations"

const Step = ({activeStep = {}, rotateAngle, selectStep,circleLength}) => {
  const {session = ""} = useContext(GlobalContext);

  const {
    id,
    name_of_step,
    color,
    duration
  } = activeStep; 

  const goToLog = (e) => {
    startInteraction(session,id)
      .then((interaction) => {
        selectStep(interaction.data.createInteraction)        
      })
  }

  const translateTime = (secs) => {
    const sec_num = parseInt(secs, 10)
    const hours   = Math.floor(sec_num / 3600)
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60

    return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":") 
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
