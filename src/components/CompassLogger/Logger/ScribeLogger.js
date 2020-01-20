import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components"
import { Button, TextArea } from "grommet"
import { PauseFill, PlayFill } from 'grommet-icons';

import translateTime from '../../../utils/translateTime'
import * as Mutation from '../../../utils/mutations'
import { CompassContext } from "../../../context/CompassPage/context"
import { LoggerHeaderText, LoggerHeaderContainer } from "../style"
import { Loader } from "../../../styles/layout"

import { GlobalContext } from "../../../context/context"

export const Logger = (props) => {
  const { newestInteraction, addInteraction, compass,pause, startTimer, pauseTimer } = useContext(CompassContext);
  const { user } = useContext(GlobalContext)

  const { duration, log_content, id, step} = newestInteraction


  const previousFooRef = useRef(newestInteraction);

  const scribe = compass.scribe.email === user.email

  const initialStep = {
    name_of_step: "Notes",
    color: "black"
  };

  // const [step, setStep] = useState(intialStep);
  // const [interactionTime, setInteractionTime] = useState(0);
  // const [log, setLog] = useState('');

  // place a past interaction into the logger if it is updateInteraction is called
  useEffect(() => {

    if (id) {

      if (previousFooRef.current && previousFooRef.current.id !== newestInteraction.id && previousFooRef.current.id) {
        pauseTimer()
        const oldID = previousFooRef.current.id
        const newInteraction = {
          id: oldID,
          log_content: log_content ? log_content : " ",
          duration
        }

        Mutation.updateInteraction(newInteraction)
          .then((res) => {
            previousFooRef.current = newestInteraction
            // const { log_content, step, duration } = newestInteraction
            // const parsedLog = log_content !== " " ? log_content : ""
            // setInteractionTime(duration)
            // setStep(newestInteraction.step)
            // setLog(parsedLog)
            props.setLoading(false)
            startTimer();
          })
      } else if (compass.scribe.email === user.email) {
        // const { log_content, step, duration } = newestInteraction
        // const parsedLog = log_content !== " " ? log_content : ""
        // setInteractionTime(duration)
        // setStep(newestInteraction.step)
        // setLog(parsedLog)
        props.setLoading(false)
        startTimer();
      }  else {
        // const { log_content, step } = newestInteraction
        // const parsedLog = log_content !== " " ? log_content : ""
        // setInteractionTime(duration)
        // setStep(newestInteraction.step)
        // setLog(parsedLog)
        props.setLoading(false)
        pauseTimer();
      }
    }

    // eslint-disable-next-line
  }, [newestInteraction.id])

  // handle interaction time
  useEffect(() => {
    let interval = null;

    if (id) {
      if (!pause) {
        interval = setInterval(() => {
          addInteraction({ duration: duration + 1 })
          // setInteractionTime(interactionTime + 1)
        }, 1000)

      } else if (pause) {
        clearInterval(interval)
      }
      return () => clearInterval(interval);
    }

    // eslint-disable-next-line
  }, [ id, duration , pause])

  // pause the timer
  const onPause = (e) => {
    const newInteraction = {
      id: newestInteraction.id,
      log_content: newestInteraction.log_content ? newestInteraction.log_content : " ",
      duration: newestInteraction.duration,
    }
    if (!pause) {
      Mutation.updateInteraction(newInteraction)
      return pauseTimer()
    } else {
      startTimer()
    }
    
  }

  const color = step ? step.color: initialStep.color
  const name = step? step.name_of_step : initialStep.name_of_step

  return (
    <>
      <LoggerHeaderContainer height="69px">
        <LoggerHeaderText><LoggerTitle color={color}>{name}</LoggerTitle> </LoggerHeaderText>
        <StepClock>
          {
            props.loading ? <Loader /> : ( /* show the timer */
              <>
                {translateTime(duration)}
                {scribe ? <TimerButton color={color} onClick={onPause} start={!pause} /> : ""}
              </>
            )
          }
        </StepClock>
      </LoggerHeaderContainer>
      <LoggerInput
        placeholder={name !== "Notes" ? "Enter Log" : "Select a log or create a new log."}
        value={log_content}
        onChange={e => addInteraction({ log_content: e.target.value})}
        color={color}
        disabled={pause}
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
