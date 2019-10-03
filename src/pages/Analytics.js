import React, { useState, useEffect } from "react";

import {  Loader } from "../styles/layout"
import { getCompass } from '../utils/queries'
import  queryStringParser from '../utils/queryStringParser'
import Loadable from "react-loadable"

const LoadableComponent = Loadable.Map({
  loader: {
    OverallArea: () => import("../components/AnalyticsComponents/OverallArea"),
    SelectedArea: () => import("../components/AnalyticsComponents/SelectedArea"),
    AnalyticsGrid: () => import("../styles/AnalyticsPage"),
  },
  loading: () => <Loader />,
  render(loaded, {steps, selectedSession, sessions}) {
    let OverallArea = loaded.OverallArea.default;
    let SelectedArea = loaded.SelectedArea.default;
    let AnalyticsGrid = loaded.AnalyticsGrid.AnalyticsGrid;
    return  (
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
});

export default (props) => {
  const [compass, setCompass] = useState("")
  const [steps, setSteps] = useState([])
  const [selectedSession, setSelectedSession] = useState({})
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const compass =queryStringParser(props.location.search).compassID
    setCompass(compass)
  }, [props.location.search])


  useEffect(() => {
    // queries the compass and assigns it throughout the app
    setLoading(true)
    if (compass) {
      getCompass(compass)
        .then((res) => {
          setLoading(false)
          setSteps(res.data.getCompass.steps.items)
          if (res.data.getCompass.sessions.items) {
            setSessions(res.data.getCompass.sessions.items)
            setSelectedSession(res.data.getCompass.sessions.items[1])
          }
        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        })
    }
  }, [compass])


  return ( 
    <>
      { 
        loading ? <Loader /> 
                : <LoadableComponent 
                    steps={steps} 
                    session={selectedSession} 
                    sessions={sessions}
                  />
      }
    </>
  )
}


