import React from "react";
import LogPage from "../components/CompassComponents/LogPage"

import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import { CompassPageProvider, CompassPageContext } from "../context/CompassPage/context"
import { MainView } from "../styles/CompassPage"

const CompassPage = (props) => {
  
  return (
    <CompassPageProvider>
      <CompassPageContext.Consumer>
        {
          ({ currentSession, currentInteraction }) => (
            <MainView>
              {
                currentInteraction.step.name_of_step ? <LogPage /> :
                currentSession.id ? <CompassSelector /> :
                <SessionCreator />
              }
            </MainView>
          )
        }
      </CompassPageContext.Consumer>
    </CompassPageProvider>
  )
}
export default CompassPage;
