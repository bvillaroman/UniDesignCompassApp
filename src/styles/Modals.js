
import styled from "styled-components"
import { Layer, Button, Box, TextArea, Text } from "grommet"
import { Edit, Attachment, Close, Download, Image, Document, Multimedia, Video } from 'grommet-icons';
import React from "react";

export const LayerView = styled(Layer)`
  width: 70%;
  height: 80%;
  border-radius: 2rem;
`

export const ReviewLogContainer = styled(Box)`
  width: 96.5%;
  padding: 0 1.5rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;

`;
export const ReviewLogHeader = styled(Box)`
  width: 100%;
  margin: 0.5rem auto;
  min-height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ReviewLogTitle = styled.h4`
  font-size: 1.8rem;
  padding: 0;
  width: 50%;
  color: ${props => props.color ? props.color : '#5567FD'};
  line-height: 1.3rem;
  text-align: left;
  font-weight: 600;
`
export const ReviewLogText = styled(Box)`
  border-color: black;
  min-height: 10rem;
  height: 100%;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.5rem 0.75rem;
`;
export const ReviewLogInput = styled(TextArea)`
  border-color: black;
  resize: none;
  min-height: 7.5rem;
  height: 100%;
  font-size: 0.8rem;
  font-weight: 400;
`;
export const ReviewLogInputButtons = styled(Box)`
  flex-direction: row;
  width: 100%;
  min-height: 2rem;
  margin-top: 0.5rem;
  justify-content: space-between;
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
export const ReviewLogAttachmentsSection = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 12rem;
  margin: 0.5rem auto;
  flex-direction: row;
`
export const ReviewLogAttachmentsContainer = styled(Box)`
  width: 40%;
  height: 100%;
  min-height: 12rem;
  flex-direction: column;
`
export const ReviewLogAttachments = styled(Box)`
  width: 100%;
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  border-top: 0.1rem solid rgba(0,0,0,0.2);
  // border-radius: 0.3rem;
`
export const ReviewLogAttachmentPreview = styled(Box)`
  width: 60%;
  height: auto;
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
    stroke: ${ props => props.disabled ? "grey" : props.color}; 
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
  width: 100%;
  height: 100%;
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
export const AttachmentLinkStyle = styled.a`
  text-decoration: none;
`;
export const AttachmentPhotoStyle = styled(Box)`
  padding: 5%;
  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  a {
    width: auto;
    height: auto;
    overflow: auto;
  }
`;
export const AttachmentFilePlaceHolder = styled(Box)`
  width: 85%;
  height: 85%;
  justify-content: center;
  border-radius: 0.5rem;
  text-align: center;
  margin: auto;
  background: grey;
  color: white;
`;
export const AttachmentPhoto = ({ src }) => (
  <AttachmentPhotoStyle >
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img src={src} alt="attachmentphoto" />
    </a>
  </AttachmentPhotoStyle>
)
export const AttachmentVideo = ({ src, type }) => (
  <Video controls="over" fit="cover">
    <source key="video" src={src} type={type} />
  </Video>
)
export const AttachmentButton = ({ onChange, color, disabled }) => (
  <AttachmentButtonLabel color={color} disabled={disabled}>
    <Attachment color={color ? color : "#5567FD"} />
    <input type="file" onChange={onChange} disabled={disabled} />
  </AttachmentButtonLabel>
)

export const CloseButton = ({ onClick }) => (
  <AttachmentButtons
    onClick={onClick}
    icon={<Close color="#5567FD" />}
  />
)

const EditLogButtonStyle = styled(AttachmentButtons)`
  padding: 0.2rem .5rem;
  font-weight: 500;
`
export const EditLogButton = ({ onClick }) => (
  <EditLogButtonStyle
    onClick={onClick}
    icon={<Edit color="#5567FD" />}
    label="Edit Log"
  />
)

export const SaveButtonContainer = styled(Box)`
  flex-direction: row;
  align-items: center;
  p {
    font-size: 1.0rem;
    margin-right: 1rem;
  }
`
export const SaveButton = ({ onClick }) => (
  <EditLogButtonStyle
    onClick={onClick}
    label="Save"
  />
)
export const ClearButton = ({ onClick }) => (
  <EditLogButtonStyle
    onClick={onClick}
    label="Clear"
  />
)
export const DownloadButton = ({ src }) => (
  <a href={src} download target="_blank" rel="noopener noreferrer">
    <AttachmentButtons
      icon={<Download color="#5567FD" />}
      label="Download"
    />
  </a>
)
export const AttachmentItemButton = ({ onClick, attachment }) => (
  <AttachmentItem onClick={onClick} >
    {
      attachment.type &&
      (
        attachment.type.includes("image") ? <Image color="#5567FD" /> :
          attachment.type.includes("mp4") || attachment.type.includes("mov") ? <Multimedia color="#5567FD" /> :
            <Document color="#5567FD" />
      )
    }
    <span>{attachment.key ? attachment.name : ''}</span>
  </AttachmentItem>
)

export const AttachmentPreview = ({ attachment, src }) => (
  <AttachmentPreviewContainer>
    {
      attachment.type &&
      (
        attachment.type.includes("image") ? <AttachmentPhoto src={src} /> :
          attachment.type.includes("video") ? <AttachmentVideo src={src} type={attachment.type} /> :
            <Document color="#5567FD" />
      )
    }
  </AttachmentPreviewContainer>
)
