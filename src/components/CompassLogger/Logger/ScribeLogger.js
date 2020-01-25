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
  const { newestInteraction, compass, pause, startTimer, pauseTimer, newestLog, updateNewestLog, updateNewestDuration, increaseTimer, newestDuration } = useContext(CompassContext);
  const { user } = useContext(GlobalContext)

  const { id, step} = newestInteraction

  const previousFooRef = useRef(newestInteraction);

  const scribe = compass.scribe.email === user.email

  const initialStep = {
    name_of_step: "Notes",
    color: "black"
  };

  // place a past interaction into the logger if it is updateInteraction is called
  useEffect(() => {

    if (id) {
      // leaving interaction to go to an old one
      if (previousFooRef.current && previousFooRef.current.id !== newestInteraction.id && previousFooRef.current.id) {
        pauseTimer()
        const oldID = previousFooRef.current.id
        const newInteraction = {
          id: oldID,
          log_content: newestLog ? newestLog : " ",
          duration: newestDuration ? newestDuration : 0
        }

        Mutation.updateInteraction(newInteraction)
          .then((res) => {
            previousFooRef.current = newestInteraction
            updateNewestLog(newestInteraction.log_content)
            updateNewestDuration(newestInteraction.duration)
            props.setLoading(false)
            startTimer();
          })
      } else if (compass.scribe.email === user.email) {
        // entering a new interaction
        updateNewestLog(newestInteraction.log_content)
        updateNewestDuration(newestInteraction.duration)
        props.setLoading(false)
        startTimer();
      } else {
        // entering a new interaction, paused
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
          increaseTimer()
        }, 1000)

      } else if (pause) {
        clearInterval(interval)
      }
      return () => {
        clearInterval(interval)
      };
    }

    // eslint-disable-next-line
  }, [ id, newestDuration , pause]) 

  // pause the timer
  const onPause = (e) => {
    const newInteraction = {
      id: newestInteraction.id,
      log_content: newestLog ? newestLog : " ",
      duration: newestInteraction.duration,
    }
    if (!pause) {
      Mutation.updateInteraction(newInteraction)
      return pauseTimer()
    } else {
      startTimer()
    }
    
  }

  const onChange = (e) => {
    updateNewestLog(e.target.value)
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
                {translateTime(newestDuration)}
                {scribe ? <TimerButton color={color} onClick={onPause} start={!pause} /> : ""}
              </>
            )
          }
        </StepClock>
      </LoggerHeaderContainer>
      <LoggerInput
        placeholder={name !== "Notes" ? "Enter Log" : "Select a log or create a new log."}
        value={newestLog}
        onChange={onChange}
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
