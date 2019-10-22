import React, { useState, useEffect, useContext } from "react";

import { 
  LayerView, 
  AttachmentContainer ,
  AttachmentButtonContainer,
  CloseButton,
} from "../../styles/Modals"

const ReviewLog = ({closeWindow, interaction}) => {

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
