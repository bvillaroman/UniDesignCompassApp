import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import * as Icons from 'grommet-icons';
import {Menu} from 'grommet';

import { LoggerHeaderText, LoggerHeaderContainer, LoggerHeaderButtonContainer } from "../style"
import { Loader } from "../../../styles/layout"
import * as Mutation from '../../../utils/mutations'
import Attachment from "./Attachment"
import { Storage } from 'aws-amplify'
import uuid from 'uuid/v4'
import config from '../../../aws-exports'
import { CompassContext } from "../../../context/CompassPage/context"
import { GlobalContext } from "../../../context/context"

const Attachments = (props) => {
  const { compass,interaction, session } = useContext(CompassContext);
  const { user } = useContext(GlobalContext);

  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const readers = compass.readers.items.map((reader) => reader)

  const reader = readers.find((r) => r.email === user.email)

  // let allInteractions = sessions
  // .map(item => item.interactions.items)
  // .flat().filter((interaction) => (interaction.duration > 0))
  useEffect(() => { 

    if (interaction.hasOwnProperty("id")) {
      let arrAttachment = []
      setLoading(false)
      if (interaction.attachments.items.length > 0) {
        interaction.attachments.items.map((attachment, i) => {
          return arrAttachment.push(attachment)
        })
      }

      setAttachments(arrAttachment)
    }

    // eslint-disable-next-line
  }, [interaction])
  
  useEffect(() => { 
    let array = []
    if (showAll && session.hasOwnProperty("id")){
      setLoading(false)
      array = session.interactions.items.map(item => item.attachments.items).filter(arr => arr.length > 0).flat()
    } else if ( !showAll && interaction.hasOwnProperty("id")) {
      setLoading(false)
      if (interaction.attachments.items.length > 0) {
        interaction.attachments.items.map((attachment, i) => {
          return array.push(attachment)
        })
      }
    }
    setAttachments(array)
    // eslint-disable-next-line
  }, [showAll, interaction])


  // handle uploading an attachment
  const handleUpload = async (event) => {
    event.preventDefault()
    const { target: { files } } = event
    const [image] = files || []
    if (image && interaction.hasOwnProperty("id")) {
      const { name: fileName, type: mimeType } = image
      const fileForUpload = {
        bucket: config.aws_user_files_s3_bucket,
        key: `${uuid()}${fileName}`,
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
            setAttachments([res.data.createAttachment, ...attachments])

          })
      } catch (err) {
        setLoading(false)
        console.log('error cannot store file: ', err)
      }
    }
  };

  return (
    <AttachmentsContainer>
      <LoggerHeaderContainer>
        <AttachmentsSelector
          label={ showAll ? <LoggerHeaderText>All Attachments </LoggerHeaderText> : <LoggerHeaderText> Attachments </LoggerHeaderText>}
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
          attachments.length > 0 &&
          attachments.map((item) => (<Attachment key={item.key} attachment={item} />))
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
  width: 90%;
  height: 50%;
  margin: 0 auto;
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

const AttachmentButton = ({ onChange, color, disabled }) => (
  <ButtonLabel color={color} disabled={disabled}>
    <Icons.Attachment color={color ? color : "#5567FD"} />
    <input type="file" onChange={onChange} disabled={disabled} />
  </ButtonLabel>
)