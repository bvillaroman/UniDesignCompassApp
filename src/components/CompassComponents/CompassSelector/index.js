import React, {useEffect, useContext}  from "react";
import { CSGrid } from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import {navigate} from "gatsby"
// import Loadable from "@loadable/component"
// import InteractionFeed from "./InteractionFeed"

import SessionBar from "./SessionBar"
import CompassSection from "./CompassSection"


const CompassSelector = ({showAttachment}) => {
  const {interactions, updateTime} = useContext(CompassContext)

  // getting the current session and distribute: session,steps, all interactions, all attachments
  useEffect(() => {
    if (interactions.length) {
      let time = 0;
      interactions.forEach(element => {
        time += element.duration
      });
      updateTime(time)
    }
    
  // eslint-disable-next-line
  },[interactions])

  return (
    <CSGrid>
      <CompassSection/>
      <SessionBar showAttachment={showAttachment} />
    </CSGrid>
)};
export default CompassSelector;
