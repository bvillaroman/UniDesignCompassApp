 import React from "react";
import { 
  SessionView, 
  SessionSection, 
  SessionTitle,
} from "../../../styles/CompassPage"
import Logger from "./Logger"
import InteractionFeed from "./InteractionFeed"
export default ({ session, interactions,showAttachment,interaction,setInteraction, increaseClock }) => {
  return (
    <SessionView  gridArea="session" >
      <SessionSection>
        <SessionTitle >
          {session.name_of_session} 
        </SessionTitle>
      </SessionSection>
        { 
          interaction.id && ( 
            <Logger 
              increaseClock={increaseClock} 
              setInteraction={setInteraction} 
              interaction={interaction} 
              showAttachment={showAttachment}
            /> 
          ) 
        }
      <InteractionFeed interactions={interactions} goToInteraction={setInteraction}/>
    </SessionView>
  ) 
};