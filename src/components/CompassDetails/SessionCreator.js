import React, { useState, useContext, useEffect } from 'react'
import { CompassContext } from "../../context/CompassPage/context"
import { createSession, deleteSession, updateSession } from "../../utils/mutations"
import { getCompass } from "../../utils/queries"
import { dateFormatter, timeSorter } from "../../utils/translateTime"
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
  SessionRowHeader,
  EditProjectButton
} from "../../styles/CompassPage"
import { InputField } from "../../styles/Form"

const SessionCreator = (props) => {
  const {compass, updateCompass} = useContext(CompassContext)
  const [pastSessions, setPastSessions] = useState([])
  const [selectedSession, setSelectedSession] = useState({})
  const [title, setTitle] = useState("")

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
        getCompass(res.data.deleteSession.compass.id)
          .then((res) => updateCompass(res.data.getCompass))
          .catch((err) => console.log(err))
      })
      .catch(err => console.log(err))
  }

  const onEdit = (session) => {
    setSelectedSession(session)
    setTitle(session.name_of_session)
  }

  const saveTitle = (session) => {
    updateSession(session.id, title, session.description_of_session)
    .then((res) => {
      getCompass(res.data.updateSession.compass.id)
        .then((res) => {
          updateCompass(res.data.getCompass)
          setSelectedSession({})
          setTitle("")
        })
        .catch((err) => console.log(err))
    })
    .catch(err => console.log(err))
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
              <SessionRow active={selectedSession === session} key={key}>
                {
                  (selectedSession === session ) ? (
                    <SessionRowTitle > 
                      <InputField name="title" width="90%" value={title} removeBorder onChange={e => setTitle(e.target.value)}/> 
                      <EditProjectButton label="Save" onClick={e => saveTitle(session)} />
                    </SessionRowTitle>
                  ) : (
                    <SessionRowTitle onClick={(e) => goToSession(session.id)}>
                      {session.name_of_session}
                    </SessionRowTitle>
                  )
                }
                <SessionRowDate onClick={(e) => goToSession(session.id)}>{dateFormatter(session.createdAt)}</SessionRowDate>
                <SessionRowMore><SessionRowMoreButton onEdit={e => onEdit(session)} onDelete={e => onDelete(session)} /></SessionRowMore>
              </SessionRow>
            )
          ) : <p>You have no Sessions!</p>
        }
      </SCBody>
    </SCContainer>
  )
}

export default SessionCreator; 