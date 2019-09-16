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
  InputField ,
  FormErrorLabel
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

  const [message,setMessage] = useState("")
  const [loading,setLoading] = useState(false)


  const onChange = event => {
    const { target: { value,name } } = event;
    setValues({
      ...form,
      [name]: value
    })
    setMessage("")
    setLoading(false)
  };

  const submitForm = ({value}) => {
    const { email, name, password } = value

    setLoading(true)
    Auth.signUp({
      username: email,
      password,
      attributes: { name },
    })
    .then(user => {
      setMessage("User created! We emailed you a link to verify your account!")
      setLoading(false)
    })
    .catch(err => {
      setMessage(err.message)
      setLoading(false)
    });
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
            <FormErrorLabel truncate>
              {
                message ? message : (loading && <img src="https://www.perthfestival.com.au/src/themes/__/images/loader.gif" />)
              }
            </FormErrorLabel>

          </Box>
        </Form>
    </FormContainer>
  )
}

export default SignUp; 