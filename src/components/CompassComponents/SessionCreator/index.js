import React, { useState, useContext } from 'react'
import { GlobalContext } from "../../../context/context"
import { createSession } from "../../../utils/mutations"

import {
  SCButtonContainer,
  SCButton,
  SCFormContainer,
} from "../../../styles/CompassPage"
import {
  FormCard,
  FormTitle,
  InputContainer,
  InputField,
  InputTextArea
} from "../../../styles/Form"

const SessionCreator = (props) => {
  const {compass = "",selectSession} = useContext(GlobalContext);
  const [form, setForm] = useState({ title: '', description: '' });
  const [error] = useState({ title: '', description: '' })

  const onChange = ({ target: { value, name } }) => { setForm({ ...form, [name]: value }) };

  const currentCompassId = compass

  const sendForm = (e) => {
    createSession(form.title, form.description, currentCompassId)
      .then((result) => {
        selectSession(result.data.createSession.id)
      })
      .catch(err => console.log(err))
  }

  return (
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
  )
}

export default SessionCreator; 