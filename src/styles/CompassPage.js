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
  Tab,
  Layer,
  Video,
  Accordion, 
  AccordionPanel
} from "grommet"
import {  Attachment, PauseFill,PlayFill, Close, Download, Image, Document, Multimedia } from 'grommet-icons';
import React from "react";

export const AttachmentButtonLabel = styled.label`
  cursor: pointer;
  border: 0.15rem solid transparent;
  border-radius: 2rem;
  transition: all 0.3s;
  padding: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  :hover {
    transition: all 0.3s;
    border: 0.15rem solid ${ props => props.color ? props.color : '#5567FD'};
    border-radius: 2rem;
    background-color:${ props => props.color ? props.color : '#5567FD'};
    color: white; 
    svg {
      transition: all 0.3s;
      fill: white; 
      stroke: white; 
    }
  }
  input {
    display: none;
  }
`
export const AttachmentButton = ({onChange, color}) =>(
  <AttachmentButtonLabel color={color}>
    <Attachment color={color ? color: "#5567FD"}/>
    <input type="file" onChange={onChange}/>
  </AttachmentButtonLabel>
  
)
export const CloseButton = ({onClick}) =>(
  <AttachmentButtons     
    onClick={onClick} 
    icon={<Close color="#5567FD"/>}
    label="Close"
  />
)
export const DownloadButton = ({src}) =>(
  <a href={src} download target="_blank">
    <AttachmentButtons     
      icon={<Download color="#5567FD"/>}
      label="Download"
    />
  </a>
)
export const AttachmentItemButton = ({onClick, attachment}) =>(
  <AttachmentItem onClick={onClick} >
    { 

        attachment.type.includes("image") ? <Image color="#5567FD"/> :
        attachment.type.includes("mp4") ? <Multimedia color="#5567FD"/> :
        <Document color="#5567FD"/>
    }
    <span>{attachment.key ? attachment.name : ''}</span>
  </AttachmentItem>     
)

export const AttachmentPreview = ({attachment,src}) => (
  <AttachmentPreviewContainer>
    { 
      attachment.type && 
      (
        attachment.type.includes("image") ? <AttachmentPhoto src={src}/> :
        attachment.type.includes("video") ? <AttachmentVideo src={src} type={attachment.type}/> :
        <Document color="#5567FD"/>
      )
    }
  </AttachmentPreviewContainer>
)

// Step Description
export const StepDetailsContainer = styled(Box)`
  width: 90%;
  min-height: 6rem;
  height: auto;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;
export const StepDetailsTitle = styled.h1`
  margin: 0 auto;
  width: 100%;
  height: auto;
  font-size: 2.0rem;
  color: ${props => props.color ? props.color: "black"};
  font-weight: 600;
`;
export const StepDetailsDescription = styled.p`
  width: 100%;
  height: auto;
  font-size: 1.0rem;
  padding-left: 1rem;
  color: black;
`;

// Compass Wheel 
export const CompassWheelContainer = styled(Box)`
  width: 100%;
  min-height: 28rem;
  height: 40%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  background: transparent;
`;

// Compass Viewer Containers
export const MainContainer = styled(Box)`
  width: 60%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const CompassNavigationBar = styled(Box)`
  width: 40%;
  height: 100%
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: white;
`;

// Compass Details 
export const CompassDetailsContainer = styled(Box)`
  width: 90%;
  min-height: 6rem;
  height: auto;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;
export const CompassDetailsTitle = styled.h1`
  margin: 0 auto;
  width: 100%;
  height: auto;
  font-size: 2.0rem;
  color: ${props => props.color ? props.color: "black"};
  font-weight: 600;
`;
export const CompassDetailsDescription = styled.p`
  width: 90%;
  height: auto;
  font-size: 1.0rem;
  padding-left: 1rem;
  color: black;
`;

// Session Creator 

export const SCContainer = styled(Accordion)`
  margin: 1rem auto;
  width: 90%;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`
export const SCPanel = styled(AccordionPanel)`
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`
export const SCBody = styled(Form)`
  // padding: 0 1rem;
  width: 90%;
  height: auto;
  margin: 0 auto;
  background: white;
`

// Logger

export const LoggerGrid = styled(Box)`
  width: 90%;
  min-height: 26rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

`;
export const LoggerHeader = styled(Box)`
  width: 100%;
  margin: 1rem auto;
  height: 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const LoggerTitle = styled.h4`
  font-size: 1.2rem;
  padding: 0;
  width: 50%;
  color: ${props => props.color ? props.color: '#5567FD'};
  line-height: 1.3rem;
  text-align: left;
  font-weight: 600;
`
export const LoggerInput = styled(TextArea)`
  border-color: black;
  resize: none;
  min-height: 10rem;
  height: 100%;
  font-size: 0.8rem;
  font-weight: 400;
`;
export const StepName = styled(Text)`
  font-size: 2rem;
`;
export const LoggerInnerNav = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
export const LoggerAttachments = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 12rem;
  margin: 0.5rem auto;
