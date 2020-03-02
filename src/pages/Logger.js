import React, { useEffect, useContext, useState, Suspense, lazy } from "react";
import styled from "styled-components"

import { CompassContext } from "../context/CompassPage/context"

// import { updateInteractionSub, createCommentSub, createAttachmentSub } from "../utils/subscriptions"
import { createAttachmentSub } from "../utils/subscriptions"
import { getSession, getInteraction } from '../utils/queries'
import queryStringParser from '../utils/queryStringParser'

import { MainView } from "../styles/CompassPage"
import { Loader } from "../styles/layout"

const CompassLogger = lazy(() => import( "../components/CompassLogger"));

const CompassPage = (props) => {
  const { 
    compass,
    session,
    updateSession,
    clearSession,
    updateInteractions, 
    clearInteractions,
    updateInteraction, 
    clearInteraction,
    newestInteraction, 
    addInteraction

  } = useContext(CompassContext);
  const [loading, setLoading] = useState(true)

  const { sessionID, interactionID } = queryStringParser(props.location.search)

  // subscription for any new project being created
  useEffect(() => {
  //   // const updateInteraction = updateInteractionSub().subscribe((updatedInteraction) => {
  //   //   const newUpdatedInteraction = updatedInteraction.value.data.onUpdateInteraction
  //   //   console.log(updatedInteraction)
  //   //   // if (newUpdatedInteraction.session.id === session.id) {        
  //   //   //   getSession(session.id) 
  //   //   //     .then((res) => {
            
  //   //   //       updateSession(res.data.getSession)
  //   //   //     })
  //   //   //     .catch((err) => {
  //   //   //       console.log(err)
  //   //   //     })
  //   //   // }
  //   // })

  //   const updateInteraction = updateInteractionSub().subscribe((updatedInteraction) => {
  //     console.log(updatedInteraction)
  //     // const newUpdatedInteraction = updatedInteraction.value.data.onUpdateInteraction
  //     // getCompass(newUpdatedInteraction.session.compass.id)
  //     //   .then((res) => {
  //     //     updateCompass(res.data.getCompass);
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log(err)
  //     //   })
  //   })


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

    
  //   // every time a comment is created, check if the sessions being viewed is the one being updated
  //   // if so, update the session
  //   // const createComment = createCommentSub().subscribe({
  //   //   next: res => {
  //   //     const newComment = res.value.data.onCreateComment
  //   //     if (newComment.session.id === session.id) {
  //   //       getSession(newComment.session.id)
  //   //         .then((res) => {
  //   //           updateSession(res.data.getSession)
  //   //         })
  //   //         .catch((err) => {
  //   //           console.log(err)
  //   //         })
  //   //     }
  //   //   }
  //   // })

    return () => {
      // clearSession()
      // updateInteraction.unsubscribe()
      createAttachment.unsubscribe();
    }
  // eslint-disable-next-line
  }, [])

  // setting up the session through url
  useEffect(() => {
    
    if (sessionID !== "") {
      clearSession();
      setLoading(true)
      getSession(sessionID)
        .then((res) => {          
          updateSession(res.data.getSession)
          let interactions = []
          if (res.data.getSession.interactions.items.length > 0) {
            interactions = res.data.getSession.interactions.items.sort((a,b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
          }
          updateInteractions(interactions);
          if (interactions.length > 0) addInteraction(interactions[0]);
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          clearSession();
          clearInteractions();
          console.log(err)
        })
    } else {
      clearSession();
      setLoading(false)
    }

  // eslint-disable-next-line
  }, [sessionID])

  // setting up the interaction through url
  useEffect(() => {
    if (interactionID !== "") {
      getInteraction(interactionID)
        .then((res) => {
          if(newestInteraction.id === res.data.getInteraction.id){
            addInteraction(res.data.getInteraction);
          }  else {
            updateInteraction(res.data.getInteraction);
          }
        })
        .catch((err) => {
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
        loading ? <Loader /> : (
          compass.hasOwnProperty("id") ? 
            session.hasOwnProperty("id") ? (
              <Suspense fallback={<Loader/>}>
                <CompassLogger /> 
              </Suspense>
            ) : ( 
            <ErrorContainer> Sorry, this Session does not exist !</ErrorContainer> 
            ) : <ErrorContainer> Sorry, this Project does not exist !</ErrorContainer> 
        )  
      }
    </MainView>
  )
}
export default CompassPage;

const ErrorContainer = styled.h4`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-self: center;
  flex-direction: column;
`