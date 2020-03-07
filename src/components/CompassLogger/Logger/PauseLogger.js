import React from "react";
import styled from "styled-components"

import { LoggerHeaderText } from "../style"

export const EditingLogger = (props) => {

  return (
    <LoggerContainer>
      <LoggerHeaderText>
        Paused
      </LoggerHeaderText>      
    </LoggerContainer>
  );
}

export default EditingLogger;

const LoggerContainer = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  background: white;
  padding: 1rem;
  padding-top: 0;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  transition: box-shadow 150ms ease;
`
