import React, { useContext, useEffect } from "react";
import styled from "styled-components"

import { CompassContext } from "../../../context/CompassPage/context"
// import { GlobalContext } from "../../../context/context"

import EditLogger from "./EditingLogger"
import ScribeLogger from "./ScribeLogger"
import PauseLogger from "./PauseLogger"

export const Logger = (props) => {
  // const { interactionAdded, compass} = useContext(CompassContext);
  const { interactionUpdated, sessionPaused, interaction, pauseSession, continueSession} = useContext(CompassContext);
  // const { user } = useContext(GlobalContext)

  // const previousFooRef = useRef(newestInteraction);

  // const scribe = compass.scribe.email === user.email

  // const intialStep = {
  //   name_of_step: "Notes",
  //   color: "black",
  // };

  useEffect(() => {
    if(
      interaction.hasOwnProperty("step") 
      && interaction.step.hasOwnProperty("name_of_step")
      && interaction.step.name_of_step === "Pause"
      ) {
        pauseSession()
      } else {
        continueSession()
      }
  },[interaction])
  return (
    <LoggerGrid className="logger-grid-help">
      { 
        sessionPaused ? <PauseLogger /> : (
          ( 
            interactionUpdated ? <EditLogger setLoading={props.setLoading} loading={props.loading} /> 
            : <ScribeLogger setLoading={props.setLoading} loading={props.loading} />
          )
        )
        
      }
    </LoggerGrid>
  );
}

export default Logger;

const LoggerGrid = styled.div`
  width: 90%;
  min-height: 4rem;
  margin: 1rem auto;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;    
`

