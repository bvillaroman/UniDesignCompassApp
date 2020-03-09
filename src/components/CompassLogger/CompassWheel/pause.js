import React, { useEffect, useContext, useState } from "react";
import {navigate} from "gatsby";
import styled from "styled-components"
import { Button } from "grommet"
import { CompassContext } from "../../../context/CompassPage/context"
import { startInteraction, updateInteraction } from "../../../utils/mutations"
import { GlobalContext } from "../../../context/context";

export const PauseButton = ({ activeStep = {}, setLoading }) => {
  const { session, addInteraction, interaction, compass, newestInteraction, interactionAdded, pauseTimer, newestLog, newestDuration } = useContext(CompassContext)
  const { user } = useContext(GlobalContext)

  const [disableStep, setDisableStep] = useState(false);

  useEffect(() => {
    if (user.email === compass.scribe.email) {
      setDisableStep(true)
    }
  }, [compass, user.email])

  const {
    id,
    name_of_step,
    color,
  } = activeStep;

  const goToLog = async (e) => {
    // console.log(interaction.hasOwnProperty("id"))
    if (disableStep) {
      if (!interaction.hasOwnProperty("id") || id !== interaction.step.id || newestInteraction.step.id !== id) {
        setLoading(true)
        if(interactionAdded){
          pauseTimer()
          const newInteraction = {
            id : newestInteraction.id,
            log_content: newestLog ? newestLog : " ",
            duration: newestDuration ? newestDuration : 0
          }               
          updateInteraction(newInteraction)
            .then((res) => {
              startInteraction(session.id, id)
                .then((interaction) => {            
                  addInteraction(interaction.data.createInteraction)
                  navigate(`/Logger/?c=${compass.id}&s=${session.id}&i=${interaction.data.createInteraction.id}`)
                })
            })
        } else {
          startInteraction(session.id, id)
            .then((interaction) => {            
              addInteraction(interaction.data.createInteraction)
              navigate(`/Logger/?c=${compass.id}&s=${session.id}&i=${interaction.data.createInteraction.id}`)
            })
        }
      }
    }
  }

  return (
    <StepContainer
      onClick={goToLog}
      color={color}
      active={interactionAdded && newestInteraction.step && newestInteraction.step.id === id}
    >
      <StepText color={color}>
        <p>{name_of_step}</p>
      </StepText>
    </StepContainer>
  )
};
export default PauseButton;

export const StepContainer = styled(Button)`
  border: 0.15rem solid ${props => props.color ? props.color : '#5567FD'};
  border-radius: 50%;
  transition: all 0.3s;
  :hover {
    transition: background-color 150ms, border 150ms, background-color 0.2s;
    background-color: white;
    ${props => props.active && props.color && `border: 0.30rem solid ${props.color}`};
    ${props => props.active && `box-shadow: 0 3px 6px 0 #999999;`}
    div {
      color: ${props => props.color ? props.color : 'black'};
    }
  }
  top: 40%;
  left: 40%;
  
  background-color: ${props => props.color ? props.color : "black"};
  list-style: none;
	height: 5rem;
  width: 5rem;
  font-size: 0.7rem;
  line-height: 0.8rem;
  display: block;
	position: absolute;
  box-shadow: 0 1px 3px 0 #b3b3b3;
  -webkit-transition: all 150ms ease;
  transition: all 150ms ease;
  margin-bottom: 0.1rem;  
  @media (max-width: 767px){ 
    height: 9.5rem;
    width: 9.5rem;
    font-size: 1.2rem;
    line-height: 1.3rem;
    left: 39%;
  }  
  @media (max-width: 650px){
    height: 9rem;
    width: 9rem;
    font-size: 1.1rem;
    line-height: 1.2rem;
    left: 38%;
  }  
  @media (max-width: 550px){
    height: 8rem;
    width: 8rem;
    font-size: 1rem;
    line-height: 1.1rem;
    left: 37%;
  } 
  @media (max-width: 475px){
    height: 7rem;
    width: 7rem;
    font-size: 0.9rem;
    line-height: 1rem;
    left: 36%;
  }  
  @media (max-width: 413px){
    height: 6.5rem;
    width: 6.5rem;
    font-size: 0.8rem;
    line-height: 0.9rem;
    left: 35.5%;
  }   
  @media (max-width: 370px){
    height: 5.5rem;
    width: 5.5rem;
    font-size: 0.7rem;
    line-height: 0.8rem;    
  }   
    
`
export const StepText = styled.div`
  padding: 1rem 0.5rem;
  color: white; 
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