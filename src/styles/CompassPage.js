import styled from "styled-components"
import { Button, TextArea, Box, Grid, Text} from "grommet"
import { Compass, FormPrevious, Attachment } from 'grommet-icons';
import React from "react";

export const CompassButton = ({onClick}) =>(
  <CompassButtons     
    onClick={onClick} 
    icon={(
      <div>
        <FormPrevious color='#5567FD' /> 
        <Compass color="#5567FD"/>
      </div>
    )}
  />
    
)
export const AttachmentButton = ({onClick}) =>(
  <CompassButtons     
    onClick={onClick} 
    icon={<Attachment color="#5567FD"/>}
  />
    
)

export const CompassButtons = styled(Button)`
  // margin-left: 1rem;
  border: 0.15rem solid white;
  border-radius: 2rem;
  transition: all 0.3s;
  padding: 0.5rem;
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
  :hover {
    transition: all 0.3s;
    border: 0.15rem solid #5567FD;
    border-radius: 2rem;
    background-color:#5567FD;
    color: white; 
    svg {
      transition: all 0.3s;
      fill: white; 
      stroke: white; 
    }
  }
`;
export const LoggerInput = styled(TextArea)`
  border-color: #5567FD;
  resize: none;
  height: 100%;
`;
export const LoggerGrid = styled(Grid)`

`;
export const StepName = styled(Text)`
  font-size: 2rem;
`;
export const LoggerNav = styled(Box)`
  justify-content: center;
`;
export const LoggerInnerNav = styled(Box)`
  verticle-align: middle;
  display: inline;
  
`;
export const LoggerTA = styled(Box)`

`;
// Compass Page Containers

export const MainView = styled(Box)`
  width: 60%;
  margin: 0 auto;
  padding-top: 1%;
  height: 90vh;
`