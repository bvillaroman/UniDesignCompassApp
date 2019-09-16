import React, {useState, useEffect, useContext}  from "react";
import { CSGrid } from "../../../styles/CompassPage"
import { getSession } from "../../../utils/queries"
import {GlobalContext} from "../../../context/context"

import InteractionFeed from "./InteractionFeed"
import SessionBar from "./SessionBar"
import CopmassWheel from "./CompassWheel"

const CompassSelector = ({showAttachment}) => {
  const { session } = useContext(GlobalContext);
  const [steps,setSteps] = useState([{},{},{},{},{},{},{}])
  const [currentSession,setCurrrentSession] = useState({})
  const [currentInteractions,setCurrentInteractions] = useState([])
  const [attachments,setAttachments] = useState([])

  // getting the current session
  useEffect(() => {
    getSession(session)
      .then((res) => {
        setCurrrentSession(res.data.getSession)
        setSteps(res.data.getSession.compass.steps.items.flat())
        setCurrentInteractions(res.data.getSession.interactions.items.sort((a,b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }))
        const interactionAttachments =  res.data.getSession.interactions ? res.data.getSession.interactions.items.map((item) => item.attachments.items).flat() : []
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
      <CopmassWheel steps={steps}/>
      <SessionBar session={currentSession} attachments={attachments} showAttachment={showAttachment}/>
      <InteractionFeed interactions={currentInteractions}/>
    </CSGrid>
)};
export default CompassSelector;
