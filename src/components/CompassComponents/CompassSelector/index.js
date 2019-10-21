import React, {useState, useEffect, useContext}  from "react";
import { CSGrid } from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import {navigate} from "gatsby"

import SessionBar from "./SessionBar"
import CompassWheel from "./CompassWheel"
// import Compass from "./Compass"

const CompassSelector = ({showAttachment}) => {
  const {session,compass,updateInteraction, interactions, updateTime} = useContext(CompassContext)

  const selectStep = (interaction) => {
    console.log(compass)
    updateInteraction(interaction)
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
    <CSGrid>
      <CompassWheel selectStep={selectStep} />
      {/* <Compass /> */}
      <SessionBar 
        showAttachment={showAttachment} 
        setInteraction={selectStep}
      />
    </CSGrid>
)};
export default CompassSelector;
