import React,{useState,useEffect} from "react";
import {Button} from "grommet"
import { SessionView } from "../../../styles/CompassPage"
import {userCompassPage} from "../../../context/CompassPage/context"

const SessionSideBar = (props) => {
  const { currentSession, createInteraction, currentInteraction } = userCompassPage();
  const [time,setTime] = useState(currentInteraction.duration)
  const [start,setStart] = useState(true)

  const pause = (e) => {
    setStart(!start)
  }
  
  useEffect(() => {
    let interval = null;
    // setStart(true)
    if (currentInteraction.duration === 0) {
      setTime(0)
    } 
    if (start) {
      interval = setInterval(() => setTime(time+1), 1000)
      createInteraction({...currentInteraction, duration: time+1})

    } else if (!start && time !== 0) {
      clearInterval(interval)
      createInteraction({...currentInteraction, duration: time})
    }
    return () => clearInterval(interval);
  }, [start,time])


  return (
    <SessionView gridArea="session">
      {currentSession.title}
      {
        currentInteraction.step.title ? (
          <>
            {currentInteraction.step.title}
            {time}
            <Button label="Pause" onClick={pause}/>
            <br/>
            <br/>  
            {currentInteraction.step.description}
            <br/>
            <br/>
            <p>Attachments</p>
          </>
        ) : ''
      }
    </SessionView>
  )
}

export default SessionSideBar;