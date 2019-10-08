import React, {useState, useEffect, useContext}  from "react";
import { CSGrid } from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import {navigate} from "gatsby"

import SessionBar from "./SessionBar"
import CompassWheel from "./CompassWheel"

const CompassSelector = ({showAttachment}) => {
  const {session,compass,interaction,updateInteractions, interactions} = useContext(CompassContext)
  const [totalTime, setTotalTime] = useState(0)

  const selectStep = (interaction) => {
    const stepFromCurrentInteraction = interactions.find((item) => {
      return interaction.id === item.id
    })

    if (stepFromCurrentInteraction === undefined) {
      updateInteractions([interaction, ...interactions])
    }
    navigate(`/Compass?c=${compass.id}&s=${session.id}&i=${interaction.id}`)
  }

  // increase the total clock and the clock of the interaction
  const increaseClock = (interaction,newTime) => {
    interactions.find((item,key) => {
      if (interaction.id === item.id) {
        let newArr = interactions
        newArr[key].duration = newTime
      }
    })
    setTotalTime(totalTime + 1)
  }
  
  // getting the current session and distribute: session,steps, all interactions, all attachments
  useEffect(() => {
    let time = 0;
    if (interactions.length) {
      interactions.forEach(element => {
        time += element.duration
      });
    }
    setTotalTime(time)
  },[session,interactions])

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
        selectStep={selectStep}
        totalTime={totalTime}
      />
      {/* <SessionBar 
        increaseClock={increaseClock}
        showAttachment={showAttachment} 
        interaction={interaction}
        setInteraction={selectStep}
      /> */}
    </CSGrid>
)};
export default CompassSelector;
