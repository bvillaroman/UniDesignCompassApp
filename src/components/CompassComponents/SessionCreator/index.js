import React, { useState } from 'react'
import { userCardPage } from "../../../context/CardPage/context"

import {
  InputContainer, 
  SCButtonContainer,
  SCButton,
  SCCard,
  SCFormContainer,
  TitleForm,
  DescriptionForm,
  SCFormTitle 
} from "../../../styles/CompassPage"

const SessionCreator = ({email}) => {  
  const [form,setForm] = useState({ title: '', description: '' });
  const [error,setErrors] = useState({ title: '', description: ''})
  const {changeView} = userCardPage();

  const onChange = ({ target: { value,name } }) => { setForm({...form, [name]: value})  };

  const sendForm = (e) => {
    console.log(form)
    changeView(1);
  }

  return (    
    <SCCard alignSelf="center" elevation="medium">
      <SCFormTitle> Create a Session </SCFormTitle>
      <SCFormContainer
        onSubmit={sendForm}
        onChange={onChange}
        errors={{...error}}
        value={form}
      >
        <InputContainer  name="title"  required>
          <TitleForm name="title" type="text" placeholder="Session Title" />
        </InputContainer>
        <InputContainer  name="description" >
          <DescriptionForm name="description" type="text" placeholder="Session Description" />
        </InputContainer>
        <SCButtonContainer>
          <SCButton type="submit" label="Create Session" />
        </SCButtonContainer>
      </SCFormContainer>
    </SCCard>
  )
}

export default SessionCreator; 