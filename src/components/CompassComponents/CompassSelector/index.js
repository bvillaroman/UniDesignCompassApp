import React, {useState, useEffect}  from "react";
import Step from "./Step"
import { 
  StepRow, 
  CSGrid, 
  CSMain,
  StepClock,
  SessionView, 
  SessionTitle, 
  SessionHeader, 
  SessionDescription 
} from "../../../styles/CompassPage"
import { getCompass, getSession } from "../../../utils/queries"
import {globalStore} from "../../../context/context"

const CompassSelector = (props) => {
  const {compass, session} = globalStore()
  const [steps,setSteps] = useState([{},{},{},{},{},{},{}])
  const [currentSession,setCurrrentSession] = useState({})
  const [interactions,setInteractions] = useState([])

  // getting the current compass
  useEffect(() => {
    getCompass(compass)
      .then((res) => {
        setSteps(res.data.getCompass.steps.items)
      })
  },[])

  // getting the current session
  useEffect(() => {
    getSession(session)
      .then((res) => {
        setCurrrentSession(res.data.getSession)
      })
  },[])


  // const getDuration = (id) => {

  // }

  // const getTotalTime = () => {

  // }

  return (
    <CSGrid
      rows={['80%', '20%']}
      columns={['80%', '20%']}
      fill
      areas={[
        { name: 'main', start: [0, 0], end: [0, 0] },
        { name: 'session', start: [1, 0], end: [1, 1] },
        { name: 'interactions', start: [0, 1], end: [0, 1] },
      ]}
    >
      {/* compass wheel */}
      <CSMain gridArea="main">
        <StepRow>
          <Step activeStep={steps[0]} />
          <Step activeStep={steps[1]} />
        </StepRow> 

        <StepRow>
          <Step activeStep={steps[2]} />
          <Step />
          <Step activeStep={steps[3]} />
        </StepRow> 

        <StepRow>
          <Step activeStep={steps[4]} />
          <Step activeStep={steps[5]} />
        </StepRow> 
      </CSMain>

      {/* session bar */}
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
        <SessionHeader gridArea="header">
          <SessionTitle>
            {currentSession.name_of_session}
          </SessionTitle>
          <StepClock>
            {/* {translateTime(time)}
            <TimerButton onClick={pause} start={start}/> */}
          </StepClock>
        </SessionHeader>
          <SessionDescription gridArea="description">
            {currentSession.description_of_session}
          </SessionDescription>
          <p>Attachments</p>
      </SessionView>
      <div gridArea="interactions">
      {
        currentSession.interactions && currentSession.interactions.items.map((session) => {
          return (<p>{session.id}</p>)
        })
      }
      </div>
    </CSGrid>
)};
export default CompassSelector;
