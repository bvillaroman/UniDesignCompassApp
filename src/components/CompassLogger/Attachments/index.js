import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import * as Icons from 'grommet-icons';
import { Menu } from 'grommet';
import { Storage } from 'aws-amplify'
import { v4 as uuidv4 } from 'uuid';

import { LoggerHeaderText, LoggerHeaderContainer, LoggerHeaderButtonContainer } from "../style"
import { Loader } from "../../../styles/layout"
import * as Mutation from '../../../utils/mutations'
import { timeSorter } from "../../../utils/translateTime"
import Attachment from "./Attachment"
import config from '../../../aws-exports'
import { CompassContext } from "../../../context/CompassPage/context"
import { GlobalContext } from "../../../context/context"

const Attachments = (props) => {
  const { compass, interaction, session } = useContext(CompassContext);
  const { user } = useContext(GlobalContext);

  const [attachments, setAttachments] = useState([]);
  const [allAttachments, setAllAttachments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const readers = compass.readers.items.map((reader) => reader)

  const reader = readers.find((r) => r.email === user.email)

  // setup interaction attachments array
  useEffect(() => {

    if (interaction.hasOwnProperty("id")) {
      let arrAttachment = []
      setLoading(false)
      if (interaction.attachments.items.length > 0) {
        interaction.attachments.items.map((attachment) => arrAttachment.push({ ...attachment }))
      }

      setAttachments(arrAttachment)
    }

    // eslint-disable-next-line
  }, [interaction])


  // set up for for all attachments array
  useEffect(() => {
    let tempArray = session.interactions.items.map(interaction => {

      if (interaction.attachments.items && interaction.attachments.items.length > 0) {
        // get all attachments
        let allAttachments = interaction.attachments.items.flat()
        // assign their step to them
        return allAttachments.map(attachment => ({ ...attachment }));
      } else return null;
    })

    tempArray = tempArray.filter(i => i).flat()

    setAllAttachments(tempArray)

    // eslint-disable-next-line
  }, [session])

  useEffect(() => {
    if (interaction.hasOwnProperty("id")) setShowAll(false)
    // eslint-disable-next-line
  }, [interaction.id])

  // handle uploading an attachment
  
  const handleUpload = async (event) => {
    event.preventDefault()
    const { target: { files } } = event
    const [image] = files || []
    if (image && interaction.hasOwnProperty("id")) {
      const { name: fileName, type: mimeType } = image
      const fileForUpload = {
        bucket: config.aws_user_files_s3_bucket,
        key: `${uuidv4()}${fileName}`,
        region: config.aws_user_files_s3_bucket_region,
        name: fileName,
        type: mimeType,
      }

      try {
        setLoading(true)
        await Storage.put(fileForUpload.key, image, { contentType: mimeType })
        Mutation.uploadAttachment({ ...fileForUpload, attachmentInteractionId: interaction.id })
          .then((res) => {
            setLoading(false)
            setAttachments([res.data.createAttachment, ...attachments].sort(timeSorter))
            setAllAttachments([res.data.createAttachment, ...allAttachments].sort(timeSorter))

          })
      } catch (err) {
        setLoading(false)
        console.log('error cannot store file: ', err)
      }
    }
  };

  return (
    <AttachmentsContainer className="attachment-help">
      <LoggerHeaderContainer>
        <AttachmentsSelector
          label={showAll ? <LoggerHeaderText>All Attachments </LoggerHeaderText> : <LoggerHeaderText> Attachments </LoggerHeaderText>}
          items={[
            { label: "Attachments", onClick: () => setShowAll(false) },
            { label: "All Attachments", onClick: () => setShowAll(true) }
          ]}
          dropAlign={{ top: "bottom" }}
        />
        <LoggerHeaderButtonContainer >

          {loading ? <Loader /> : reader === undefined ? <AttachmentButton onChange={handleUpload} /> : reader.email === user.email ? "" : <AttachmentButton onChange={handleUpload} />}
          {/* {loading ? <Loader /> : <AttachmentButton onChange={handleUpload} />} */}
        </LoggerHeaderButtonContainer>
      </LoggerHeaderContainer>
      <SessionAttachments>
        {
          showAll ? allAttachments.length > 0 && allAttachments.map((item) => (<Attachment key={item.key} attachment={item} />))
                  : attachments.length > 0 && attachments.map((item) => (<Attachment key={item.key} attachment={item} />))
        }
      </SessionAttachments>
    </AttachmentsContainer>
  );
}

export default Attachments;

export const AttachmentsSelector = styled(Menu)`
  width: 100%;
`

const AttachmentsContainer = styled.div`
  width: 85%;
  height: 50%;
  margin: 1rem auto;
  background: white;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  transition: box-shadow 150ms ease;
`
const SessionAttachments = styled.div`
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 12rem;
  overflow: scroll;
  border-top: 0.1rem solid rgba(0,0,0,0.2);
  @media (max-width: 767px){ 
    max-height: 8rem;
  }  
`
const ButtonLabel = styled.label`
  cursor: ${ props => props.disabled ? "unset" : "pointer"}; 
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

const AttachmentButton = ({ onChange, color, disabled }) => (
  <ButtonLabel color={color} disabled={disabled}>
    <Icons.Attachment color={color ? color : "#5567FD"} />
    <input type="file" onChange={onChange} disabled={disabled} />
  </ButtonLabel>
)