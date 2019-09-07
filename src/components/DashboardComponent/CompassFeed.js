import React, { useEffect,useState } from 'react'
import {
  Feed,
  CompassTitle,
  CompassCard,
  CompassDescription,
  GoToCompassButton
} from "../../styles/Dashboard"
import { globalStore } from "../../context/context"
import { getCompasses } from "../../utils/queries"
import { navigate } from "gatsby"

const CompassFeed = (props) => {
  const {  chooseCompass } = globalStore();
  const [compasses,setCompasses] = useState([])

  useEffect(() => {
    getCompasses()
      .then((compasses) => {
        setCompasses(compasses)
      });
  }); 

  const goToCompass = (compass) => {
    chooseCompass(compass)
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