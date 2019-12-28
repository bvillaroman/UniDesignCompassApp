import React, {useEffect, useContext}  from "react";
import styled from "styled-components"

import { CompassContext } from "../../context/CompassPage/context"

import SessionBar from "./SessionBar"
import CompassSection from "./CompassSection"
import InteractionFeed from "./Interactions"

const CompassSelector = ({showAttachment}) => {
  const {interactions, updateTime} = useContext(CompassContext)

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

export const CSGrid = styled.div`
  width: 100%;
  height: 75%;
  min-height: 32rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 767px){
    flex-direction: column;
    min-height: 80rem;
  }
  @media (max-width: 650px){ min-height: 75rem; }  
  @media (max-width: 550px){ min-height: 70rem; } 
  @media (max-width: 475px){ min-height: 65rem; }  
  @media (max-width: 413px){ min-height: 60rem; }   
  @media (max-width: 370px){ min-height: 55rem; }     
`;
export const CSContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto; 
`;