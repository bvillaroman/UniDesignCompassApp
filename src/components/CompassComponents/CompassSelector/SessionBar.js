 import React, {useState, useEffect}  from "react";
import { 
  SessionView, 
  SessionAccordion, 
  SessionSection, 
  SessionDescription ,
  StepSection,
  SessionClock,
} from "../../../styles/CompassPage"
import Logger from "./Logger"
import InteractionFeed from "./InteractionFeed"
import Attachment from "./Attachment"
const SessionBar = ({ session, interactions,showAttachment,interaction,setInteraction }) => {
  const [currentSession,setCurrrentSession] = useState({})

  useEffect(() => {
    setCurrrentSession(session)
    // const interactionAttachments =  res.data.getSession.interactions ? res.data.getSession.interactions.items.map((item) => item.attachments.items).flat() : []
    // setAttachments(interactionAttachments)
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
      { interaction.id && ( <Logger setInteraction={setInteraction} interaction={interaction} showAttachment={showAttachment}/> ) }
      <InteractionFeed interactions={interactions} goToInteraction={setInteraction}/>
      {/* <SessionAttachments gridArea="attachments">
        <p>Past Logs</p>
      </SessionAttachments> */}
    </SessionView>
  ) 
};
export default SessionBar;
