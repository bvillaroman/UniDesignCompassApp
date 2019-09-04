import React from "react";
import {Clock} from "grommet"
import { SessionView } from "../../../styles/CompassPage"
import {userCompassPage} from "../../../context/CompassPage/context"

const SessionSideBar = (props) => {
  const { currentSession, currentStep, interaction } = userCompassPage();
    return (
      <SessionView gridArea="session">
        {currentSession.title}
        <Clock type="digital" />
        {
          currentStep.title ? (
            <>
              {currentStep.title}
              <Clock type="digital" />
              <br/>
              <br/>  
              {currentStep.description}
              <br/>
              <br/>
              <p>Attachments</p>
            </>
          ) : ''
        }
      </SessionView>
  )
}

export default SessionSideBar;