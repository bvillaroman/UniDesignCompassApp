import React, {useEffect, useContext, useState}  from "react";
import { CSContainer, CSGrid } from "../../styles/CompassPage"
import { CompassContext } from "../../context/CompassPage/context"

import SessionBar from "./SessionBar"
import CompassSection from "./CompassSection"
import InteractionFeed from "./Interactions"

const CompassSelector = ({showAttachment}) => {
  const {interactions, updateTime} = useContext(CompassContext)
  const [show, setShow] = useState(true)

  // getting the current session and distribute: session,steps, all interactions, all attachments
  useEffect(() => {
    if (interactions.length > 0) {
      let time = 0;
      interactions.forEach(element => {
        time += element.duration
      });
      updateTime(time)
    }
    
  // eslint-disable-next-line
  },[interactions])

  return (
    <CSContainer>
      <CSGrid>
        <CompassSection/>
        <SessionBar showAttachment={showAttachment} />
      </CSGrid>
      <InteractionFeed/>
    </CSContainer>
)};
export default CompassSelector;
