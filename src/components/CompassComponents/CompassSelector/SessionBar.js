 import React, {useState, useEffect}  from "react";
import { 
  SessionView, 
  SessionSection, 
  LoggerTitle ,
  SessionTitle,
  SessionClock,
} from "../../../styles/CompassPage"
import Logger from "./Logger"
import InteractionFeed from "./InteractionFeed"
const SessionBar = ({ session, interactions,showAttachment,interaction,setInteraction }) => {
  const [currentSession,setCurrrentSession] = useState({})

  useEffect(() => {
    setCurrrentSession(session)
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
        <SessionTitle >
          {currentSession.name_of_session} 
        </SessionTitle>
        <SessionClock >
          {translateTime(0)}
        </SessionClock>
      </SessionSection>
      { interaction.id && ( <Logger setInteraction={setInteraction} interaction={interaction} showAttachment={showAttachment}/> ) }
      <InteractionFeed interactions={interactions} goToInteraction={setInteraction}/>
    </SessionView>
  ) 
};
export default SessionBar;
