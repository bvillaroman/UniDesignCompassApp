import styled from "styled-components"
import {
  Button,
  TextArea,
  Box,
  Text,
  FormField,
  TextInput,
  Form,
  Tab,
  Accordion,
  AccordionPanel,
  Menu
} from "grommet"
import { More, PauseFill, PlayFill } from 'grommet-icons';
import React from "react";
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
export const CompassViewerContainer = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 767px){
    flex-direction: column;
  }    
`

// Step Description
export const StepDetailsContainer = styled(Accordion)`
  width: 100%;
  height: auto;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
  color: white;
`;
export const StepDetailsTitle = styled(AccordionPanel)`
  
  margin: 0.5rem auto;
  width: 100%;
  color: white;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    width: auto;
    padding: 0.5rem 1rem;
    h4 { 
      font-size: 1.0rem;
      color: white;
      margin: 0;
    };
    svg { 
      stroke: white;
      width: 1rem;
      height: 1rem;
      justify-self: end;
      margin: 0;
    };
  };
  background-color: ${props => props.color ? props.color : "white"};
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 #d2d4d6;
`;
export const StepDetailsDescription = styled(Box)`
  width: auto;
  height: auto;
  font-size: 1.0rem;
  padding: 0 1.5rem;
  color: black;
`;

export const LoggerHeader = styled(Box)`
  width: 100%;
  margin: 0 auto;
  min-height: 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const LoggerTitle = styled.h4`
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  width: 50%;
  color: ${props => props.color ? props.color : '#5567FD'};
  line-height: 1.3rem;
  text-align: left;
  font-weight: 600;
`
// Compass Viewer Containers
export const MainContainer = styled(Box)`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px){
    width: 100%
  }  
`;

export const CompassNavigationBar = styled(Box)`
  width: 50%;
  height: 100%
  display: flex;
  flex-direction: column;
  // background: white;

  @media (max-width: 767px){
    width: 100%;
    flex-grow: 1;
    flex-shrink: 0;
  } 
`;

// Project Details 
export const ProjectDetailsContainer = styled(Box)`
  width: 90%;
  min-height: 15rem;

  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  svg {
    width: 50%;
    height: 6rem;
    margin: auto;
    stroke: #5567FD;
  }
  box-shadow: 0 1px 3px 0 #d2d4d6;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;

export const ProjectDetailsTitle = styled(Box)`
  width: 100%;
  min-height: 3rem;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: space-between;
  span {
    text-align: left;
    padding-left: 0.5rem;
    margin: 0 auto;
    width: 100%;
    height: auto;
    font-size: 1.5rem;
    color: ${props => props.color ? props.color : "black"};
    font-weight: 600;
  }
`;
export const EditProjectButton = styled(Button)`
  svg {
    transition: all 0.3s;
    fill: white; 
    stroke: white;
    height: 1.2rem;
    width: 1.2rem;
  }
  background: #5567FD; 
  color: white;
  padding: 0.3rem 0.7rem;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
`;
export const ProjectDetailsDescription = styled(Box)`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 1rem;
  font-size: 1.0rem;
  color: black;
`;
export const ProjectTitleText = styled(Box)`
  font-weight: 550;
  font-size: 1rem;
  color: black;
  margin: 0;  
  margin-bottom: 12px;
  box-sizing: border-box;
  border: none;
  padding: 11px;
  padding-top: 0.9rem;
  background: transparent;
  font-weight: 600;
`
export const ProjectDescriptionText = styled(Box)`
  font-size: 1rem;
  padding: 11px;
  padding-top: 10px;
  color: black;
  max-height: 10rem;
  overflow: auto;
`
export const ProjectEditButtons = styled(Box)`
  width: 100%;
  flex-direction: row;  
  justify-content: space-between;
`
export const CompassDetailsDescription = styled(Box)`
  width: 100%;
  height: auto;
  overflow: auto;
  font-size: 1.0rem;
  padding: 0.5rem 1rem;
  color: black;
`;

export const CompassStepAccordion = styled(Accordion)`
  height: 100%;
`
export const CompassStepPanel = styled(AccordionPanel)`
  font-size: 0.5rem;
  padding: 0.5rem;
  background-color: ${props => props.color ? props.color : 'black'};
  color: white;
  border-radius: 1rem;
  width: 100%;
  margin: 0.1rem auto;
  word-break: break-all;
  height: 3rem;
  h4 {
    font-size: 0.8rem;
    color: white;
    margin: 0;
  }
  svg {
    fill: white; 
    stroke: white;
    height: 1rem;
    width: 1rem;
  }
`
export const CompassStepDescription = styled(Box)`
  font-size: 0.7rem;
  line-height: 0.8rem;
  height: auto;
  padding: 0.5rem;
  background-color: ${props => props.color ? props.color : 'white'};
  color: black;
  width: 90%;

  word-break: break-word;
