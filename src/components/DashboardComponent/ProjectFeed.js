import React, { useEffect, useState } from 'react'
import {
  Feed,
  CompassTitle,
  ProjectCard,
  CompassDescription,
  GoToCompassButton
} from "../../styles/Dashboard"
import { Loader } from "../../styles/layout"
import { navigate } from "gatsby"

const CompassFeed = (props) => {
  const [compasses, setCompasses] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (props.compasses.length) {
      setLoading(false)
      setCompasses(props.compasses)
    }
  }, [props.compasses]);

  const goToCompass = (compass) => {
    navigate(`/Compass?c=${compass.id}`)
  }

  return (
    <Feed gridArea="feed">
      <section>
        {
          loading ? <Loader />
            : compasses ? compasses.map((compass, key) => (
              <ProjectCard
                key={key}
                elevation="xsmall"
                rows={['30%', '60%', '10%']}
                columns={['70%', '30%']}
                fill
                areas={[
                  // [column,row]
                  { name: 'header', start: [0, 0], end: [1, 0] },
                  { name: 'description', start: [0, 1], end: [1, 1] },
                  { name: 'navigate', start: [0, 2], end: [1, 2] },
                ]}
              >
                <CompassTitle gridArea="header">{compass.name_of_compass}</CompassTitle>
                <CompassDescription gridArea="description">{compass.description_of_compass}</CompassDescription>
                <GoToCompassButton gridArea="navigate" label="Go To Compass" onClick={e => goToCompass(compass)} />
              </ProjectCard>
            )
            )
              : error ? <p>{error}</p>
                : <p>you have no compasses</p>
        }
      </section>
    </Feed>
  )
}

export default CompassFeed; 