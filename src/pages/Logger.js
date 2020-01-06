import React, { useEffect, useContext } from "react";

import CompassLogger from "../components/CompassLogger"

import { CompassContext } from "../context/CompassPage/context"

import { updateInteractionSub, createCommentSub, createAttachmentSub } from "../utils/subscriptions"
import { getSession } from '../utils/queries'

import { MainView } from "../styles/CompassPage"

const CompassPage = (props) => {
  const { 
    compass,
    session, 
    clearInteraction, 
    clearSession, 
    updateSession 
  } = useContext(CompassContext);

  // subscription for any new project being created
  useEffect(() => {

    const updateInteraction = updateInteractionSub().subscribe((updatedInteraction) => {
      console.log(updatedInteraction)
      // const newUpdatedInteraction = updatedInteraction.value.data.onUpdateInteraction
      // getCompass(newUpdatedInteraction.session.compass.id)
      //   .then((res) => {
      //     updateCompass(res.data.getCompass);
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    })


    // every time an attachment is created, check if the sessions being viewed is the one being updated
    // if so, update the session
    const createAttachment = createAttachmentSub().subscribe({
      next: res => {
        const newAttachment = res.value.data.onCreateAttachment
        if (newAttachment.interaction.session.id === session.id) {        
          getSession(session.id) 
            .then((res) => {
              updateSession(res.data.getSession)
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    })

    
    // every time a comment is created, check if the sessions being viewed is the one being updated
    // if so, update the session
    // const createComment = createCommentSub().subscribe({
    //   next: res => {
    //     const newComment = res.value.data.onCreateComment
    //     if (newComment.session.id === session.id) {
    //       getSession(newComment.session.id)
    //         .then((res) => {
    //           updateSession(res.data.getSession)
    //         })
    //         .catch((err) => {
    //           console.log(err)
    //         })
    //     }
    //   }
    // })

    return () => {
      clearInteraction()
      clearSession()
      // createComment.unsubscribe()
      // createInteraction.unsubscribe()
      updateInteraction.unsubscribe()
      createAttachment.unsubscribe();
    }
    // eslint-disable-next-line
  }, [])
  

  return (
    <MainView>
      {
        compass.hasOwnProperty("id") ? 
          session.hasOwnProperty("id") ? <CompassLogger /> : ( 
            <div> Sorry, this Session does not exist !</div> 
          ) : <div> Sorry, this Project does not exist !</div> 
      }
    </MainView>
  )
}
export default CompassPage;
