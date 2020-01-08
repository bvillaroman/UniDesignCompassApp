import React, { useContext  } from "react";
import styled from "styled-components"

import { CompassContext } from "../../../context/CompassPage/context"
// import { GlobalContext } from "../../../context/context"

import EditLogger from "./EditingLogger"
import ScribeLogger from "./ScribeLogger"

export const Logger = (props) => {
  // const { interactionAdded, compass} = useContext(CompassContext);
  const { interactionAdded, interactionUpdated } = useContext(CompassContext);
  // const { user } = useContext(GlobalContext)

  // const previousFooRef = useRef(newestInteraction);

  // const scribe = compass.scribe.email === user.email

  // const intialStep = {
  //   name_of_step: "Notes",
  //   color: "black",
  // };

  return (
    <LoggerGrid>
      { interactionAdded && <ScribeLogger setLoading={props.setLoading} loading={props.loading}/> }
      { interactionUpdated && <EditLogger setLoading={props.setLoading} loading={props.loading}/> }
    </LoggerGrid>
  );
}

export default Logger;

const LoggerGrid = styled.div`
  width: 90%;
  min-height: 4rem;
  height: auto;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`

