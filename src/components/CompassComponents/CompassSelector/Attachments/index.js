import React, {useState, useEffect, useContext}  from "react";
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
  const {interaction,updateInteraction} = useContext(CompassContext);

  const intialStep = {
    name_of_step: "Logger",
    color: "black",
  };

  const [step, setStep] = useState(intialStep);
  const [attachments,setAttachments] = useState([]);

  // intialize interaction into the logger
  useEffect(() => {
    if(interaction.id){
      const { step, attachments} = interaction
      setStep(step)
      setAttachments(attachments.items)
    }

  // eslint-disable-next-line
  }, [interaction.id])
  
  const handleUpload = async (event) => { 
    const { target: { files } } = event
    const [image] = files || []
    if (image) {
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
          step.hasOwnProperty("id") && (
            <StepClock >
              <AttachmentButton 
                onChange={handleUpload} 
                color={step.color}
              />
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
  min-height: 10rem;
  margin: 0.5rem auto;
`
export const SessionAttachments = styled(Box)`
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  border-top: 0.1rem solid rgba(0,0,0,0.2);
  // border-radius: 0.3rem;
`