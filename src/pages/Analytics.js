import React, { useState, useEffect, useContext } from "react";
import { Loader } from "../styles/layout"
import Loadable from "react-loadable"
import HeaderInfo from "../components/AnalyticsComponents/HeaderInfo"

import { CompassContext } from "../context/CompassPage/context"

const LoadableComponent = Loadable.Map({
  loader: {
    // OverallArea: () => import("../components/AnalyticsComponents/OverallArea"),
    SelectedArea: () => import("../components/AnalyticsComponents/SelectedArea"),
    AnalyticsGrid: () => import("../styles/AnalyticsPage"),
  },
  loading: () => <Loader />,
  render(loaded, { steps, selectedSession, sessions }) {
    // let OverallArea = loaded.OverallArea.default;
    let SelectedArea = loaded.SelectedArea.default;
    let AnalyticsGrid = loaded.AnalyticsGrid.AnalyticsGrid;
    return (
      <div style={{ width: '100%' }}>
        <HeaderInfo />
        <AnalyticsGrid
          rows={['40%', '60%']}
          columns={['60%', '40%']}
          fill
          areas={[
            { name: 'selected', start: [0, 0], end: [0, 1] },
            { name: 'overall', start: [1, 0], end: [1, 1] },
          ]}
        >
          <SelectedArea steps={steps} session={selectedSession} sessions={sessions} />
          {/* <OverallArea steps={steps} sessions={sessions} /> */}
        </AnalyticsGrid>
      </div>
    )
  }
});

export default (props) => {
  const { compass, session } = useContext(CompassContext);

  const [steps, setSteps] = useState([])
  const [selectedSession, setSelectedSession] = useState({})
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)

  // handle compass data
  useEffect(() => {
    // queries the compass and assigns it throughout the app
    setLoading(true)
    if (compass.hasOwnProperty("id")) {
      setSteps(compass.steps.items)
      if (compass.sessions.items) setSessions(compass.sessions.items)
    }
    setLoading(false)

    // eslint-disable-next-line
  }, [compass])

  // handle sessopm data
  useEffect(() => {
    if (compass.hasOwnProperty("id")) {
      setLoading(true)
      if (session.hasOwnProperty("id")) setSelectedSession(session)
      else setSelectedSession(compass.sessions.items[1])
      setLoading(false)
    }

    // eslint-disable-next-line
  }, [session])


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


