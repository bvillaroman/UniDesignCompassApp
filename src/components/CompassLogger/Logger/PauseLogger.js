import React from "react";
import styled from "styled-components"

import {dateTimeFormatter} from "../../../utils/translateTime"

export const EditingLogger = (props) => {

  return (
    <LoggerContainer>
      <div>
        Paused {props.interaction.createdAt && (
          <span>
            on {`${dateTimeFormatter(props.interaction.createdAt)}`}
          </span>
        )}
      </div>      
    </LoggerContainer>
  );
}

export default EditingLogger;

const LoggerContainer = styled.div`
  background: white;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  transition: box-shadow 150ms ease;
  width: 100%;
  min-height: 13rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
