import React, { useState, useEffect, useContext } from "react";

import CompassViewer from "../components/CompassComponents/CompassViewer"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import ReviewLog from "../components/ModalComponents/ReviewLog"

import {CompassContext} from "../context/CompassPage/context"
import {GlobalContext} from "../context/context"
import {ReviewModalContext} from "../context/ReviewModal/context"
import {createSessionSub} from "../utils/subscriptions"

import { MainView } from "../styles/CompassPage"
// import { 
//   LayerView, 
//   AttachmentContainer ,
//   AttachmentPreview,
//   AttachmentButtonContainer,
//   CloseButton,
//   DownloadButton
// } from "../styles/Modals"
import {Loader} from "../styles/layout"

const CompassPage = (props) => {
  const { user } = useContext(GlobalContext);
  const { compass, session,updateSessions, clearInteraction, clearSession } = useContext(CompassContext);
  const { showModal } = useContext(ReviewModalContext);
  const [attachment,setAttachment] = useState();
  const [source,setSource] = useState();
  const [newestSession, setNewestSession] = useState({});

  const showItem = (attachment,src) => {
    setAttachment(attachment)
    setSource(src)
  }
  // subscription for any new project being created
  useEffect(() => {
    const subscriber = createSessionSub().subscribe({
      next: res => {
        const newSession = res.value.data.onCreateSession
        if(newSession.compass.admins.includes(user.email)){
          setNewestSession(newSession)
        }
      }
    });

    return () => {
      clearInteraction()
      clearSession()
      subscriber.unsubscribe()
    }
  }, [])

  // if a new project is created, add it to existing projects
  useEffect(() => {
    if(newestSession.hasOwnProperty("id")) {
      let sessions = compass.sessions.items
      if (sessions.length) {
        const filteredSessions = sessions.filter(interaction => newestSession.id !== interaction.id)
        sessions = [newestSession, ...filteredSessions]
      }
      else sessions = [newestSession]
      updateSessions(sessions)
    }
  }, [newestSession])

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
