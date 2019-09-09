import React,{ useState, useEffect} from "react";
import { 
  LoggerGrid,
  LoggerInput, 
  LoggerTA, 
  StepName,
  LoggerInnerNav,
  CompassButton,
  SessionView,
  SessionHeader,
  SessionTitle,
  SessionDescription,
  StepClock,
  TimerButton,
  AttachmentButton
} from "../../../styles/CompassPage"
// import { Storage, API, graphqlOperation } from 'aws-amplify'
// import uuid from 'uuid/v4'
import { updateInteraction } from '../../../utils/mutations'
// import config from '../../../aws-exports'


import {userCompassPage} from "../../../context/CompassPage/context"

const Logger = () => {
  const { currentInteraction, submitInteraction, createInteraction } = userCompassPage()
  const [log, setLog] = useState('');
  const [time,setTime] = useState(currentInteraction.interaction_start_end)
  const [start,setStart] = useState(true)

  const {
    attachments,
    id,
    interaction_start_end,
    interaction_start_time,
    log_content,
    session,
    step
  } = currentInteraction
  
  useEffect(() => {
    let interval = null;
    // if (currentInteraction.interaction_start_end === 0) {
    //   setTime(0)
    // } 
    if (start) {
      interval = setInterval(() => setTime(time+1), 1000)
      // createInteraction({...currentInteraction, duration: time+1})

    } else if (!start && time !== 0) {
      clearInterval(interval)
      // createInteraction({...currentInteraction, duration: time})
    }
    return () => clearInterval(interval);
  }, [start,time])
  
  const changeToCompass = (e) => {
    submitInteraction({...currentInteraction,log }) 
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

  const pause = (e) => {
    const newInteraction = {
      id,
      log_content: log,
      interaction_start_time: time
    }
    if (start) {
      updateInteraction(newInteraction)
      .then((res) => {
        console.log(res)
      })  
    } 
    
    return setStart(!start)
  }


  return (
    <LoggerGrid
      rows={['15%', '85%']}
      columns={['80%', '20%']}
      fill
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [0, 1], end: [0, 1] },
        { name: 'session', start: [1, 0], end: [1, 1] },
      ]}
    >
      <LoggerInnerNav gridArea="header" >
        <CompassButton onClick={changeToCompass}/>
        <StepName> {step.name_of_step} </StepName>
        <AttachmentButton onClick={e=> {console.log("attachment added")}}/>
      </LoggerInnerNav>
      <LoggerTA gridArea="main" >
        <LoggerInput
          placeholder="Enter Log"
          value={log}
          onChange={event => setLog(event.target.value)}
        />
      </LoggerTA>
      <SessionView 
        rows={['20%', '20%', '60%']}
        columns={['fill']}
        fill
        areas={[
          { name: 'header', start: [0, 0], end: [0, 0] },
          { name: 'description', start: [0, 1], end: [0, 1] },
          { name: 'attachments', start: [0, 2], end: [0, 2] },
        ]}
        gridArea="session"
      >
        {
          step.name_of_step ? (
            <>
            <SessionHeader gridArea="header">
              <SessionTitle>
                {step.name_of_step}
              </SessionTitle>
              <StepClock>
                {translateTime(time)}
                <TimerButton onClick={pause} start={start}/>
                {/* <TimerButton onClick={pause} start={start}/> */}
              </StepClock>
            </SessionHeader>
              <SessionDescription gridArea="description">
                {step.description_of_step}
              </SessionDescription>
          
              <p>Attachments</p>
            </>
          ) : ''
        }
      </SessionView>
    </LoggerGrid>
  );
}
export default Logger;
