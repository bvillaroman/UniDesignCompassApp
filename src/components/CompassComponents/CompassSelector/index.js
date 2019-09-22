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
  const [totalTime, setTotalTime] = useState(0)
  // const [attachments,setAttachments] = useState([])

  const selectStep = (interaction) => {
    setActiveStep(interaction)
    // console.log([interaction, ...currentInteractions])
    if (interaction.id !== activeStep.id) setCurrentInteractions([interaction, ...currentInteractions])
  }

  const increaseClock = () => {
    setTotalTime(totalTime + 1)
  }
  
  // getting the current session and distribute: session,steps, all interactions, all attachments
  useEffect(() => {
    getSession(session)
      .then((res) => {
        setCurrrentSession(res.data.getSession)
        setSteps(res.data.getSession.compass.steps.items.flat())
        const interactions = res.data.getSession.interactions.items.sort((a,b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
        setCurrentInteractions(interactions)
        let time = 0
        if (interactions.length) {
          interactions.forEach(element => {
            time += element.duration
          });
        }
        setTotalTime(time)
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
        totalTime={totalTime}
        increaseClock={increaseClock}
        // attachments={attachments} 
        showAttachment={showAttachment} 
        interaction={activeStep}
        setInteraction={selectStep}
      />
    </CSGrid>
)};
export default CompassSelector;
