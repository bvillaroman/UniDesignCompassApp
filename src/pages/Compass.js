import React, { useState, useContext } from "react";
import LogPage from "../components/CompassComponents/LogPage"

import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import { 
  MainView, 
  LayerView, 
  AttachmentContainer ,
  AttachmentPreview,
  AttachmentButtonContainer,
  CloseButton,
  DownloadButton
} from "../styles/CompassPage"
import { GlobalContext } from "../context/context"

const CompassPage = (props) => {
  const {session = "", interaction = ""} = useContext(GlobalContext);
  const [show, setShow] = useState();
  const [attachment,setAttachment] = useState();
  const [source,setSource] = useState();

  const showItem = (attachment,src) => {
    setAttachment(attachment)
    setSource(src)
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
              <AttachmentPreview attachment={attachment} src={source}/>
              <AttachmentButtonContainer>
                <CloseButton onClick={() => setShow(false)} />
                <DownloadButton  src={source}/>
              </AttachmentButtonContainer>
            </AttachmentContainer>
          </LayerView>
        )
      }
    </MainView>
  )
}
export default CompassPage;
