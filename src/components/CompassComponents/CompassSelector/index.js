import React, {useState, useEffect, useContext}  from "react";
import Step from "./Step"
import { 
  StepRow, 
  CSGrid, 
  CSMain,
  CSInteractions,
  StepClock,
  SessionView, 
  SessionTitle, 
  SessionHeader, 
  SessionDescription ,
  SessionAttachments

} from "../../../styles/CompassPage"
import { getSession } from "../../../utils/queries"
import {GlobalContext} from "../../../context/context"
import Attachment from "../LogPage/Attachment"
import Interaction from "./interaction"

const CompassSelector = ({showAttachment}) => {
  const { session } = useContext(GlobalContext);
  const [steps,setSteps] = useState([{},{},{},{},{},{},{}])
  const [currentSession,setCurrrentSession] = useState({})
  const [attachments,setAttachments] = useState([])

  // getting the current session
  useEffect(() => {
    getSession(session)
      .then((res) => {
        setCurrrentSession(res.data.getSession)
        setSteps(res.data.getSession.compass.steps.items)
        const interactionAttachments = res.data.getSession.interactions.items.map((item) => item.attachments.items).flat()
        setAttachments(interactionAttachments)
      })
  },[session])

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
          {
            steps ? steps.map((item,key) => {
              return (<Step activeStep={item} rotateAngle={key*(360/steps.length)}/>)
            }) : ''
          }
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
          </StepClock>
        </SessionHeader>
          <SessionDescription gridArea="description">
            {currentSession.description_of_session}
          </SessionDescription>
          <SessionAttachments gridArea="attachments">
            <p>Attachments</p>
            { 
              attachments && 
              attachments.map((attachment) => (
                <Attachment attachment={attachment} showAttachment={showAttachment}/> 
              ))
            }
             
          </SessionAttachments>
      </SessionView>
      <CSInteractions gridArea="interactions">
        {
          currentSession.interactions && currentSession.interactions.items.map((item) => {
            if (item.step) {
              return ( <Interaction interaction={item}/> )
            }
            return ''
  
          })
        }
      </CSInteractions>
    </CSGrid>
)};
export default CompassSelector;
