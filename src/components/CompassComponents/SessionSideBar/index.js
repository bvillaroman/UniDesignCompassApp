import React,{useState} from "react";
import {Clock, Button} from "grommet"
import { SessionView } from "../../../styles/CompassPage"
import {userCompassPage} from "../../../context/CompassPage/context"

const SessionSideBar = (props) => {
  const { currentSession, currentStep,changeStep } = userCompassPage();
  const [clock,setClock] = useState({time: "T00:00:00",start: true})

  const changeTime = (nextTime) => {
    setClock({...clock, time: nextTime })
    changeStep({...currentStep, duration: nextTime})
  }

  const pause = (e) => {
    console.log(clock.time)
    setClock({...clock, start: !clock.start})
    changeStep({...currentStep, duration: clock.time})
  }

  return (
    <SessionView gridArea="session">
      {currentSession.title}
      <Clock type="digital" />
      {
        currentStep.title ? (
          <>
            {currentStep.title}
            <Clock type="digital" run={clock.start} time={clock.time} onChange={changeTime}/>
            <Button label="Pause" onClick={pause}/>
            <br/>
            <br/>  
            {currentStep.description}
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