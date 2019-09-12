import React, { useEffect,useState } from "react";
import LogPage from "../components/CompassComponents/LogPage"

import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import { 
  MainView, 
  AttachmentPhoto, 
  LayerView, 
  CompassButtons, 
  AttachmentContainer ,
  AttachmentPreviewContainer,
  AttachmentButtonContainer,
  CloseButton,
  DownloadButton
} from "../styles/CompassPage"
import { globalStore } from "../context/context"

const CompassPage = (props) => {
  const {session, interaction} = globalStore()
  const [show, setShow] = useState();
  const [attachment,setAttachment] = useState();

  const showItem = (item) => {
    setAttachment(item)
    setShow(true)
  }

  return (
    <MainView>
      {
        interaction ? <LogPage showAttachment={showItem}/> :
        session ? <CompassSelector showAttachment={showItem}/> :
        <SessionCreator />
      }
      {
        show && (
          <LayerView
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
          >
            <AttachmentContainer>
              <AttachmentPreviewContainer>
                <AttachmentPhoto src={attachment}/>
              </AttachmentPreviewContainer>
              <AttachmentButtonContainer>
                <CloseButton onClick={() => setShow(false)} />
                <DownloadButton onClick={() => setShow(false)} />
              </AttachmentButtonContainer>
            </AttachmentContainer>
          </LayerView>
        )
      }
    </MainView>
  )
}
export default CompassPage;
