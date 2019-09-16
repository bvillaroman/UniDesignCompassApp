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
} from "grommet"
import { Compass, FormPrevious, Attachment, PauseFill,PlayFill, Close, Download, Image, Document, Multimedia, LinkPrevious } from 'grommet-icons';
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
export const AttachmentButtonLabel = styled.label`
  cursor: pointer;
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
  input {
    display: none;
  }
`
export const AttachmentButton = ({onChange}) =>(
  <AttachmentButtonLabel>
    <Attachment color="#5567FD"/>
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
      attachment.type && 
      (
        attachment.type.includes("image") ? <Image color="#5567FD"/> :
        attachment.type.includes("mp4") ? <Multimedia color="#5567FD"/> :
        <Document color="#5567FD"/>
      )
    }
    <span>{attachment.key ? attachment.name : ''} </span>
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
  width: 90%;
  margin: 1rem auto;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  
  align-items: center;
  span {
    padding-left: 0.5rem;
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
`;
export const CSTitle = styled(Box)`
  font-size: 2.0rem;
  font-weight: 600;
  line-height: 2.1rem;
  align-self: center;
  text-align: center;
`;
export const CSMain = styled(Grid)`
  width: 100%;
`;
export const StepRow = styled(Box)`
  width: 35rem;
  height: 35rem;
  margin: 0 auto;
  position: relative;
  button { 
    top: 38%;
    left: 38%;
  }
`
export const StepContainer = styled(Button)`
  border: 0.15rem solid ${props => props.color ? props.color : '#5567FD'};
  border-radius: 50%;
  transition: all 0.3s;
  padding: 1rem;
  color: black; 
  font-weight: 600;
  font-size: 1.3rem;
  :hover {
    transition: all 0.2s;
    background-color: transparent;
  }
  background-color: ${props => props.color ? props.color : '#5567FD'};
  text-align: center;

  list-style: none;
	height: 9rem;
	width: 9rem;
	position: absolute;
  transform: ${props => `rotate(${props.rotateAngle}deg) translate(0, -200px) rotate(-${props.rotateAngle}deg)` || 'none'};
  word-break: break-all;
`
export const CSInteractions = styled(Grid)`
  align-items: center;
  text-align: center;
`;
export const CSInteractionsFeed = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  flex-wrap: nowrap; 
  height: 100%;
  width: 100%;
  padding: 0 5rem;
  // justify-content: center;
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
  font-weight: 400;
  font-size: 1.0rem;
  min-height: 7.2rem;
  min-width: 7.2rem;
  max-height: 7.2rem;
  max-width: 7.2rem;
  word-break: break-all;
  background-color: ${props => props.color ? props.color : '#5567FD'};

`;
export const CSInteractionContainer = styled(Box)`
  margin: 0 0.5rem;
  min-width: 10rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
`;


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
export const SessionTitle = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  overflow-wrap: break-word;
  line-height: 2.0rem;
`
export const SessionDescription = styled(Box)`
  padding: 1rem;
  font-size: 1rem;
  text-align: left;
`
export const SessionAttachments = styled(Box)`
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
  height: 100%;
  overflow: scroll;
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
export const LayerView = styled(Layer)`
  width: 70%;
  height: 80%;
  border-radius: 2rem;
`
