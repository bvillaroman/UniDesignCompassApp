import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
  Text
} from "grommet";
import {AuthSwitchButton, InputContainer, AuthSwitchContainer, AuthFormContainer, AuthFormTitle,AuthSwitchLabel, InputField } from "../../styles/AuthPage"

const SignUp = ({switchToSignIn}) => {
  return (
    <AuthFormContainer>
      <AuthFormTitle> Sign Up</AuthFormTitle>
      <Form
        onReset={event => console.log(event)}
        onSubmit={({ value }) => console.log("Submit", value)}
      >
        <InputContainer name="email" type="email" required>
          <InputField placeholder="Email" />
        </InputContainer>
        <InputContainer name="username" type="text" required>
          <InputField placeholder="Username" />
        </InputContainer>
        <InputContainer name="name" type="text" required >
          <InputField placeholder="Name" />
        </InputContainer>
        <InputContainer name="number" type="text" required >
          <InputField placeholder="Phone number" />
        </InputContainer>
        <InputContainer name="password" required >
          <InputField placeholder="Password" />
        </InputContainer>
        <InputContainer name="password2" required >
          <InputField placeholder="Retype Password" />
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