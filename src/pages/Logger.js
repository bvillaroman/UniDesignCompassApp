import React, { useEffect, useContext,  Suspense, lazy } from "react";
import styled from "styled-components"

import { CompassContext } from "../context/CompassPage/context"

import { updateInteractionSub, createCommentSub, createAttachmentSub } from "../utils/subscriptions"
import { getSession } from '../utils/queries'

import { MainView } from "../styles/CompassPage"
import { Loader } from "../styles/layout"

const CompassLogger = lazy(() => import( "../components/CompassLogger"));

const CompassPage = (props) => {
  const { 
    compass,
    session, 
    clearSession, 
    updateSession 
  } = useContext(CompassContext);

  // subscription for any new project being created
  useEffect(() => {

    // const updateInteraction = updateInteractionSub().subscribe((updatedInteraction) => {
    //   const newUpdatedInteraction = updatedInteraction.value.data.onUpdateInteraction
    //   console.log(updatedInteraction)
    //   // if (newUpdatedInteraction.session.id === session.id) {        
    //   //   getSession(session.id) 
    //   //     .then((res) => {
            
    //   //       updateSession(res.data.getSession)
    //   //     })
    //   //     .catch((err) => {
    //   //       console.log(err)
    //   //     })
    //   // }
    // })

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
      clearSession()
      updateInteraction.unsubscribe()
      createAttachment.unsubscribe();
    }
    // eslint-disable-next-line
  }, [])
  

  return (
    <MainView>
      {
        compass.hasOwnProperty("id") ? 
          session.hasOwnProperty("id") ? (
            <Suspense fallback={<Loader/>}>
              <CompassLogger /> 
            </Suspense>
          ) : ( 
            <Loader />
            // <ErrorContainer> Sorry, this Session does not exist !</ErrorContainer> 
          ) : <Loader/>
          // <ErrorContainer> Sorry, this Project does not exist !</ErrorContainer> 
      }
    </MainView>
  )
}
export default CompassPage;

const ErrorContainer = styled.h4`
  width: 100&;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-self: center;
`