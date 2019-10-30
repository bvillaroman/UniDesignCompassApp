import React, { useState, useEffect, useContext } from "react";

import CompassViewer from "../components/CompassComponents/CompassViewer"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import ReviewLog from "../components/ModalComponents/ReviewLog"

import { getCompass,getSession,getInteraction } from '../utils/queries'
import {CompassContext} from "../context/CompassPage/context"
import {ReviewModalContext} from "../context/ReviewModal/context"
import queryStringParser from '../utils/queryStringParser'

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
  const {
    compass,
    updateCompass, 
    clearCompass,
    session,
    updateSession,
    clearSession, 
    updateInteraction, 
    clearInteraction,    
    updateInteractions, 
    clearInteractions
  } = useContext(CompassContext);
  const { showModal } = useContext(ReviewModalContext);
  const [attachment,setAttachment] = useState();
  const [source,setSource] = useState();

  const showItem = (attachment,src) => {
    setAttachment(attachment)
    setSource(src)
  }

  const [compassID, setCompassID] = useState("")
  const [interactionID, setInteractionID] = useState("")
  const [sessionID, setSessionID] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCompassID(queryStringParser(props.location.search).compassID)
    setSessionID(queryStringParser(props.location.search).sessionID)
    setInteractionID(queryStringParser(props.location.search).interactionID)

  }, [props.location.search])

  // setting up the compass through the url
  useEffect(() => {
  
    if (compassID !== "") {
      clearCompass()
      setLoading(true)
      getCompass(compassID)
        .then((res) => {
          setLoading(false);
          updateCompass(res.data.getCompass);
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          clearCompass();
          console.log(err)
        })
    } else {
      clearCompass()
    } 

  }, [compassID])

  // setting up the session through url
  useEffect(() => {
    
    if (sessionID !== "") {
      clearSession();
      setLoading(true)
      getSession(sessionID)
        .then((res) => {
          setLoading(false)
          updateSession(res.data.getSession)
          let interactions = []
          if (res.data.getSession.interactions.items.length > 0) {
            interactions = res.data.getSession.interactions.items.sort((a,b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
          }
          updateInteractions(interactions);
        })
        .catch((err) => {
          setLoading(false)
          clearSession();
          clearInteractions();
          console.log(err)
        })
    } else {
      clearSession();
    }
  }, [sessionID])

  // setting up the interaction through url
  useEffect(() => {

    if (interactionID !== "") {
      clearInteraction();
      setLoading(true)
      getInteraction(interactionID)
        .then((res) => {
          setLoading(false);
          updateInteraction(res.data.getInteraction);
        })
        .catch((err) => {
          setLoading(false);
          clearInteraction();
          console.log(err);
        })
    } else {
      clearInteraction();
    }

  // eslint-disable-next-line
  }, [interactionID])

  return (
    <MainView>
      {
        !loading ? (compass.hasOwnProperty("id") ?  ( 
            session.hasOwnProperty("id") ? <CompassSelector  showAttachment={showItem} /> : <CompassViewer /> 
          ) : <div> sorry, this project does not exist !</div>
        ) : <Loader />
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
