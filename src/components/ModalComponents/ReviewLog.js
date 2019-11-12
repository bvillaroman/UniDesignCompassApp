import React,{useEffect,useState, useContext} from "react";

import { 
  LayerView, 
  AttachmentItemButton,
  AttachmentPreview,
  ReviewLogAttachmentPreview,
  AttachmentFilePlaceHolder,
  CloseButton,
  SaveButtonContainer,
  SaveButton,
  ClearButton,
  EditLogButton,
  ReviewLogAttachmentsSection,
  ReviewLogContainer,
  ReviewLogTitle,
  ReviewLogText,
  ReviewLogInput, 
  ReviewLogInputButtons,
  ReviewLogHeader,
  ReviewLogAttachmentsContainer,
  ReviewLogAttachments
} from "../../styles/Modals"

import { Storage} from 'aws-amplify'
import * as Mutation from '../../utils/mutations'
import {ReviewModalContext} from "../../context/ReviewModal/context"
import {CompassContext} from "../../context/CompassPage/context"
const ReviewLog = () => {
  const { interaction, updateInteraction, updateShowModal, clearInteraction } = useContext(ReviewModalContext);
  const Compass = useContext(CompassContext);
  const [log, setLog] = useState("")
  const [saved, setSaved] = useState(false)
  const [step, setStep] = useState({})
  const [editEnabled,setEditEnabled] =  useState(false)
  const [attachments, setAttachments] = useState([])
  const [selectedAttachment, setSelectedAttachment] = useState({})

  // handle parsing of interaction
  useEffect(() => {
    if(interaction.id) {
      setLog(interaction.log_content)
      setStep(interaction.step)
      setAttachments(interaction.attachments.items)
    }
  }, [interaction])

  const closeWindow = () => {
    clearInteraction();
    updateShowModal(false);
  }

  const handleLog = (e) => {
    setLog(e.target.value)
    setSaved(false)
  }

  const loadAttachment = (attachment) => {
    Storage.get(attachment.key)
      .then(result => {
        setSelectedAttachment({
          src: result,
          attachment
        });
      })
      .catch(err => {
        setSelectedAttachment({})
      });
  }

  const saveLog = (e) => {

    const newInteraction = {
      id: interaction.id,
      log_content: log
    }
    Mutation.updateInteraction(newInteraction)
      .then((res) => {
        updateInteraction(res.data.updateInteraction)
        Compass.updateInteraction(res.data.updateInteraction);
        setSaved(true)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <LayerView
      onEsc={closeWindow}
      onClickOutside={closeWindow}
    >
      <ReviewLogContainer>
        <ReviewLogHeader>
          <ReviewLogTitle color={step.color}> {step.name_of_step}  </ReviewLogTitle>
          <CloseButton onClick={closeWindow} />  
        </ReviewLogHeader>
        <ReviewLogHeader>
          <ReviewLogTitle color="black"> Log </ReviewLogTitle>
          <EditLogButton onClick={e => setEditEnabled(!editEnabled)} />  
        </ReviewLogHeader>
        {
          editEnabled ? (
            <>
            <ReviewLogInput
              placeholder="Enter Log"
              value={log}
              onChange={handleLog}
              color={step.color} 
            />
            <ReviewLogInputButtons> 
              <ClearButton onClick={e=> setLog("")}/>
              <SaveButtonContainer>
                {saved && <p>Saved!</p>}
                <SaveButton onClick={saveLog}/>
              </SaveButtonContainer>
            </ReviewLogInputButtons>
            </>
          ) : ( <ReviewLogText> {log.replace(" ", "") !== "" ? log : "You have no Log!"} </ReviewLogText> )  
        }
        <ReviewLogAttachmentsSection>
          <ReviewLogAttachmentsContainer>
            <ReviewLogHeader>
              <ReviewLogTitle color="black"> Attachments </ReviewLogTitle>
              {/* <AttachmentButton onChange={handleUpload}  color={step.color}/>               */}
            </ReviewLogHeader>
            <ReviewLogAttachments>
              { 
                attachments.length > 0 ?
                attachments.map((attachment) => (
                  <AttachmentItemButton 
                    key={attachment.key} 
                    attachment={attachment}  
                    onClick={e => loadAttachment(attachment)} 
                  />
                )) : 
                <p>You have no attachments !</p>
              }
            </ReviewLogAttachments>
          </ReviewLogAttachmentsContainer>
          <ReviewLogAttachmentPreview>
            {
              selectedAttachment.hasOwnProperty("src") ? (
                <AttachmentPreview 
                  src={selectedAttachment.src} 
                  attachment={selectedAttachment.attachment}
                />
              ) : <AttachmentFilePlaceHolder> <span>Preview</span> </AttachmentFilePlaceHolder>
            }
          </ReviewLogAttachmentPreview>
        </ReviewLogAttachmentsSection>
      </ReviewLogContainer>
    </LayerView>
  )
}
export default ReviewLog;
