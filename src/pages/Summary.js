import React, { useContext, useEffect, useState } from "react";
import SummarySession from "../components/SummaryComponents/SummarySession/";
import SummaryLog from "../components/SummaryComponents/SummaryLog/";
import { CompassContext } from "../context/CompassPage/context";
import { ReviewModalContext } from "../context/ReviewModal/context";
import ReviewLog from "../components/ModalComponents/ReviewLog";
import { updateInteractionSub } from "../utils/subscriptions"
import { updateCompass } from "../utils/mutations"
import { updateSession } from "../utils/mutations"
import { Iteration } from "grommet-icons";

const SummaryPage = (props) => {
  const { compass, session, interaction, update, updateSessions } = useContext(CompassContext);
  const { showModal } = useContext(ReviewModalContext);
  const [list, setList] = useState([]);
  const [updateLog, setUpdatedLog] = useState([]);

  // useEffect(() => {
  //   const subscriber = updateInteractionSubTest().subscribe({
  //     next: res => {
  //       console.log(res)
  //     }
  //   });

  //   return () => subscriber.unsubscribe()
  // }, [])

  useEffect(() => {
    const sub = updateInteractionSub().subscribe((updatedInteraction) => {
      // console.log(updatedInteraction.value.data.onUpdateInteraction)
      const newUpdatedInteraction = updatedInteraction.value.data.onUpdateInteraction
      // console.log(newUpdatedInteraction)
      setUpdatedLog(newUpdatedInteraction)
    })

    return () => {
      sub.unsubscribe();
    }
  }, [])

  useEffect(() => {
    if (updateLog.hasOwnProperty("id")) {
      // console.log("UpdateLog: ", updateLog)
      const updatedInteractionSessionID = updateLog.session.id
      // console.log("Session ID: ", updatedInteractionSessionID)


      // const oldInteractions = compass.sessions.items find w (SessionID).interactions.items 
      const allSession = compass.sessions.items
      // console.log(allSession)

      const oldInteractions = compass.sessions.items.find((session) => session.id === updatedInteractionSessionID)
      // console.log("Old Interactions: ", typeof oldInteractions)

      const newInteraction = oldInteractions.interactions.items.map((interaction) => {
        if (updateLog.id === interaction.id) {
          return updateLog
        } else {
          return interaction
        }
      })
      // console.log("new interaction: ", newInteraction)

      // const oldSession = compass.sessions.items.find w (SessionID)
      // console.log(compass)

      const prevSessionIndex = compass.sessions.items.findIndex((session) =>
        session.id === updatedInteractionSessionID
      )
      let oldSessionOrInteraction = compass.sessions.items[prevSessionIndex].interactions.items
      // console.log("pre assigning: ", compass.sessions.items)
      compass.sessions.items[prevSessionIndex].interactions.items = newInteraction
      // console.log("post assinging: ", compass.sessions.items)


      // const newSession = oldSession.interactions.items = newInteractions

      console.log(compass)
      // newSessions = compass.sessions.items.find(session => session.id === newSession.id) session = newSession
      // const newCompass = {
      //  ...compass,
      //  sessions {
      //    items : newSession
      //  }
      // }
      updateSessions(compass.sessions.items)
      // const newCompass = {
      //   ...compass,
      //   sessions
      // }
    }
  }, [updateLog])

  return (
    <>
      {
        interaction.hasOwnProperty("id") ? (
          < SummaryLog />
        ) : <SummarySession />
      }
      {showModal && <ReviewLog />}
    </>
  )
};

export default SummaryPage;
