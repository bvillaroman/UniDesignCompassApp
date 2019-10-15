import React, { useState, useContext, useEffect } from 'react'
import { CompassContext } from "../../../context/CompassPage/context"
import { createSession } from "../../../utils/mutations"
import { dateFormatter, timeSorter } from "../../../utils/translateTime"
import {navigate} from "gatsby"
import { AddCircle} from 'grommet-icons';

import {
  SCButtonContainer,
  SCButton,
  SCHeader,
  SCBody,
  SCForm,
  SCContainer,
  SCTextArea,
  SCInputContainer,
  SCInputField,
  SessionRow,
  SessionRowTitle,
  SessionRowDate,
  SCAddSession,
  SessionRowMore,
  SessionRowMoreButton,
  SessionRowHeader
} from "../../../styles/CompassPage"

const SessionCreator = (props) => {
  const {compass} = useContext(CompassContext)
  const [form, setForm] = useState({ title: '', description: '' });
  const [error] = useState({ title: '', description: '' })
  const [pastSessions, setPastSessions] = useState([])

  useEffect(() => {
    if(compass.hasOwnProperty("id")){
      setPastSessions(compass.sessions.items.sort(timeSorter))
    }  
  }, [compass])

  const onChange = ({ target: { value, name } }) => { setForm({ ...form, [name]: value }) };

  const currentCompassId = compass.id

  const goToSession = (session) => {
    navigate(`/Compass?c=${currentCompassId}&s=${session}`)
  }

  const sendForm = (e) => {
    createSession("untitled", " ", currentCompassId)
      .then((result) => {
        navigate(`/Compass?c=${currentCompassId}&s=${result.data.createSession.id}`)
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
              <SessionRow key={key} onClick={(e) => goToSession(session.id)}>
                <SessionRowTitle >{session.name_of_session}</SessionRowTitle>
                <SessionRowDate>{dateFormatter(session.createdAt)}</SessionRowDate>
                <SessionRowMore><SessionRowMoreButton onClick={e => console.log("more")} /></SessionRowMore>
              </SessionRow>
            )
          ) : <p>You have no Sessions!</p>
        }
        {/* <SCForm  
            onSubmit={sendForm}
            onChange={onChange}
            errors={{ ...error }}
            value={form}
          >
            <SCInputContainer name="title" required>
              <SCInputField name="title" type="text" placeholder="Session Title" />
            </SCInputContainer>
            <SCInputContainer name="description" required>
              <SCTextArea name="description" placeholder="Session Description" />
            </SCInputContainer>
            <SCButtonContainer>
              <SCButton type="submit" label="Create Session" />
            </SCButtonContainer>
          </SCForm> */}
      </SCBody>
    </SCContainer>
  )
}

export default SessionCreator; 