`

// attachment components
export const AttachmentContainer = styled(Box)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`
export const AttachmentPreviewContainer = styled(Box)`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  svg {
    width: 70%;
    height: 70%;
    margin: auto;
  }
`
export const AttachmentButtonContainer = styled(Box)`
  width: 80%;
  height: 20%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const AttachmentItem = styled(Box)`
  border: none;
  width: 100%;
  min-height: 2.2rem;
  margin: 1rem auto;
  font-size: 0.8rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  span {
    padding-left: 0.5rem;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
  
`;
export const AttachmentPhoto = styled.img`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const AttachmentVideo = ({src,type}) => (
  <Video controls="over" fit="cover">
    <source key="video" src={src} type={type} />
  </Video>
)

export const AttachmentButtons = styled(Button)`
  border: 0.15rem solid #5567FD;
  border-radius: 2rem;
  transition: all 0.3s;
  padding: 1rem;
  color #5567FD;
  align-self: center;
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
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
  overflow-y: auto; 
`;
export const CSTitle = styled(Box)`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.6rem;
  align-self: center;
  text-align: left;
  padding-left: 1.5rem;
`;
export const CSMain = styled(Grid)`
  height: 100%;
`;
export const StepRow = styled(Box)`
  min-width: 20rem;
  min-height: 20rem;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`
export const StepContainer = styled(Button)`
  border: 0.15rem solid ${props => props.color ? props.color : '#5567FD'};
  border-radius: 50%;
  transition: all 0.3s;
  :hover {
    transition: all 0.2s;
    background-color: transparent;
  }
  top: 38%;
  left: 31%;
  background-color: ${props => props.color ? props.color : '#5567FD'};
  list-style: none;
	height: 7.6rem;
  width: 7.6rem;
  display: block;
	position: absolute;
  transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength*1.4}rem) rotate(-${props.rotateAngle}deg)` || 'none'};
  box-shadow: 0 1px 3px 0 #b3b3b3;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`
export const StepText = styled(Box)`
  padding: 1rem;
  color: black; 
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  word-break: break-all;
  p {
    margin: 0;
  }
`
export const InteractionsTitle = styled(Box)`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  width: 90%;
  margin: 0.5rem auto;
  height: auto;
`;
export const CSInteractions = styled(Box)`
  display: flex;
  flex-direction: column;
  width: auto;
  min-height: 10rem;
`;
export const CSInteractionsFeed = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  flex-wrap: nowrap; 
  height: 100%;
  width: 100%;
  padding: 1rem;
  // justify-content: center;
`;
export const CSInteractionContainer = styled(Box)`
  margin: 0 0.5rem;
  min-width: 7.6rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
`;
export const CSInteraction = styled(Button)`
  border: 0.15rem solid ${props => props.color ? props.color : '#5567FD'};
  :hover {
    transition: all 0.2s;
    background-color: transparent;
    border: 0.15rem solid transparent;
  }
  border-radius: 50%;
  transition: all 0.3s;
  padding: 1rem;
  color: black; 
  font-weight: 600;
  font-size: 0.7rem;
  line-height: 0.8rem;
  min-height: 5rem;
  min-width: 5rem;
  max-height: 5rem;
  max-width: 5rem;
  word-break: break-all;
  background-color: ${props => props.color ? props.color : '#5567FD'};

`;
export const CSInteractionButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  span {
    font-size: 0.8rem;
  }
`;



// Compass SessionBar
export const SessionView = styled(Box)`
  text-align: center;
  background: white;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`
export const SessionSection = styled(Box)`
  width: 90%;
  min-height: 3rem;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
`
export const SessionTitle = styled.h4`
  word-break: break-word;
  font-size: 2rem;
  padding: 0;
  width: 50%;
  color: black;
  line-height: 2.1rem;
  text-align: left;
  font-weight: 600;
  margin: 0;
`
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
export const SessionAttachments = styled(Box)`
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  border: 0.1rem solid rgba(0,0,0,0.2);
  border-radius: 0.3rem;
`
export const StepAccordion = styled.div`
  text-align: center;
  h4 {
    font-size: 1.2rem;
    padding: 0;
    color: ${props => props.color ? props.color: '#5567FD'}
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
export const TimerButton = ({onClick,start, color}) =>(
  <ControlButton     
    onClick={e => onClick()} 
    icon={ start ? <PauseFill color={color ? color: '#5567FD'} /> : <PlayFill color={color ? color: '#5567FD'}/> }
  />
)
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
  display: flex;
  flex-direction: row;
`
export const LayerView = styled(Layer)`
  width: 70%;
  height: 80%;
  border-radius: 2rem;
`
