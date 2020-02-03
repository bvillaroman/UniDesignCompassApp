import React,{ useEffect,useState} from "react";
import styled from "styled-components"
import { Image, Document, Multimedia} from 'grommet-icons';
import { getAttachment } from '../../../utils/queries'

const Attachment = ({attachment}) => {
  const [source, setSource] = useState("")
  
  useEffect(() => {
    if (attachment.hasOwnProperty("key")){
      getAttachment(attachment)
        .then(result => setSource(result))
        .catch(err =>  setSource(''));
    }
  }, [attachment])

  return (
    <AttachmentLinkStyle href={source} target="_blank" rel="noopener noreferrer">
      <AttachmentLinkContainer>
        <AttachmentItemButton attachment={attachment}/>
        { attachment.interaction.step && <AttachmentText color={attachment.interaction.step.color}>{attachment.interaction.step.name_of_step}</AttachmentText>}
      </AttachmentLinkContainer>      
    </AttachmentLinkStyle>
  );
}
export default Attachment;

const AttachmentLinkStyle = styled.a`
  text-decoration: none;
`;
const AttachmentLinkContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const AttachmentText = styled.div`
  color: ${ props => props.color ? props.color : "black"};
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const AttachmentItemButton = ({ onClick, attachment }) => (
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

export const AttachmentItem = styled.div`
  border: none;
  width: 50%;
  min-height: 2.2rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: flex-start;
  span {
    padding-left: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-self: center;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
`;