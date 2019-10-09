import React, { useState, useContext } from 'react'
import { CompassContext } from "../../../context/CompassPage/context"
import { createSession } from "../../../utils/mutations"
import {navigate} from "gatsby"

import {
  SCButtonContainer,
  SCButton,
  SCHeader,
  SCBody,
  SCForm,
  SCContainer,
  SCTextArea,
  SCInputContainer,
  SCInputField
} from "../../../styles/CompassPage"

const SessionCreator = (props) => {
  const {compass} = useContext(CompassContext)
  const [form, setForm] = useState({ title: '', description: '' });
  const [error] = useState({ title: '', description: '' })

  const onChange = ({ target: { value, name } }) => { setForm({ ...form, [name]: value }) };

  const currentCompassId = compass.id

  const sendForm = (e) => {
    createSession(form.title, form.description, currentCompassId)
      .then((result) => {
        navigate(`/Compass?c=${currentCompassId}&s=${result.data.createSession.id}`)
      })
      .catch(err => console.log(err))
  }

  return (
    <SCContainer>
      <SCHeader> Start a New Session </SCHeader>
      <SCBody>
        <SCForm  
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
          </SCForm>
      </SCBody>
    </SCContainer>
  )
}

export default SessionCreator; 