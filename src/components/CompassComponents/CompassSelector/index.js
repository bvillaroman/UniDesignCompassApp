import React, {useState, useEffect, useContext}  from "react";
import { CSGrid } from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import {navigate} from "gatsby"

import SessionBar from "./SessionBar"
import CompassWheel from "./CompassWheel"

const CompassSelector = ({showAttachment}) => {
  const {session,compass,interaction} = useContext(CompassContext)
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
    if(session !== {}) {
      console.log(session)
      // setCurrrentSession(session)
      // setSteps(session.compass.steps.items.flat())
      // const interactions = session.interactions.items.sort((a,b) => {
      //   return new Date(b.createdAt) - new Date(a.createdAt);
      // })
      // setCurrentInteractions(interactions)
      // let time = 0
      // if (interactions.length) {
      //   interactions.forEach(element => {
      //     time += element.duration
      //   });
      // }
      // setTotalTime(time)
    }
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
      {/* <CompassWheel 
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
        interaction={interaction}
        setInteraction={selectStep}
      /> */}
    </CSGrid>
)};
export default CompassSelector;
