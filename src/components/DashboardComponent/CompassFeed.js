import React, { useEffect,useState, useContext } from 'react'
import {
  Feed,
  CompassTitle,
  CompassCard,
  CompassDescription,
  GoToCompassButton
} from "../../styles/Dashboard"
import { getCompasses } from "../../utils/queries"
import { navigate } from "gatsby"
import {GlobalContext} from "../../context/context"

const CompassFeed = (props) => {
  const {selectCompass} = useContext(GlobalContext);
  const [compasses,setCompasses] = useState([])

  useEffect(() => {
    getCompasses()
      .then((compasses) => {
        setCompasses(compasses)
      });
  }, []); 

  const goToCompass = (compass) => {
    selectCompass(compass.id)
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