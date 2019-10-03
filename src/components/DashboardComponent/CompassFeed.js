import React, { useEffect,useState, useContext } from 'react'
import {
  Feed,
  CompassTitle,
  ProjectCard,
  CompassDescription,
  GoToCompassButton
} from "../../styles/Dashboard"
import { Loader } from "../../styles/layout"
import { getCompasses } from "../../utils/queries"
import { navigate } from "gatsby"
import {GlobalContext} from "../../context/context"

const CompassFeed = (props) => {
  const {selectCompass,user} = useContext(GlobalContext);
  const [compasses,setCompasses] = useState([])
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    getCompasses()
      .then((compasses) => {

        setCompasses(compasses.filter((compass) => compass.admins.includes(user.email)))
        // console.log(compasses)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      });
  }, []); 

  const goToCompass = (compass) => {
    selectCompass(compass.id)
    navigate("/Compass")
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
            rows={['30%', '60%','10%']}
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