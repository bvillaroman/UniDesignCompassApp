import React, { useEffect, useState } from 'react'
import {
  Feed,
  CompassTitle,
  ProjectCard,
  CompassDescription,
  CompassDate,
  DashboardSectionHeader,
  ProjectFeedContainer,
  ProjectFeedHeader
} from "../../styles/Dashboard"
import { Loader } from "../../styles/layout"
import { navigate } from "gatsby"
import {dateFormatter} from "../../utils/translateTime"

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
    <ProjectFeedContainer>
      <DashboardSectionHeader> Past Projects </DashboardSectionHeader>
      <ProjectFeedHeader>
        <CompassTitle >Name</CompassTitle>
        <CompassDescription >Description</CompassDescription>
        <CompassDate> Created On</CompassDate>
      </ProjectFeedHeader>
      <Feed gridArea="feed">
        {
          loading ? <Loader />
            : compasses ? compasses.map((compass, key) => (
              <ProjectCard onClick={e => goToCompass(compass)}>
                <CompassTitle >{compass.name_of_compass}</CompassTitle>
                <CompassDescription >{compass.description_of_compass}</CompassDescription>
                <CompassDate>{dateFormatter(compass.createdAt)}</CompassDate>
              </ProjectCard>
            )
            )
              : error ? <p>{error}</p>
                : <p>you have no compasses</p>
        }
      </Feed>
    </ProjectFeedContainer>
    
  )
}

export default CompassFeed; 