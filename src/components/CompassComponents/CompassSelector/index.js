import React  from "react";
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
import { globalStore } from "../../../context/context"


const CompassSelector = (props) => {
  const {compass} = globalStore()
  const {currentSession} = userCompassPage()
  const {steps} = compass;

  return (
    <CSGrid
      rows={['fill']}
      columns={['80%', '20%']}
      fill
      areas={[
        { name: 'main', start: [0, 0], end: [0, 0] },
        { name: 'session', start: [1, 0], end: [1, 0] },
      ]}
    >
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
            {currentSession.title}
          </SessionTitle>
          <StepClock>
            {/* {translateTime(time)}
            <TimerButton onClick={pause} start={start}/> */}
          </StepClock>
        </SessionHeader>
          <SessionDescription gridArea="description">
            {currentSession.description}
          </SessionDescription>
          <p>Attachments</p>
      </SessionView>
    </CSGrid>
    
)};
export default CompassSelector;
