import React, {useState, useEffect}  from "react";
import { CSGrid } from "../../../styles/CompassPage"
import { getSession } from "../../../utils/queries"
import {navigate} from "gatsby"

import SessionBar from "./SessionBar"
import CompassWheel from "./CompassWheel"

const CompassSelector = ({showAttachment, session, compass, interaction }) => {
  const [activeStep, setActiveStep] = useState({interaction})
  const [steps,setSteps] = useState([{},{},{},{},{},{},{}])
  const [currentSession,setCurrrentSession] = useState({})
  const [currentInteractions,setCurrentInteractions] = useState([])
  const [totalTime, setTotalTime] = useState(0)

  const selectStep = (interaction) => {
    const stepFromCurrentInteraction = currentInteractions.find((item) => {
      return interaction.id === item.id
    })

    if (stepFromCurrentInteraction === undefined) {
      setCurrentInteractions([interaction, ...currentInteractions])
    }
    setActiveStep(interaction)
    navigate(`/Compass?c=${compass.id}&s=${session.id}&i=${interaction.id}`)
  }

  // increase the total clock and the clock of the interaction
  const increaseClock = (interaction,newTime) => {
    currentInteractions.find((item,key) => {
      if (interaction.id === item.id) {
        let newArr = currentInteractions
        newArr[key].duration = newTime
      }
    })
    setTotalTime(totalTime + 1)
  }
  
  // getting the current session and distribute: session,steps, all interactions, all attachments
  useEffect(() => {
    if(session) {
      setCurrrentSession(session)
      setSteps(session.compass.steps.items.flat())
      const interactions = session.interactions.items.sort((a,b) => {
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
    }
  },[session])

  useEffect(() => {
    if(interaction !== {}) setActiveStep(interaction)
  },[interaction])

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
        session={session}
        totalTime={totalTime}
      />
      <SessionBar 
        session={currentSession}
        interactions={currentInteractions} 
        increaseClock={increaseClock}
        showAttachment={showAttachment} 
        interaction={activeStep}
        setInteraction={selectStep}
      />
    </CSGrid>
)};
export default CompassSelector;
