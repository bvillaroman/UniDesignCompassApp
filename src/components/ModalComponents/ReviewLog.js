import React,{useEffect,useState, useContext} from "react";

import { 
  LayerView, 
  AttachmentItemButton,
  AttachmentPreview,
  ReviewLogAttachmentPreview,
  AttachmentFilePlaceHolder,
  CloseButton,
  ReviewLogAttachmentsSection,
  ReviewLogContainer,
  ReviewLogTitle,
  ReviewLogInput, 
  ReviewLogHeader,
  ReviewLogAttachmentsContainer,
  ReviewLogAttachments
} from "../../styles/Modals"

import { Storage} from 'aws-amplify'
import {ReviewModalContext} from "../../context/ReviewModal/context"

const ReviewLog = () => {
  const { interaction, updateInteraction, updateShowModal, clearInteraction } = useContext(ReviewModalContext);
  const [log, setLog] = useState("")
  const [step, setStep] = useState({})
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
        <ReviewLogInput
          placeholder="Enter Log"
          value={log}
          onChange={event => setLog(event.target.value)}
          color={step.color} 
        />
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
