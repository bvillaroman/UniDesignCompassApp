import React, { useEffect, useContext, useState } from "react";
import { CompassContext } from "../../../context/CompassPage/context"
import { StepContainer, StepText } from "../../../styles/CompassPage"
import { startInteraction } from "../../../utils/mutations"
import translateTime from '../../../utils/translateTime'
import { GlobalContext } from "../../../context/context";

export const Step = ({ activeStep = {}, rotateAngle, circleLength }) => {
  const { session, updateInteraction, interaction, compass } = useContext(CompassContext)
  const { user } = useContext(GlobalContext)

  const [disableStep, setDisableStep] = useState(false);

  console.log('U', user)
  console.log('C', compass)

  useEffect(() => {
    if (user.email === compass.scribe.email) {
      setDisableStep(!disableStep)
    }
  })

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
            updateInteraction(interaction.data.createInteraction)
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
