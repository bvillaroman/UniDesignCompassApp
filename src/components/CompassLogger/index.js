import React from "react";
import styled from "styled-components"
import SessionBar from "./SessionBar"
import CompassSection from "./CompassSection"
import InteractionFeed from "./Interactions"

const CompassSelector = (props) => {

  return (
    <CSContainer>
      <CSGrid>
        <CompassSection/>
        <SessionBar />
      </CSGrid>
      <InteractionFeed/>
    </CSContainer>
)};
export default CompassSelector;

export const CSGrid = styled.div`
  width: 100%;
  height: 75%;
  min-height: 37rem;
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
  display: flex;
  flex-direction: column;
`;