import React, { useState } from 'react'
import { createSession } from "../../../utils/mutations"
import {navigate} from "gatsby"

import {
  SCButtonContainer,
  SCButton,
  SCFormContainer,
  SCContainer
} from "../../../styles/CompassPage"
import {
  FormCard,
  FormTitle,
  InputContainer,
  InputField,
  InputTextArea
} from "../../../styles/Form"

const SessionCreator = (props) => {
  const [form, setForm] = useState({ title: '', description: '' });
  const [error] = useState({ title: '', description: '' })

  const onChange = ({ target: { value, name } }) => { setForm({ ...form, [name]: value }) };

  const currentCompassId = props.compass.id

  const sendForm = (e) => {
    createSession(form.title, form.description, currentCompassId)
      .then((result) => {
        navigate(`/Compass?c=${currentCompassId}&s=${result.data.createSession.id}`)
      })
      .catch(err => console.log(err))
  }

  return (
    <SCContainer>
      <FormCard alignSelf="center" elevation="medium">
        <FormTitle> Create a Session </FormTitle>
        <SCFormContainer
          onSubmit={sendForm}
          onChange={onChange}
          errors={{ ...error }}
          value={form}
        >
          <InputContainer name="title" required>
            <InputField name="title" type="text" placeholder="Session Title" />
          </InputContainer>
          <InputContainer name="description" >
            <InputTextArea name="description" placeholder="Session Description" />
          </InputContainer>
          <SCButtonContainer>
            <SCButton type="submit" label="Create Session" />
          </SCButtonContainer>
        </SCFormContainer>
      </FormCard>
    </SCContainer>
  )
}

export default SessionCreator; 