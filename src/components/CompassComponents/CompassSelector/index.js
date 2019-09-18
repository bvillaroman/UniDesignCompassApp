import React, {useState, useEffect, useContext}  from "react";
import { CSGrid } from "../../../styles/CompassPage"
import { getSession } from "../../../utils/queries"
import {GlobalContext} from "../../../context/context"

import SessionBar from "./SessionBar"
import CompassWheel from "./CompassWheel"

const CompassSelector = ({showAttachment}) => {
  const { session } = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState({})
  const [steps,setSteps] = useState([{},{},{},{},{},{},{}])
  const [currentSession,setCurrrentSession] = useState({})
  const [currentInteractions,setCurrentInteractions] = useState([])
  // const [attachments,setAttachments] = useState([])

  const selectStep = (interaction) => {
    setActiveStep(interaction)
  }
  
  // getting the current session and distribute: session,steps, all interactions, all attachments
  useEffect(() => {
    getSession(session)
      .then((res) => {
        setCurrrentSession(res.data.getSession)
        setSteps(res.data.getSession.compass.steps.items.flat())
        setCurrentInteractions(res.data.getSession.interactions.items.sort((a,b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }))
        // const interactionAttachments =  res.data.getSession.interactions ? res.data.getSession.interactions.items.map((item) => item.attachments.items).flat() : []
        // setAttachments(interactionAttachments)
      })
  },[session])


  return (
    <CSGrid
      rows={['40rem', 'fill']}
      columns={['60%', '40%']}
      fill
      areas={[
        { name: 'main', start: [0, 0], end: [0, 0] },
        { name: 'session', start: [1, 0], end: [1, 1] },
      ]}
    >
      <CompassWheel 
        compassSteps={steps} 
        interactions={currentInteractions} 
        selectStep={selectStep}
      />
      <SessionBar 
        session={currentSession}
        interactions={currentInteractions} 
        // attachments={attachments} 
        showAttachment={showAttachment} 
        interaction={activeStep}
        setInteraction={selectStep}
      />
    </CSGrid>
)};
export default CompassSelector;
