import React, { useContext, useState, useEffect } from 'react';
import { getCompass, getSession } from "../../utils/queries"
import { GlobalContext } from '../../context/context'
import {
  Feed,
  CompassTitle,
  CompassCard,
  CompassDescription,
  GoToCompassButton
} from "../../styles/Dashboard"

const Summary = () => {
  const { compass } = useContext(GlobalContext)
  const [sessions, setSession] = useState([])
  const [currentCompass, setCurrentCompass] = useState("")

  //Mounting once when the page loads
  useEffect(() => {
    getCompass(compass)
      //.then(res => getCurrentCompass(res.data.getCompass.name_of_compass))
      .then(res => {
        setSession(res.data.getCompass.sessions.items)
        setCurrentCompass(res.data.getCompass.name_of_compass)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h5>Summary for {currentCompass}</h5>
      {console.log(sessions)}
      <h6>{sessions.map(session => <div key={session.id}>{session.name_of_session}{session.createAt}</div>)}</h6>
      <Feed gridArea="feed">
        {sessions.map(session => (
          <CompassCard key={session.id} elevation="xsmall">
            <CompassTitle>{session.name_of_session}</CompassTitle>
            <CompassDescription>{session.description_of_session}</CompassDescription>
            <GoToCompassButton label="Summary of Session" />
          </CompassCard>
        ))}
      </Feed>
    </div>
  )
}

export default Summary;