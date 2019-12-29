import React, { useEffect, useContext, useState } from "react";
import { CompassContext } from "../../../context/CompassPage/context"
import { StepContainer, StepText } from "../../../styles/CompassPage"
import { startInteraction } from "../../../utils/mutations"
import translateTime from '../../../utils/translateTime'
import { GlobalContext } from "../../../context/context";

export const Step = ({ activeStep = {}, rotateAngle, circleLength }) => {
  const { session, addInteraction, interaction, compass } = useContext(CompassContext)
  const { user } = useContext(GlobalContext)

  const [disableStep, setDisableStep] = useState(false);

  useEffect(() => {
    // console.log(user.email)
    // console.log(compass.scribe.email)
    if (user.email === compass.scribe.email) {
      setDisableStep(true)
    }
  }, [compass])

  const {
    id,
    name_of_step,
    color,
    duration
  } = activeStep;

  const goToLog = (e) => {
    // console.log(interaction.hasOwnProperty("id"))
    if (disableStep) {
      if (!interaction.hasOwnProperty("id") || id !== interaction.step.id) {
        startInteraction(session.id, id)
          .then((interaction) => {
            addInteraction(interaction.data.createInteraction)
          })
      }
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
  )
};
export default Step;
