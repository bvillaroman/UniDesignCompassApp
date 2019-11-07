import React, { useState, useContext, useEffect } from 'react'
import { CompassContext } from "../../../context/CompassPage/context"
import { createSession, deleteSession } from "../../../utils/mutations"
import { createSessionSub } from "../../../utils/subscriptions"
import { dateFormatter, timeSorter } from "../../../utils/translateTime"
import {navigate} from "gatsby"
import { AddCircle} from 'grommet-icons';

import {
  SCHeader,
  SCBody,
  SCContainer,
  SessionRow,
  SessionRowTitle,
  SessionRowDate,
  SCAddSession,
  SessionRowMore,
  SessionRowMoreButton,
  SessionRowHeader
} from "../../../styles/CompassPage"

const SessionCreator = (props) => {
  const {compass, updateSessions} = useContext(CompassContext)
  const [pastSessions, setPastSessions] = useState([])
  const [selectedSession, setSelectedSession] = useState({})

  // if a new project is created, add it to existing projects
  // useEffect(() => {
  //   if(newestProject !== {}) {
  //     if (compasses.length) setCompasses([newestProject, ...compasses]) 
  //     else setCompasses([newestProject]) 
  //   }
  // }, [newestProject])

  useEffect(() => {
    if(compass.hasOwnProperty("id")){
      setPastSessions(compass.sessions.items.sort(timeSorter))
    }  
  }, [compass])

  const currentCompassId = compass.id

  const goToSession = (session) => {
    navigate(`/Compass/?c=${currentCompassId}&s=${session}`)
  }

  const sendForm = (e) => {
    createSession("untitled", " ", currentCompassId)
      .then((result) => {
        navigate(`/Compass/?c=${currentCompassId}&s=${result.data.createSession.id}`)
      })
      .catch(err => console.log(err))
  }

  const onDelete = (session) => {
    deleteSession(session.id)
      .then(res => {
        const newSessions = compass.sessions.items.filter(session => session.id !== res.data.deleteSession.id)
        updateSessions(newSessions)
      })
  
  }

  return (
    <SCContainer>
      <SCHeader> 
        <p>Sessions </p>
        <SCAddSession 
          onClick={sendForm} 
          label="New Session" 
          icon={<AddCircle/>}
        />
      </SCHeader>
      
      <SCBody>
        <SessionRowHeader>
          <SessionRowTitle>Title</SessionRowTitle>
          <SessionRowDate>Created on</SessionRowDate>
          <SessionRowMore></SessionRowMore>
        </SessionRowHeader>
        {
          pastSessions !== [] ? pastSessions.map((session, key) => (
              <SessionRow key={key}>
                <SessionRowTitle onClick={(e) => goToSession(session.id)}>{session.name_of_session}</SessionRowTitle>
                <SessionRowDate onClick={(e) => goToSession(session.id)}>{dateFormatter(session.createdAt)}</SessionRowDate>
                <SessionRowMore><SessionRowMoreButton session={session} onDelete={e => onDelete(session)} /></SessionRowMore>
              </SessionRow>
            )
          ) : <p>You have no Sessions!</p>
        }
      </SCBody>
    </SCContainer>
  )
}

export default SessionCreator; 