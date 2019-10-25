import React, { useState, useEffect, useContext } from "react";

import CompassViewer from "../components/CompassComponents/CompassViewer"
import CompassSelector from "../components/CompassComponents/CompassSelector"

import ReviewLog from "../components/ModalComponents/ReviewLog"

import {CompassContext} from "../context/CompassPage/context"
import {ReviewModalContext} from "../context/ReviewModal/context"

import { MainView } from "../styles/CompassPage"
// import { 
//   LayerView, 
//   AttachmentContainer ,
//   AttachmentPreview,
//   AttachmentButtonContainer,
//   CloseButton,
//   DownloadButton
// } from "../styles/Modals"
// import {Loader} from "../styles/layout"

const CompassPage = (props) => {
  const { compass, session, } = useContext(CompassContext);
  const { showModal } = useContext(ReviewModalContext);
  const [show, setShow] = useState();
  const [attachment,setAttachment] = useState();
  const [source,setSource] = useState();

  const showItem = (attachment,src) => {
    setAttachment(attachment)
    setSource(src)
  }

  useEffect(() => {

  },[session])

  return (
    <MainView>
      {
        compass.hasOwnProperty("id") ?  ( 
          session.hasOwnProperty("id") ? <CompassSelector  showAttachment={showItem} /> : <CompassViewer /> 
        ) : <div> sorry, this project does not exist !</div>
      }
      {/* {
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
      } */}
      { showModal && <ReviewLog /> }
    </MainView>
  )
}
export default CompassPage;
