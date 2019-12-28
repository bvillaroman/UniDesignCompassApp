import React from "react";
import styled from "styled-components"

import Logger from "./Logger"
import Wheel from "./CompassWheel"

export const CompassSection = ({selectStep}) => {

  return (
    <CompassSectionContainer>
      <Wheel selectStep={selectStep} />
      <Logger />
    </CompassSectionContainer>
)};

export default CompassSection;

export const CompassSectionContainer = styled.div`
  width: 50%;
  height: auto;
  margin: 0 auto;
  overflow-y: auto;
  @media (max-width: 767px){
    overflow-y: hidden;
    width: 100%;
    min-height: 50rem;
  }
  @media (max-width: 650px){ min-height: 50rem; }  
  @media (max-width: 550px){ min-height: 45rem; } 
  @media (max-width: 475px){ min-height: 40rem; }  
  @media (max-width: 413px){ min-height: 38rem; }   
  @media (max-width: 370px){ min-height: 35rem; }    
`;
