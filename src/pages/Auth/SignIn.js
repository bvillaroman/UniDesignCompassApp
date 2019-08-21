import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
  Text
} from "grommet";
import {AuthSwitchButton, InputContainer, AuthSwitchContainer, AuthFormContainer, AuthFormTitle,AuthSwitchLabel, InputField } from "../../styles/AuthPage"

const SignIn = ({switchToSignUp})=> {
  return (
    <AuthFormContainer>
      <AuthFormTitle> Sign In</AuthFormTitle>
      <Form
        onReset={event => console.log(event)}
        onSubmit={({ value }) => console.log("Submit", value)}
      >
        <InputContainer name="email" type="email" required>
          <InputField placeholder="Email" />
        </InputContainer>
        <InputContainer name="password" required >
          <InputField placeholder="Password" />
        </InputContainer>
        <Box direction="column" justify="between" margin={{ top: "medium" }}>
          <Button type="submit" label="Sign In" primary />
          <AuthSwitchContainer direction="row">
            <AuthSwitchLabel truncate>Dont have an account?</AuthSwitchLabel>
            <AuthSwitchButton onClick={e => switchToSignUp()}> Sign up </AuthSwitchButton>
          </AuthSwitchContainer>
        </Box>
      </Form>
    </AuthFormContainer>
  )
}

export default SignIn; 