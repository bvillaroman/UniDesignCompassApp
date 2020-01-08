import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components"
import { Button, TextArea } from "grommet"
import { PauseFill, PlayFill } from 'grommet-icons';

import translateTime from '../../../utils/translateTime'
import * as Mutation from '../../../utils/mutations'
import { CompassContext } from "../../../context/CompassPage/context"
import { LoggerHeaderText, LoggerHeaderContainer } from "../style"
import { Loader } from "../../../styles/layout"

export const Logger = (props) => {
  const { newestInteraction, addInteraction } = useContext(CompassContext);

  const previousFooRef = useRef(newestInteraction);

  const intialStep = {
    name_of_step: "Notes",
    color: "black",
  };

  const [step, setStep] = useState(intialStep);
  const [interactionTime, setInteractionTime] = useState(0);
  const [log, setLog] = useState('');
  const [start, setStart] = useState(false);

  // place a past interaction into the logger if it is updateInteraction is called
  useEffect(() => {

    if (newestInteraction.id) {
      
      if(previousFooRef.current && previousFooRef.current.id !== newestInteraction.id && previousFooRef.current.id ){
        setStart(false)
        const id = previousFooRef.current.id
        const newInteraction = {
          id,
          log_content: log ? log : " ",
          duration: interactionTime,
        }      
        
        Mutation.updateInteraction(newInteraction)
          .then((res) => {
            previousFooRef.current = newestInteraction
            const { log_content, step, duration } = newestInteraction
            const parsedLog = log_content !== " " ? log_content : ""  
            setInteractionTime(duration)
            setStep(step)
            setLog(parsedLog)      
            props.setLoading(false)     
            setStart(true);
          })
      }
       else {
        const { log_content, step, duration } = newestInteraction
        const parsedLog = log_content !== " " ? log_content : ""  
        setInteractionTime(duration)
        setStep(step)
        setLog(parsedLog)      
        props.setLoading(false)     
        setStart(true);
      }    
    }

    // eslint-disable-next-line
  }, [newestInteraction.id])
 
  // handle interaction time
  useEffect(() => {
    let interval = null;

    if (newestInteraction.hasOwnProperty("id")) {
      if (start) {
        interval = setInterval(() => {
          addInteraction({ duration: interactionTime + 1 })
          setInteractionTime(interactionTime + 1)
        }, 1000)

      } else if (!start) {
        clearInterval(interval)
      }
      return () => clearInterval(interval);
    }

    // eslint-disable-next-line
  }, [start, interactionTime, newestInteraction])

  // pause the timer
  const pause = (e) => {
    const newInteraction = {
      id: newestInteraction.id,
      log_content: log ? log : " ",
      duration: interactionTime,
    }
    if (start) {
      Mutation.updateInteraction(newInteraction)
    }

    return setStart(!start)
  }

  return (
    <>
      <LoggerHeaderContainer height="69px">
        <LoggerHeaderText><LoggerTitle color={step.color}>{step.name_of_step}</LoggerTitle> </LoggerHeaderText>
        <StepClock>        
          {
            props.loading ? <Loader/> : ( /* show the timer */
              <>
                {translateTime(interactionTime)}
                <TimerButton color={step.color} onClick={pause} start={start} />
              </>
            )
          }
        </StepClock>
      </LoggerHeaderContainer>
      <LoggerInput
        placeholder={step.name_of_step !== "Notes" ? "Enter Log" : "Select a log or create a new log."}
        value={log}
        onChange={event => setLog(event.target.value)}
        color={step.color}
        disabled={!start}
      />
    </>
  );
}

export default Logger;

const LoggerTitle = styled.span`
  align-self: center;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  margin-left: 0.2rem;
  margin-right: 1rem;
  width: 50%;
  color: ${props => props.color ? props.color : '#5567FD'};
  line-height: 1.3rem;
  text-align: left;
  font-weight: 600;
`
const LoggerInput = styled(TextArea)`
  margin-top: 0.5rem;
  border-color: black;
  resize: none;
  min-height: 7rem;
  font-size: 0.8rem;
  font-weight: 400;
  
`;
const StepClock = styled.div`
  height: 4rem;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 500;
`
const ControlButton = styled(Button)`
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  padding-right: 0;
  padding-left: 0.5rem;
`

export const TimerButton = ({ onClick, start, color }) => (
  <ControlButton
    onClick={e => onClick()}
    icon={start ? <PauseFill color={color ? color : '#5567FD'} /> : <PlayFill color={color ? color : '#5567FD'} />}
  />
)
