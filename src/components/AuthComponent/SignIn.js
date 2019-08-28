import React, { useState } from 'react'
import { Box, Button, Form } from "grommet";
import {
  AuthSwitchButton, 
  InputContainer, 
  AuthSwitchContainer, 
  AuthFormContainer, 
  AuthFormTitle,
  AuthSwitchLabel, 
  InputField 
} from "../../styles/AuthPage"
import {globalStore} from "../../context/context"
import { Auth } from 'aws-amplify';

const SignIn = ({switchToSignUp})=> {
  const {loginUser} = globalStore();
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

  const submitForm = ({value}) => {
    const { email, password } = value
    Auth.signIn({
      username: email, // Required, the username
      password, // Optional, the password
    })
    .then(user => {
      const {email} = user.attributes;
      
      // loginUser({
      //   email: user.email
      // })
      console.log(user)
      // globalStore
    })
    .catch(err => console.log(err));
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