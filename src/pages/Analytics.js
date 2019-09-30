import React, { useState, useContext, useEffect } from "react";

import {  AnalyticsGrid, } from "../styles/AnalyticsPage"
import { GlobalContext } from "../context/context"

import OverallArea from "../components/AnalyticsComponents/OverallArea"
import SelectedArea from "../components/AnalyticsComponents/SelectedArea"
import { getCompass } from '../utils/queries'

export default (props) => {
  const {session = "", compass = ""} = useContext(GlobalContext);
  const [steps, setSteps] = useState([])
  const [selectedSession, setSelectedSession] = useState({})
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    // queries the compass and assigns it throughout the app
    if (compass) {
      getCompass(compass)
        .then((res) => {
          setSteps(res.data.getCompass.steps.items)
          if (res.data.getCompass.sessions.items) {
            setSessions(res.data.getCompass.sessions.items)
            setSelectedSession(res.data.getCompass.sessions.items[1])
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [compass])


  return (
    <AnalyticsGrid 
      rows={['40%', '60%']}
      columns={['60%', '40%']}
      fill
      areas={[
        { name: 'selected', start: [0, 0], end: [0, 1] },
        { name: 'overall', start: [1, 0], end: [1, 1] },
      ]} 
    >
      <SelectedArea steps={steps} session={selectedSession} sessions={sessions}/>
      <OverallArea steps={steps} sessions={sessions}/>
    </AnalyticsGrid>
  )
}
