import styled from "styled-components"
import { 
  Button, 
  TextArea, 
  Box, 
  Text, 
  FormField, 
  TextInput,
  Form,
  Grid,
} from "grommet"
import { Compass, FormPrevious, Attachment, PauseFill,PlayFill } from 'grommet-icons';
import React from "react";

export const CompassButton = ({onClick}) =>(
  <CompassButtons     
    onClick={e => onClick()} 
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

// Logger
export const CompassButtons = styled(Button)`
  border: 0.15rem solid transparent;
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
export const StepName = styled(Text)`
  font-size: 2rem;
`;
export const LoggerGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  
`;
export const LoggerInnerNav = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
export const LoggerTA = styled(Box)`
  padding: 0 1.6rem 1rem 1.6rem;
`;

// Sessions Creator

export const SCCard = styled(Box)`
  color: white;
  background-color: transparent;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;
export const SCButton = styled(Button)`
  width: 50%;
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
  margin: 0 auto;

`;
export const SCButtonContainer = styled(Box)`
  width: 100%;
  margin: 1rem auto;
`;
export const SCSwitchLabel = styled(Text)`
  color: #2A3664;
`;
export const SCFormTitle = styled(Text)`
  margin: 0 auto;
  padding: 2rem 0 3rem 0;
  font-size: 3rem;
  font-weight: 900;
  color: #5361FE;
`;
export const SCFormContainer = styled(Form)`
  width: 80%;
  margin: 0 auto;
`;
export const InputContainer = styled(FormField)`
  color: #5361FE;
  background-color: transparent;
  border: 1px solid rgba(0,0,0,0.33);
  border-radius: 0.5rem;
  div { border-bottom: none; }
`;
export const TitleForm = styled(TextInput)`
  font-weight: 550;
  font-size: 2rem;
  color: black;
  border: none;
`;
export const DescriptionForm = styled(TextArea)`
  font-weight: 550;
  font-size: 1.2rem;
  height: 40vh;
  color: black;
  resize: none;
  border: none;
`;
// Compass Selector

export const CSGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const CSMain = styled(Box)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const StepRow = styled.div`
  margin: 4rem;
  text-align:center;
`
export const StepContainer = styled(CompassButtons)`
  display: inline-block;
  margin: 0 3rem;
  padding: 2rem;
  border: 0.15rem solid #5567FD;
`

// Compass SessionBar

export const SessionHeader = styled(Box)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`
export const StepClock = styled(Box)`
  margin: 1rem auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
`
export const ControlButton = styled(Button)`

`
export const TimerButton = ({onClick,start}) =>(
  <ControlButton     
    onClick={e => onClick()} 
    icon={ start ? <PauseFill color='#5567FD' /> : <PlayFill color="#5567FD"/> }
  />
)
export const SessionTitle = styled(Box)`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`
export const SessionDescription = styled(Box)`
  padding: 1rem;
  font-size: 1rem;
  text-align: left;
`

// Compass Page Containers

export const ComponentContainer = styled(Box)`
  margin: 0 auto;
`
export const MainView = styled(Box)`
  justify-content: center;
  width: 100%;
  height: 100%;
  button div {
    border-color: transparent;
  }
`
export const MainContent = styled(Tab)`
  justify-content: center;
  width: 100%;
  height: 100%;
  button div {
    border-color: transparent;
  }
`
export const SessionView = styled(Grid)`
  text-align: center;
  background: white;
  width: 100%;
`