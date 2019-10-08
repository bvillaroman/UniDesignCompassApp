import React, {useState, useEffect, useContext}  from "react";
import { CSGrid } from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import {navigate} from "gatsby"

import SessionBar from "./SessionBar"
import CompassWheel from "./CompassWheel"

const CompassSelector = ({showAttachment}) => {
  const {session,compass,updateInteractions, interactions, updateTime} = useContext(CompassContext)
  const selectStep = async (interaction) => {
    const stepFromCurrentInteraction = interactions.find((item) => {
      return interaction.id === item.id
    })

    if (stepFromCurrentInteraction === undefined) {
      await updateInteractions([interaction, ...interactions])
    }
    
    navigate(`/Compass?c=${compass.id}&s=${session.id}&i=${interaction.id}`)
    
  }

  // getting the current session and distribute: session,steps, all interactions, all attachments
  useEffect(() => {
    if (interactions.length) {
      let time = 0;
      interactions.forEach(element => {
        time += element.duration
      });
      updateTime(time)
    }
  },[interactions])

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
      <CompassWheel selectStep={selectStep} />
      <SessionBar 
        showAttachment={showAttachment} 
        setInteraction={selectStep}
      />
    </CSGrid>
)};
export default CompassSelector;
