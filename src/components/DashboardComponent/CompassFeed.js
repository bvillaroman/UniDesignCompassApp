import React from 'react'
import { 
  Feed,
  CompassTitle,
  CompassCard,
  CompassDescription,
  GoToCompassButton
} from "../../styles/Dashboard"
import {globalStore} from "../../context/context"
import {navigate} from "gatsby"

const CompassFeed = (props) => {
  const { user,chooseCompass } = globalStore();

  const goToCompass = (compass) => {
    chooseCompass(compass)
    navigate("/Compass")
  }

  return (
    <Feed gridArea="feed">
      { user.compasses ? user.compasses.map((compass) => (
          <CompassCard elevation="xsmall">
            <CompassTitle>{compass.title}</CompassTitle>
            <CompassDescription>{compass.description}</CompassDescription>
            <GoToCompassButton label="Go To Compass" onClick={e => goToCompass(compass)} />
          </CompassCard>
      )) :<p>you have no compasses</p> }
    </Feed>
  )
}

export default CompassFeed; 