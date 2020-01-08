import React from "react";
import styled from "styled-components"

import Comments from "./Comment"
import Attachments from "./Attachments"

export default (props) => {
  return (
    <SessionView>
      <Attachments />
      <Comments/>
    </SessionView>
  ) 
};

// Compass SessionBar
export const SessionView = styled.div`
  text-align: center;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px){
    width: 100%;
    height: 50rem;
  }  
`