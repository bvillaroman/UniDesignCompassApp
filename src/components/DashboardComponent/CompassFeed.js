import React, { useEffect,useState } from 'react'
import {
  Feed,
  CompassTitle,
  CompassCard,
  CompassDescription,
  GoToCompassButton
} from "../../styles/Dashboard"
import { getCompasses } from "../../utils/queries"
import { navigate } from "gatsby"

const CompassFeed = (props) => {
  const [compasses,setCompasses] = useState([])

  useEffect(() => {
    getCompasses()
      .then((compasses) => {
        setCompasses(compasses)
      });
  }, []); 

  const goToCompass = (compass) => {
    localStorage.setItem('compass', compass.id)
    navigate("/Compass")
  }

  return (
    <Feed gridArea="feed">
      {
        compasses ? compasses.map((compass, key) => (
          <CompassCard key={key} elevation="xsmall">
            <CompassTitle>{compass.name_of_compass}</CompassTitle>
            <CompassDescription>{compass.description_of_compass}</CompassDescription>
            <GoToCompassButton label="Go To Compass" onClick={e => goToCompass(compass)} />
          </CompassCard>
      )) :<p>you have no compasses</p> 
      }
    </Feed>
  )
}

export default CompassFeed; 