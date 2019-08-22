import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
  Text
} from "grommet";
import {AuthSwitchButton, InputContainer, AuthSwitchContainer, AuthFormContainer, AuthFormTitle,AuthSwitchLabel, InputField } from "../../styles/AuthPage"

const SignUp = ({switchToSignIn}) => {

  const [form,setValues] = useState({
    email: '',
    username: '',
    name: '',
    number: '',
    password: '',
    password2: '',
  });

  const [error,setErrors] = useState({  
    email: '',
    username: '',
    name: '',
    number: '',
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

  const submitForm = (event) => {
    console.log(event)
  }


  return (
    <AuthFormContainer>
      <AuthFormTitle> Sign Up</AuthFormTitle>
      <Form
        onReset={event => console.log(event)}
        onSubmit={submitForm}
        onChange={onChange}
        value={form}
        errors={{...error}}
      >
        <InputContainer name="email" required>
          <InputField name="email"  type="email" placeholder="Email" />
        </InputContainer>
        <InputContainer name="username" required>
          <InputField name="username" type="text" placeholder="Username" />
        </InputContainer>
        <InputContainer name="name" required >
          <InputField name="name" placeholder="Name" />
        </InputContainer>
        <InputContainer name="number" required >
          <InputField name="number" type="text" placeholder="Phone number" />
        </InputContainer>
        <InputContainer name="password" required >
          <InputField name="password" type="password" placeholder="Password" />
        </InputContainer>
        <InputContainer name="password2" required>
          <InputField name="password2" type="password" placeholder="Retype Password" />
        </InputContainer>
        <Box direction="column" justify="between" margin={{ top: "medium" }}>
          <Button type="submit" label="Sign Up" primary />
          <AuthSwitchContainer direction="row">
            <AuthSwitchLabel truncate>Have an account?</AuthSwitchLabel>
            <AuthSwitchButton onClick={e => switchToSignIn()}> Sign In </AuthSwitchButton>
          </AuthSwitchContainer>
        </Box>
      </Form>
    </AuthFormContainer>
  )
}

export default SignUp; 