`

// Session Creator 

export const SCContainer = styled(Box)`
  margin: 0 auto;
  padding-top: 1rem;
  width: 90%;
  height: 100%;
  background: transparent;
`
export const SCHeader = styled(Box)`
  text-align: left;
  margin: 1rem auto;
  width: 100%;
  height: auto;
  color: black;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 2.5rem;
    line-height: 2.6rem;
    margin: 0;
    padding: 0;
  }
`
export const SCAddSession = styled(Button)`
  svg {
    transition: all 0.3s;
    fill: white; 
    stroke: white;
    height: 1.2rem;
    width: 1.2rem;
  }
  background: #5567FD; 
  color: white;
  padding: 0.3rem 0.5rem;
  margin: 0;
  font-size: 0.9rem;
`

export const SCBody = styled(Box)`
  width: 98%;
  height: 100%;
  overflow: auto;
  margin: 0 auto;
  background: transparent;
`
export const SessionRow = styled(Box)`
  padding: 1rem 0;
  width: 100%;
  min-height: 4rem;
  background-color: ${props => props.active ? "white" : "none"};
  flex-direction: row;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: white;
    box-shadow: 0 1px 3px 0 #d2d4d6;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
    border-radius: 0.5rem;
  }
`;
export const SessionRowHeader = styled(Box)`
  padding: 0;
  width: 100%;
  min-height: 2rem;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.1rem solid rgba(0,0,0,0.1);
  margin: 0.5rem auto;
  div {
    font-size: 1rem;
    margin: 0;
    color: rgba(0,0,0,0.6);
  }
`;
export const SessionRowTitle = styled(Box)`
  color: black;
  font-weight: 450;
  font-size: 0.9rem;
  width: 60%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 1rem;
  flex-direction: row;
  justify-content: space-between;
`
export const SessionRowDate = styled(Box)`
  padding: 0 1rem;
  font-size: 0.8rem;
  color: rgba(0,0,0,0.8);
  width: 30%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
export const CompassRowMore = styled(Box)`
  padding: 0 1rem;
  width: 10%;
`
const SessionRowMoreStyle = styled(Menu)`
  svg {
    transform: rotate(90deg);
    height: 1rem;
    width: 1rem;
    // padding: 0.5rem;
    :hover {
      stroke: white;
    }
  }
  :hover {
    background-color: #5567FD;
    stroke: white;
  }
  div {
    padding: 0 0.5rem;
  }
  width: 2rem;
  height: 2rem;
  padding: 0;
  border-radius: 100%;
  text-align: center;
`
export const CompassRowMoreButton = ({ onDelete /*, onEdit */ }) => (
  <SessionRowMoreStyle
    icon={<More />}
    round
    items={[
      // { label: 'edit', onClick: () => onEdit() },
      { label: 'delete', onClick: () => onDelete() },
    ]}
  />
);

export const SCForm = styled(Form)`
`

export const SCTextArea = styled(TextArea)`
  font-size: 1rem;
  resize: none;
  height: 100%;
  min-height: 6rem;
  color: black;
  border: 0.01rem solid grey;
`;
export const SCInputContainer = styled(FormField)`
  border-bottom: none;
  color: black;
  background-color: #F0F0F0;
`;
export const SCInputField = styled(TextInput)`
  font-weight: 550;
  font-size: 1rem;
  padding-top: 1rem;
  color: black;
`;
export const SCButtonContainer = styled(Box)`
  width: 100%;
  margin: 1rem auto;
`;
export const SCButton = styled(Button)`
  width: 12rem;
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


// Sessions Creator

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




// Compass SessionBar
export const SessionDescription = styled(Box)`
  width: 70%;
  height: 100%;
  font-size: 0.8rem;
  text-align: left;
  margin: 0 auto;
`
export const SessionClock = styled(Box)`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
`
export const StepAccordion = styled.div`
  text-align: center;
  h4 {
    font-size: 1.2rem;
    padding: 0;
    color: ${props => props.color ? props.color : '#5567FD'}
  }
  svg {
    color: black;
    stroke: black;
  }
  font-weight: 600;
  line-height: 1.2rem;
  word-break: break-word;
  padding: 0.5rem;
  height: 3rem;
  margin: 0.5rem auto;
`
export const StepDescription = styled(Box)`
  width: 75%;
  height: 100%;
  font-size: 0.8rem;
  text-align: left;
  margin: 0 auto;
`
export const StepClock = styled(Box)`
  margin: 0.5rem 0;
  width: auto;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
`
export const ControlButton = styled(Button)`
  svg {
    width: 1.0rem;
    height: 1.0rem;
  }
  padding-right: 0;
`
export const TimerButton = ({ onClick, start, color }) => (
  <ControlButton
    onClick={e => onClick()}
    icon={start ? <PauseFill color={color ? color : '#5567FD'} /> : <PlayFill color={color ? color : '#5567FD'} />}
  />
)
