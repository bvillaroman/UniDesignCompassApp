 import React, {useState, useEffect, useContext}  from "react";
import { 
  SessionView, 
  SessionAccordion, 
  SessionSection, 
  SessionDescription ,
  StepSection,
  SessionClock,
} from "../../../styles/CompassPage"
import { getSession } from "../../../utils/queries"
import { updateInteraction, uploadAttachment } from '../../../utils/mutations'
import Logger from "./Logger"
import InteractionFeed from "./InteractionFeed"
import Attachment from "../LogPage/Attachment"
import {GlobalContext} from "../../../context/context"

const SessionBar = ({ attachments, showAttachment, interaction = {}, setInteraction}) => {
  const { session } = useContext(GlobalContext);
  const [currentSession,setCurrrentSession] = useState({})
  const [pastLogs, setPastLogs] = useState([]);

  useEffect(() => {
    getSession(session)
      .then((res) => {
        setCurrrentSession(res.data.getSession)
        setPastLogs(res.data.getSession.interactions.items.sort((a,b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }))
        // const interactionAttachments =  res.data.getSession.interactions ? res.data.getSession.interactions.items.map((item) => item.attachments.items).flat() : []
        // setAttachments(interactionAttachments)
      })
  },[session])

  const translateTime = (secs) => {
    const sec_num = parseInt(secs, 10)
    const hours   = Math.floor(sec_num / 3600)
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60

    return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":") 
  }


  return (
    <SessionView  gridArea="session" >
      <SessionSection>
        <SessionAccordion  label={<div> {currentSession.name_of_session} {translateTime(0)} </div>}>
          {/* <SessionDescription >
            {currentSession.description_of_session}
          </SessionDescription> */}
        </SessionAccordion>
      </SessionSection> 
      { interaction.id && ( <Logger interaction={interaction} /> ) }
      <InteractionFeed interactions={pastLogs} goToInteraction={setInteraction}/>
      {/* <SessionAttachments gridArea="attachments">
        <p>Past Logs</p>
      </SessionAttachments> */}
    </SessionView>
  ) 
};
export default SessionBar;
