import React, { useEffect } from "react";
import LogPage from "../components/CompassComponents/LogPage"

import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import { MainView } from "../styles/CompassPage"
import { globalStore } from "../context/context"

const CompassPage = (props) => {
  const {session, interaction,selectCompass, select} = globalStore()

  return (
    <MainView>
      {
        interaction ? <LogPage /> :
        session ? <CompassSelector /> :
        <SessionCreator />
      }
    </MainView>
  )
}
export default CompassPage;
