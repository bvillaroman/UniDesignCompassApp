import React, { useState, useEffect, useContext } from "react";

import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"

import {CompassContext} from "../context/CompassPage/context"
import queryStringParser from '../utils/queryStringParser'
import {getCompass,getSession,getInteraction} from '../utils/queries'

import { 
  MainView, 
  LayerView, 
  AttachmentContainer ,
  AttachmentPreview,
  AttachmentButtonContainer,
  CloseButton,
  DownloadButton
} from "../styles/CompassPage"
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
    clearInteraction
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
    }
  }, [compassID])

  useEffect(() => {
    // queries the compass and assigns it throughout the app
    if (sessionID) {
      getSession(sessionID)
        .then((res) => {
          setLoading(false)
          updateSession(res.data.getSession)
        })
        .catch((err) => {
          setLoading(false)
          clearSession();
          console.log(err)
        })
    }
  }, [sessionID])

  useEffect(() => {
    // queries the compass and assigns it throughout the app
    if (interactionID) {
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
    }
  }, [interactionID])


  return (
    <MainView>
      {
        loading ? <Loader /> : (
          session.hasOwnProperty("id") ? (
            <CompassSelector  showAttachment={showItem} />
          ) : <SessionCreator compass={compass}/>
        )
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
