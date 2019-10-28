
import styled from "styled-components"
import { Layer, Button, Box, TextArea } from "grommet"
import { Attachment, Close, Download, Image, Document, Multimedia, Video } from 'grommet-icons';
import React from "react";

export const LayerView = styled(Layer)`
  width: 70%;
  height: 80%;
  border-radius: 2rem;
`

export const ReviewLogGrid = styled(Box)`
  width: 90%;
  min-height: 26rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

`;
export const ReviewLogHeader = styled(Box)`
  width: 100%;
  margin: 1rem auto;
  height: 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ReviewLogTitle = styled.h4`
  font-size: 1.2rem;
  padding: 0;
  width: 50%;
  color: ${props => props.color ? props.color: '#5567FD'};
  line-height: 1.3rem;
  text-align: left;
  font-weight: 600;
`
export const ReviewLogInput = styled(TextArea)`
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
export const ReviewLogInnerNav = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
export const ReviewLogAttachmentsContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 12rem;
  margin: 0.5rem auto;
`
export const ReviewLogAttachments = styled(Box)`
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  border-top: 0.1rem solid rgba(0,0,0,0.2);
  // border-radius: 0.3rem;
`


export const AttachmentButtonLabel = styled.label`
  cursor: ${ props => props.disabled ? "unset" : "pointer"}; ;
  border: 0.15rem solid transparent;
  border-radius: 2rem;
  transition: all 0.3s;
  padding: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  svg {
    fill: ${ props => props.disabled ? "grey" : "black"}; 
    stroke: ${ props => props.disabled ? "grey" : "black"}; 
  }
  :hover {
    transition: all 0.3s;
    border: 0.15rem solid ${ props => props.disabled ? "transparent" : (props.color ? props.color : '#5567FD')};
    border-radius: 2rem;
    background-color:${ props => props.disabled ? "transparent" : props.color ? props.color : '#5567FD'};
    color: white; 
    svg {
      transition: all 0.3s;
      fill: ${ props => props.disabled ? "grey" : "white"}; 
      stroke: ${ props => props.disabled ? "grey" : "white"}; 
    }
  }
  input {
    display: none;
  }
`
export const AttachmentButtons = styled(Button)`
  border: 0.15rem solid #5567FD;
  border-radius: 2rem;
  // transition: all 0.3s;
  padding: 0.2rem;
  color #5567FD;
  align-self: center;
  svg {
    width: 1.0rem;
    height: 1.0rem;
  }
  :hover {
    // transition: all 0.3s;
    color: white;
    background-color: #5567FD;
    svg { stroke: white; }
  }
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
export const AttachmentButton = ({onChange, color, disabled}) =>(
  <AttachmentButtonLabel color={color} disabled={disabled}>
    <Attachment color={color ? color: "#5567FD"}/>
    <input type="file" onChange={onChange} disabled={disabled}/>
  </AttachmentButtonLabel>
)
export const CloseButton = ({onClick}) =>(
  <AttachmentButtons     
    onClick={onClick} 
    icon={<Close color="#5567FD"/>}
  />
)
export const DownloadButton = ({src}) =>(
  <a href={src} download target="_blank" rel="noopener noreferrer">
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