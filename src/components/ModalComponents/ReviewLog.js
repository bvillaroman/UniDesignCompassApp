import React from "react";

import { 
  LayerView, 
  AttachmentContainer ,
  AttachmentButtonContainer,
  CloseButton,
} from "../../styles/Modals"

const ReviewLog = ({closeWindow}) => {

  return (
    <LayerView
      onEsc={closeWindow}
      onClickOutside={closeWindow}
    >
      <AttachmentContainer>
        <AttachmentButtonContainer>
          <CloseButton onClick={closeWindow} />
        </AttachmentButtonContainer>
      </AttachmentContainer>
    </LayerView>
  )
}
export default ReviewLog;
