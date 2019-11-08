import React, {useState, useEffect, useContext}  from "react";
import { 
  LoggerGrid,
  LoggerTitle,
  LoggerInput, 
  LoggerHeader,
  LoggerAttachments,
  StepClock,
  TimerButton,
  SessionAttachments
} from "../../../styles/CompassPage"
import { AttachmentButton } from "../../../styles/Modals"
import translateTime from '../../../utils/translateTime'
import * as Mutation from '../../../utils/mutations'
import Attachment from "./Attachment"
import { Storage } from 'aws-amplify'
import uuid from 'uuid/v4'
import config from '../../../aws-exports'
import { CompassContext } from "../../../context/CompassPage/context"

export default (props) => {
  const {interaction,updateInteraction} = useContext(CompassContext);

  const intialStep = {
    name_of_step: "Logger",
    color: "black",
  };

  const [step, setStep] = useState(intialStep);
  const [interactionTime,setInteractionTime] = useState(0);
  const [log, setLog] = useState('');
  const [start,setStart] = useState(false);
  const [attachments,setAttachments] = useState([]);

  // intialize interaction into the logger
  useEffect(() => {
    if(interaction.id){
      const {log_content, duration, step, attachments} = interaction
      const parsedLog = log_content !== " " ? log_content : ""
      setInteractionTime(duration)
      setStep(step)
      setLog(parsedLog)
      setStart(true)
      setAttachments(attachments.items)
    }

  // eslint-disable-next-line
  }, [interaction.id])

  // handle interaction time
  useEffect(() => {
    let interval = null;

    if (interaction.id){
      if (start) {
        interval = setInterval(() => {
          updateInteraction({ duration: interactionTime+1 })
          setInteractionTime(interactionTime+1)
        }, 1000)

      } else if (!start) {
        clearInterval(interval)
      }
      return () => clearInterval(interval);
    }
    
  // eslint-disable-next-line
  }, [start,interactionTime])
  
  const pause = (e) => {
    const newInteraction = {
      id: interaction.id,
      log_content: log ? log : " ",
      duration: interactionTime,
    }
    if (start) {
      Mutation.updateInteraction(newInteraction)
    }
    
    return setStart(!start)
  }

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
    <LoggerGrid>
      <LoggerHeader>
        <LoggerTitle color={step.color}>
          {step.name_of_step} 
        </LoggerTitle>
        {
          step.hasOwnProperty("id") && (
            <StepClock >
              {translateTime(interactionTime)}
              <TimerButton color={step.color} onClick={pause} start={start}/>
            </StepClock>
          )
        }
      </LoggerHeader>
      <LoggerInput
        placeholder="Enter Log"
        value={log}
        onChange={event => setLog(event.target.value)}
        color={step.color}
        disabled={!start}
      />
      <LoggerAttachments>
        <LoggerHeader>
          <LoggerTitle color="black">
            Attachments
          </LoggerTitle>
          {
            step.hasOwnProperty("id") && (
              <StepClock >
                <AttachmentButton 
                  disabled={!start} 
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
    </LoggerGrid>
  );
}