import React, { useState, useEffect } from "react";

import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
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
  const [compassID, setCompassID] = useState("")
  const [sessionID, setSessionID] = useState("")
  const [interactionID, setInteractionID] = useState("")
  const [compass, setCompass] = useState("")
  const [session, setSession] = useState("")
  const [interaction, setInteraction] = useState("")
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
          setLoading(false)
          setCompass(res.data.getCompass)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        })
    }
  }, [compassID])

  useEffect(() => {
    // queries the compass and assigns it throughout the app
    if (sessionID) {
      getSession(sessionID)
        .then((res) => {
          setLoading(false)
          setSession(res.data.getSession)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        })
    }
  }, [sessionID])

  useEffect(() => {
    // queries the compass and assigns it throughout the app
    if (interactionID) {
      getInteraction(interactionID)
        .then((res) => {
          setLoading(false)
          setInteraction(res.data.getInteraction)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        })
    }
  }, [interactionID])

  return (
    <MainView>
      {
        loading ? <Loader /> : (
          session ? (
            <CompassSelector compass={compass} session={session} interaction={interaction} showAttachment={showItem}/>
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
