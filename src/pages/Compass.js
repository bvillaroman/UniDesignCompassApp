import React, { useState, useEffect, useContext } from "react";

import CompassViewer from "../components/CompassComponents/CompassViewer"
import CompassSelector from "../components/CompassComponents/CompassSelector"

import ReviewLog from "../components/ModalComponents/ReviewLog"

import {CompassContext} from "../context/CompassPage/context"
import queryStringParser from '../utils/queryStringParser'
import {getCompass,getSession,getInteraction} from '../utils/queries'

import { MainView } from "../styles/CompassPage"
import { 
  LayerView, 
  AttachmentContainer ,
  AttachmentPreview,
  AttachmentButtonContainer,
  CloseButton,
  DownloadButton
} from "../styles/Modals"
import {Loader} from "../styles/layout"

const CompassPage = (props) => {
  const {
    updateCompass, 
    clearCompass, 
    compass, 
    updateSession,
    clearSession, 
    session,
    updateInteraction, 
    clearInteraction,    
    updateInteractions, 
    clearInteractions,
    clearTime
  } = useContext(CompassContext);
  const [compassID, setCompassID] = useState("")
  const [sessionID, setSessionID] = useState("")
  const [interactionID, setInteractionID] = useState("")
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState();
  const [attachment,setAttachment] = useState();
  const [source,setSource] = useState();

  const showItem = (attachment,src) => {
    setAttachment(attachment)
    setSource(src)
    setShow(true)
  }

  useEffect(() => {
    const {compassID,sessionID,interactionID} = queryStringParser(props.location.search)
    setCompassID(compassID)
    setSessionID(sessionID)
    setInteractionID(interactionID)
  }, [props.location.search])

  useEffect(() => {
    // queries the compass and assigns it throughout the app
    if (compassID) {
      getCompass(compassID)
        .then((res) => {
          setLoading(false);
          updateCompass(res.data.getCompass);
        })
        .catch((err) => {
          setLoading(false);
          clearCompass();
          console.log(err);
        })
    } else {
      clearCompass()
    }
  }, [compassID])

  useEffect(() => {
    // queries the compass and assigns it throughout the app
    if (sessionID) {
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
  }, [sessionID, interactionID])

  useEffect(() => {
    // queries the compass and assigns it throughout the app
    if (interactionID) {
      clearInteraction();
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
  }, [interactionID])


  return (
    <MainView>
      {
        !loading ? (
          compass.hasOwnProperty("id") ?  ( 
            session.hasOwnProperty("id") ? <CompassSelector  showAttachment={showItem} /> : <CompassViewer /> 
          ) : <div> sorry, this project does not exist !</div>
        ) :  <Loader />
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
      }{
        show && <ReviewLog closeWindow={() => setShow(false)}/>
      }
    </MainView>
  )
}
export default CompassPage;
