import React, {useState, useEffect, useContext}  from "react";
import styled from "styled-components"
import { Button, TextArea } from "grommet"
import { PauseFill, PlayFill } from 'grommet-icons';

import translateTime from '../../../utils/translateTime'
import * as Mutation from '../../../utils/mutations'
import { CompassContext } from "../../../context/CompassPage/context"

export const Logger = (props) => {
  const {interaction, updateInteraction, addInteraction, interactionAdded, interactionUpdated} = useContext(CompassContext);

  const intialStep = {
    name_of_step: "Logger",
    color: "black",
  };

  const [step, setStep] = useState(intialStep);
  const [interactionTime,setInteractionTime] = useState(0);
  const [log, setLog] = useState('');
  const [start,setStart] = useState(false);
  const [edit, setEdit] = useState(false);
  const [timer, setTimer] = useState(false);

  // initialize the logger
  useEffect(() => {
    if(interaction.id){
      const {log_content, duration, step} = interaction
      const parsedLog = log_content !== " " ? log_content : ""
      setInteractionTime(duration)
      setStep(step)
      setLog(parsedLog)
    } 

  // eslint-disable-next-line
  }, [])
  
  // place a past interaction into the logger if it is updateInteraction is called
  useEffect(() => {

    if(interaction.id && interactionUpdated){
      const {log_content, duration, step} = interaction
      const parsedLog = log_content !== " " ? log_content : ""
      setInteractionTime(duration)
      setStep(step)
      setLog(parsedLog)
      setTimer(false)      
      setEdit(true)
      console.log("IN UPDATE")
    }

  // eslint-disable-next-line
  }, [updateInteraction, interactionUpdated])

  // place new interaction into the logger if it is addInteraction is called
  useEffect(() => {
    if(interaction.id && interactionAdded && !start){
      const {log_content, duration, step} = interaction
      const parsedLog = log_content !== " " ? log_content : ""
      setInteractionTime(duration)
      setStep(step)
      setLog(parsedLog)           
      setEdit(false)
      setTimer(true)
      console.log("IN ADD")
    }

  // eslint-disable-next-line
  }, [addInteraction, interactionAdded])

  // handle interaction time
  useEffect(() => {
    let interval = null;

    if (interaction.hasOwnProperty("id")){
      if (start) {
        interval = setInterval(() => {
          addInteraction({ duration: interactionTime+1})
          setInteractionTime(interactionTime+1)
        }, 1000)

      } else if (!start) {
        clearInterval(interval)
      }
      return () => clearInterval(interval);
    }
    
  // eslint-disable-next-line
  }, [start,interactionTime, interaction])
  
  // pause the timer
  const pause = (e) => {
    const newInteraction = {
      id: interaction.id,
      log_content: log ? log : " ",
      duration: interactionTime,
    }
    if (start) {
      Mutation.updateInteraction(newInteraction)
    }
    
    return setStart(!start)
  }

  return (
    <LoggerGrid>
      <LoggerHeader>
        <LoggerTitle color={step.color}>
          {step.name_of_step} 
        </LoggerTitle>
        <StepClock>
          { 
            step.hasOwnProperty("id") && edit ? (<> Edit </> ) 
            : timer && (  
              <>
                {translateTime(interactionTime)}
                <TimerButton color={step.color} onClick={pause} start={start}/>
              </>
            )
          }
          
        </StepClock>
      </LoggerHeader>
      <LoggerInput
        placeholder="Enter Log"
        value={log}
        onChange={event => setLog(event.target.value)}
        color={step.color}
        disabled={!start}
      />
    </LoggerGrid>
  );
}

export default Logger;

const LoggerGrid = styled.div`
  width: 90%;
  min-height: 4rem;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const LoggerHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LoggerTitle = styled.h4`
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  width: 50%;
  color: ${props => props.color ? props.color : '#5567FD'};
  line-height: 1.3rem;
  text-align: left;
  font-weight: 600;
`
const LoggerInput = styled(TextArea)`
  border-color: black;
  resize: none;
  min-height: 8rem;
  font-size: 0.8rem;
  font-weight: 400;
  
`;
const StepClock = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
`
const ControlButton = styled(Button)`
  svg {
    width: 1.0rem;
    height: 1.0rem;
  }
  padding-right: 0;
`

export const TimerButton = ({ onClick, start, color }) => (
  <ControlButton
    onClick={e => onClick()}
    icon={start ? <PauseFill color={color ? color : '#5567FD'} /> : <PlayFill color={color ? color : '#5567FD'} />}
  />
)