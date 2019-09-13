import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
} from "grommet";
import { Auth } from 'aws-amplify';

import {
  FormSwitchButton, 
  InputContainer, 
  FormSwitchContainer, 
  FormContainer, 
  FormTitle,
  FormSwitchLabel, 
  InputField 
} from "../../styles/Form"

const SignUp = ({switchToSignIn}) => {

  const [form,setValues] = useState({
    email: '',
    name: '',
    password: '',
    password2: '',
  });

  const [error] = useState({  
    email: '',
    name: '',
    password: '',
    password2: '',
  })

  const onChange = event => {
    const { target: { value,name } } = event;
    setValues({
      ...form,
      [name]: value
    })
  };

  const submitForm = ({value}) => {
    const { email, name, password } = value

    Auth.signUp({
      username: email,
      password,
      attributes: { name },
    })
  }

  return (
    <FormContainer>
      <FormTitle> Sign Up</FormTitle>
        <Form
          onSubmit={submitForm}
          onChange={onChange}
          value={form}
          errors={{...error}}
        >
          <InputContainer name="email" required>
            <InputField name="email"  type="email" placeholder="Email" />
          </InputContainer>
          <InputContainer name="name" required >
            <InputField name="name" placeholder="Name" />
          </InputContainer>
          <InputContainer name="password" required >
            <InputField name="password" type="password" placeholder="Password" />
          </InputContainer>
          <InputContainer name="password2" required>
            <InputField name="password2" type="password" placeholder="Retype Password" />
          </InputContainer>
          <Box direction="column" justify="between" margin={{ top: "medium" }}>
            <Button type="submit" label="Sign Up" primary />
            <FormSwitchContainer direction="row">
              <FormSwitchLabel truncate>Have an account?</FormSwitchLabel>
              <FormSwitchButton onClick={e => switchToSignIn()}> Sign In </FormSwitchButton>
            </FormSwitchContainer>
          </Box>
        </Form>
    </FormContainer>
  )
}

export default SignUp; 