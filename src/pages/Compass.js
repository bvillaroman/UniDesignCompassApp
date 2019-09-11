import React from "react";
import LogPage from "../components/CompassComponents/LogPage"

import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import { MainView } from "../styles/CompassPage"
import { globalStore } from "../context/context"

const CompassPage = (props) => {
  const {session, interaction} = globalStore()

  return (
    <MainView>
      {
        session ? <LogPage /> :
        interaction ? <CompassSelector /> :
        <SessionCreator />
      }
    </MainView>
  )
}
export default CompassPage;
