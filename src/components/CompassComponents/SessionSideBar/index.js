import React from "react";
import { SessionView } from "../../../styles/CompassPage"
import {userCompassPage} from "../../../context/CompassPage/context"

const SessionSideBar = (props) => {
  const { currentSession } = userCompassPage();
    return (
      <SessionView gridArea="session">
        {currentSession.title}
      </SessionView>
  )
}

export default SessionSideBar;