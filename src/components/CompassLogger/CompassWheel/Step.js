import React, { useEffect, useContext, useState } from "react";
import {navigate} from "gatsby";
import styled from "styled-components"
import { Button } from "grommet"
import { CompassContext } from "../../../context/CompassPage/context"
import { startInteraction } from "../../../utils/mutations"
import translateTime from '../../../utils/translateTime'
import { GlobalContext } from "../../../context/context";

export const Step = ({ activeStep = {}, rotateAngle, circleLength, setLoading }) => {
  const { session, addInteraction, interaction, compass, newestInteraction, interactionAdded } = useContext(CompassContext)
  const { user } = useContext(GlobalContext)

  const [disableStep, setDisableStep] = useState(false);

  useEffect(() => {
    // console.log(user.email)
    // console.log(compass.scribe.email)
    if (user.email === compass.scribe.email) {
      setDisableStep(true)
    }
  }, [compass, user.email])

  const {
    id,
    name_of_step,
    color,
    duration
  } = activeStep;

  const goToLog = (e) => {
    // console.log(interaction.hasOwnProperty("id"))
    if (disableStep) {
      if (!interaction.hasOwnProperty("id") || id !== interaction.step.id || newestInteraction.step.id !== id) {
        setLoading(true)
        startInteraction(session.id, id)
          .then((interaction) => {            
            addInteraction(interaction.data.createInteraction)
            navigate(`/Logger/?c=${compass.id}&s=${session.id}&i=${interaction.data.createInteraction.id}`)
          })
      }
    }
  }

  return (
    <StepContainer
      rotateAngle={rotateAngle}
      onClick={goToLog}
      color={color}
      active={interactionAdded && newestInteraction.step && newestInteraction.step.id === id}
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

export const StepContainer = styled(Button)`
  border: 0.15rem solid ${props => props.color ? props.color : '#5567FD'};
  border-radius: 50%;
  transition: all 0.3s;
  :hover {
    transition: all 0.2s;
    background-color: ${props => props.color ? props.color : '#5567FD'};
  }
  top: 40%;
  left: 40%;
  
  background-color: ${props => props.active && props.color ? props.color : 'transparent'};
  list-style: none;
	height: 5rem;
  width: 5rem;
  font-size: 0.7rem;
  line-height: 0.8rem;
  display: block;
	position: absolute;
  transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength * 0.90}rem) rotate(-${props.rotateAngle}deg)` || 'none'};
  box-shadow: 0 1px 3px 0 #b3b3b3;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
  margin-bottom: 0.1rem;  
  @media (max-width: 767px){ 
    height: 9.5rem;
    width: 9.5rem;
    font-size: 1.2rem;
    line-height: 1.3rem;
    left: 39%;
    transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength * 1.7}rem) rotate(-${props.rotateAngle}deg)` || 'none'};
  }  
  @media (max-width: 650px){
    height: 9rem;
    width: 9rem;
    font-size: 1.1rem;
    line-height: 1.2rem;
    left: 38%;
    transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength * 1.6}rem) rotate(-${props.rotateAngle}deg)` || 'none'}; 
  }  
  @media (max-width: 550px){
    height: 8rem;
    width: 8rem;
    font-size: 1rem;
    line-height: 1.1rem;
    left: 37%;
    transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength * 1.4}rem) rotate(-${props.rotateAngle}deg)` || 'none'}; 
  } 
  @media (max-width: 475px){
    height: 7rem;
    width: 7rem;
    font-size: 0.9rem;
    line-height: 1rem;
    left: 36%;
    transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength * 1.2}rem) rotate(-${props.rotateAngle}deg)` || 'none'}; 
  }  
  @media (max-width: 413px){
    height: 6.5rem;
    width: 6.5rem;
    font-size: 0.8rem;
    line-height: 0.9rem;
    left: 35.5%;
    transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength * 1.13}rem) rotate(-${props.rotateAngle}deg)` || 'none'}; 
  }   
  @media (max-width: 370px){
    height: 5.5rem;
    width: 5.5rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
    transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength * 0.95}rem) rotate(-${props.rotateAngle}deg)` || 'none'}; 
  }   
    
`
export const StepText = styled.div`
  padding: 1rem 0.5rem;
  color: black; 
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto!important;
  justify-content: center;
  p {
    margin: 0;
  }
`