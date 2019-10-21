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
import { navigate } from "gatsby"
import {dateFormatter} from "../../utils/translateTime"

const CompassFeed = (props) => {
  const [compasses, setCompasses] = useState([])

  useEffect(() => {
    if (props.compasses.length > 0) {
      setCompasses(props.compasses)
    }
  }, [props.compasses]);

  const goToCompass = (compass) => {
    navigate(`/Compass?c=${compass.id}`)
  }

  return (
    <ProjectFeedContainer>
      <DashboardSectionHeader> Past Projects </DashboardSectionHeader>
        {
          compasses.length > 0 ? (
              <>
                <ProjectFeedHeader>
                  <CompassTitle >Name</CompassTitle>
                  <CompassDescription >Description</CompassDescription>
                  <CompassDate> Created On</CompassDate>
                </ProjectFeedHeader>
                <Feed gridArea="feed"> 
                  {
                    compasses.map((compass, key) => (
                      <ProjectCard onClick={e => goToCompass(compass)} key={key}>
                        <CompassTitle >{compass.name_of_compass}</CompassTitle>
                        <CompassDescription >{compass.description_of_compass}</CompassDescription>
                        <CompassDate>{dateFormatter(compass.createdAt)}</CompassDate>
                      </ProjectCard>
                    ))
                  }
                </Feed>
              </>
          ) : <p>you have no compasses</p>
        }
    </ProjectFeedContainer>
  )
}

export default CompassFeed; 