import React,{useContext} from "react";
import { 
  SessionView, 
  SessionSection, 
  SessionTitle,
} from "../../../styles/CompassPage"
import Logger from "./Logger"
import InteractionFeed from "./InteractionFeed"
import { CompassContext } from "../../../context/CompassPage/context"

export default ({showAttachment, setInteraction}) => {
  const {session} = useContext(CompassContext)

  return (
    <SessionView  gridArea="session" >
      <SessionSection>
        <SessionTitle >
          {session.name_of_session} 
        </SessionTitle>
      </SessionSection> 
        <Logger  showAttachment={showAttachment} />
    </SessionView>
  ) 
};