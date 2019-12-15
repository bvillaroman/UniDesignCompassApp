import React, {useState, useEffect, useContext }  from "react";
import styled from "styled-components"
import { Box, } from "grommet"

import { 
  LoggerTitle,
  LoggerHeader,
  StepClock,
} from "../../../../styles/CompassPage"
import { AttachmentButton } from "../../../../styles/Modals"
import * as Mutation from '../../../../utils/mutations'
import Attachment from "./Attachment"
import { Storage } from 'aws-amplify'
import uuid from 'uuid/v4'
import config from '../../../../aws-exports'
import { CompassContext } from "../../../../context/CompassPage/context"

const Attachments = (props) => {
  const {compass, interaction, updateInteraction, session} = useContext(CompassContext);
  
  const [attachments,setAttachments] = useState([]);

  // intialize attachments into the logger
  // useEffect(() => {
  //   if(compass.hasOwnProperty("id")){
  //     let arrAttachment = []
  
  //     if (compass.sessions.items.length > 0) {
  
  //       compass.sessions.items.map((session, i) => {
  //         session.interactions.items.map((interaction, i) => {
  //           arrAttachment.push(interaction.attachments.items)
  //         })
  //       })
  //     }

  //     setAttachments(arrAttachment.flat())
  //   }

  // // eslint-disable-next-line
  // }, [compass])

  useEffect(() => {
    if(session.hasOwnProperty("id")){
      let arrAttachment = []
  
      if (session.interactions.items.length > 0) {  
        session.interactions.items.map((interaction, i) => {
          arrAttachment.push(interaction.attachments.items)
        })
      }

      setAttachments(arrAttachment.flat())
    }

  // eslint-disable-next-line
  }, [session])
  
  
  const handleUpload = async (event) => { 
    const { target: { files } } = event
    const [image] = files || []
    if (image && interaction.hasOwnProperty("id") ) {
      const { name: fileName, type: mimeType } = image
      const fileForUpload = {
        bucket: config.aws_user_files_s3_bucket,
        key:  `${uuid()}${fileName}`,
        region: config.aws_user_files_s3_bucket_region,
        name: fileName,
        type: mimeType,
      }
    
      try {
        await Storage.put(fileForUpload.key, image, { contentType: mimeType })
        Mutation.uploadAttachment({...fileForUpload,attachmentInteractionId: interaction.id})
          .then((res) => {
            setAttachments([res.data.createAttachment, ...attachments])
            updateInteraction({attachments: [res.data.createAttachment, ...attachments]})
          })
      } catch (err) {
        console.log('error cannot store file: ', err)
      }
    }
  };

  return (
    <LoggerAttachments>
      <LoggerHeader>
        <LoggerTitle color="black">
          Attachments
        </LoggerTitle>
        {
          compass.hasOwnProperty("id") && (
            <StepClock >
              <AttachmentButton onChange={handleUpload} />
            </StepClock>
          )
        }
      </LoggerHeader>
      <SessionAttachments>
        { 
          attachments.length > 0 && 
          attachments.map((item) => (
            <Attachment key={item.key} attachment={item}/>
          )) 
        }
      </SessionAttachments>
    </LoggerAttachments>
  );
}

export default Attachments;

export const LoggerAttachments = styled(Box)`
  width: 90%;
  min-height: 14rem;
  max-height: 14rem;
  margin: 0 auto;
`
export const SessionAttachments = styled(Box)`
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  border-top: 0.1rem solid rgba(0,0,0,0.2);
`