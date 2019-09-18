import React,{ useState, useEffect } from "react";
import { 
  LoggerGrid,
  LoggerTitle,
  LoggerInput, 
  LoggerHeader,
  LoggerAttachments,
  StepClock,
  TimerButton,
  AttachmentButton
} from "../../../styles/CompassPage"
import { getInteraction } from '../../../utils/queries'
import { updateInteraction, uploadAttachment, } from '../../../utils/mutations'
import Attachment from "./Attachment"
import { Storage } from 'aws-amplify'
import uuid from 'uuid/v4'
import config from '../../../aws-exports'

const Logger = ({interaction={}, showAttachment }) => {
  const [step, setStep] = useState({});
  const [time,setTime] = useState(0)
  const [log, setLog] = useState('')
  const [start,setStart] = useState(true)
  const [attachments,setAttachments] = useState([])

    //handle currentInteraction
  useEffect(() => {
    getInteraction(interaction.id).then((res) => {
      const {log_content, duration, step, attachments} = res.data.getInteraction
      setTime(duration)
      setStep(step)
      setLog(log_content)
      setStart(true)
      setAttachments(attachments.items)
    })
    // return {

    // }
  }, [interaction.id])


  // handle interaction time
  useEffect(() => {
    let interval = null;

    if (interaction.id){
      if (start) {
        interval = setInterval(() => setTime(time+1), 1000)

      } else if (!start && time !== 0) {
        clearInterval(interval)
      }
      return () => clearInterval(interval);
    }
  }, [start,time, interaction.id])
  
  const pause = (e) => {
    const newInteraction = {
      id: interaction.id,
      log_content: log,
      duration: time,
    }
    if (start) updateInteraction(newInteraction)
    
    return setStart(!start)
  }

  const handleLog = (log) => setLog(log) ;

  const translateTime = (secs) => {
    const sec_num = parseInt(secs, 10)
    const hours   = Math.floor(sec_num / 3600)
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60

    return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":") 
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
        uploadAttachment({...fileForUpload,attachmentInteractionId: interaction.id})
          .then((res) => {
            setAttachments([res.data.createAttachment, ...attachments])
          })
      } catch (err) {
        console.log('error cannot store file: ', err)
      }
    }
  }

  return (
    <LoggerGrid>
      <LoggerHeader>
        <LoggerTitle color={step.color}>
          {step.name_of_step} 
        </LoggerTitle>
        <StepClock >
          {translateTime(time)}
          <TimerButton color={step.color} onClick={pause} start={start}/>
        </StepClock>
      </LoggerHeader>
      <LoggerInput
        placeholder="Enter Log"
        value={log}
        onChange={event => handleLog(event.target.value)}
        color={step.color}
        disabled={!start}
      />
      <LoggerAttachments>
        <span>Attachments</span>
        <AttachmentButton  onChange={handleUpload} />

        { 
          attachments.length > 0 && 
          attachments.map((item) => (
            <Attachment key={item.key} attachment={item} showAttachment={showAttachment}/>
          )) 
        }
      </LoggerAttachments>
    </LoggerGrid>
  );
}
export default Logger;