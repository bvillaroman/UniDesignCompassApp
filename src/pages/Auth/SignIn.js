import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
  Text
} from "grommet";
import {AuthSwitchButton, InputContainer, AuthSwitchContainer, AuthFormContainer, AuthFormTitle,AuthSwitchLabel, InputField } from "../../styles/AuthPage"

const SignIn = ({switchToSignUp})=> {
  const [form,setValues] = useState({
    email: '',
    password: '',
  });

  const [error,setErrors] = useState({  
    email: '',
    password: '',
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
      <AuthFormTitle> Sign In</AuthFormTitle>
      <Form
        onReset={event => console.log(event)}
        onSubmit={submitForm}
        onChange={onChange}
        value={form}
        errors={{...error}}
      >
        <InputContainer name="email" required>
          <InputField name="email" type="email"  placeholder="Email" />
        </InputContainer>
        <InputContainer name="password" type="password" required >
          <InputField name="password" type="password"  placeholder="Password" />
        </InputContainer>
        <Box direction="column" justify="between" margin={{ top: "medium" }}>
          <Button type="submit" label="Sign In" primary />
          <AuthSwitchContainer direction="row">
            <AuthSwitchLabel truncate>Don't have an account?</AuthSwitchLabel>
            <AuthSwitchButton onClick={e => switchToSignUp()}> Sign Up </AuthSwitchButton>
          </AuthSwitchContainer>
        </Box>
      </Form>
    </AuthFormContainer>
  )
}

export default SignIn; 