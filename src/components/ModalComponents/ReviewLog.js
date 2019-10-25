import React,{useEffect,useState, useContext} from "react";

import { 
  LayerView, 
  AttachmentContainer ,
  AttachmentButton,
  AttachmentButtonContainer,
  CloseButton,
  ReviewLogGrid,
  ReviewLogTitle,
  ReviewLogInput, 
  ReviewLogHeader,
  ReviewLogAttachmentsContainer,
  ReviewLogAttachments
} from "../../styles/Modals"

import Attachment from "../../components/CompassComponents/CompassSelector"

import {ReviewModalContext} from "../../context/ReviewModal/context"

const ReviewLog = () => {
  const { interaction, updateInteraction, updateShowModal, clearInteraction } = useContext(ReviewModalContext);
  const [log, setLog] = useState("")
  const [step, setStep] = useState({})
  const [attachments, setAttachments] = useState([])

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

  return (
    <LayerView
      onEsc={closeWindow}
      onClickOutside={closeWindow}
    >
      <AttachmentContainer>
        <ReviewLogGrid>
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
          <ReviewLogAttachmentsContainer>
            <ReviewLogHeader>
              <ReviewLogTitle color="black"> Attachments </ReviewLogTitle>
              {/* <AttachmentButton onChange={handleUpload}  color={step.color}/>               */}
            </ReviewLogHeader>
            <ReviewLogAttachments>
              {/* { 
                attachments.length > 0 && 
                attachments.map((item) => (
                  <Attachment key={item.key} attachment={item} />
                )) 
              } */}
            </ReviewLogAttachments>
          </ReviewLogAttachmentsContainer>
        </ReviewLogGrid>
      </AttachmentContainer>
    </LayerView>
  )
}
export default ReviewLog;
