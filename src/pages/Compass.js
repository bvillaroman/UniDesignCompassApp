// import React, { useState, useEffect, useContext } from "react";
import React, { useEffect, useContext } from "react";

import CompassViewer from "../components/CompassComponents/CompassViewer"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import ReviewLog from "../components/ModalComponents/ReviewLog"

import { CompassContext } from "../context/CompassPage/context"
import { GlobalContext } from "../context/context"
import { ReviewModalContext } from "../context/ReviewModal/context"
import { createSessionSub, updateInteractionSub, createCommentSub } from "../utils/subscriptions"
import { getCompass, getInteraction, getSession } from '../utils/queries'
import queryStringParser from '../utils/queryStringParser'

import { MainView } from "../styles/CompassPage"

const CompassPage = (props) => {
  const { user } = useContext(GlobalContext);
  const { compass, session, clearInteraction, clearSession, updateCompass, updateSession } = useContext(CompassContext);
  const { updateShowModal, showModal, updateInteraction } = useContext(ReviewModalContext);

  const showItem = (attachment, src) => {
    // setAttachment(attachment)
    // setSource(src)
  }
  // subscription for any new project being created
  useEffect(() => {
    const createSession = createSessionSub().subscribe({
      next: res => {
        const newSession = res.value.data.onCreateSession
        if (newSession.compass.owner.id === user.id) {
          getCompass(newSession.compass.id)
            .then((res) => {
              updateCompass(res.data.getCompass);
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    });

    const updateInteraction = updateInteractionSub().subscribe((updatedInteraction) => {
      const newUpdatedInteraction = updatedInteraction.value.data.onUpdateInteraction
      getCompass(newUpdatedInteraction.session.compass.id)
        .then((res) => {
          updateCompass(res.data.getCompass);
        })
        .catch((err) => {
          console.log(err)
        })
    })

    // const createComment = createCommentSub().subscribe({
    //   next: res => {
    //     console.log(res)
    //     const newComment = res.value.data.onCreateComment
    //   }
    // })

    return () => {
      clearInteraction()
      clearSession()
      // createComment.unsubscribe()
      createSession.unsubscribe()
      updateInteraction.unsubscribe()
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const { interactionID } = queryStringParser(props.location.search)
    if (interactionID) {
      getInteraction(interactionID)
        .then((res => {
          updateInteraction(res.data.getInteraction);
          updateShowModal(true)
        }))
        .catch((err) => console.log(err))
    }
    // eslint-disable-next-line
  }, [props.location.search])

  return (
    <MainView>
      {
        session.hasOwnProperty("id") ? <CompassSelector showAttachment={showItem} /> : (
          compass.hasOwnProperty("id") ? <CompassViewer /> : <div> sorry, this project does not exist !</div>
        )
      }
      {showModal && <ReviewLog />}
    </MainView>
  )
}
export default CompassPage;
