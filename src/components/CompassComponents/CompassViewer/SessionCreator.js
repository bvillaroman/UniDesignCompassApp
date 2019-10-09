import React, { useState, useContext } from 'react'
import { CompassContext } from "../../../context/CompassPage/context"
import { createSession } from "../../../utils/mutations"
import {navigate} from "gatsby"

import {
  SCButtonContainer,
  SCButton,
  SCBody,
  SCContainer,
  SCPanel
} from "../../../styles/CompassPage"
import {
  InputContainer,
  InputField,
  InputTextArea
} from "../../../styles/Form"

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
      <SCPanel label="Create Session">
        <SCBody  
          onSubmit={sendForm}
          onChange={onChange}
          errors={{ ...error }}
          value={form}
        >
          <InputContainer name="title" required>
            <InputField name="title" type="text" placeholder="Session Title" />
          </InputContainer>
          <InputContainer name="description" required>
            <InputTextArea name="description" placeholder="Session Description" />
          </InputContainer>
          <SCButtonContainer>
            <SCButton type="submit" label="Create Session" />
          </SCButtonContainer>
        </SCBody>
      </SCPanel>
    </SCContainer>
   
  )
}

export default SessionCreator; 