import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
  Text
} from "grommet";
import {AuthSwitchButton, Input, AuthSwitchContainer, AuthFormContainer, AuthFormTitle,AuthSwitchLabel } from "../../styles/AuthPage"

const SignUp = ({SignInButton}) => {
  return (
    <AuthFormContainer>
      <AuthFormTitle> Sign Up</AuthFormTitle>
      <Form
        onReset={event => console.log(event)}
        onSubmit={({ value }) => console.log("Submit", value)}
      >
        <Input label="Email" name="email" type="email" required />
        <Input label="Username" name="username" type="text" required />
        <Input label="Name" name="name" type="text" required />
        <Input label="Phone Number" name="number" type="text" required />
        <Input label="Password" name="password" required />
        <Input label="Retype Password" name="password2" required />
        <Box direction="column" justify="between" margin={{ top: "medium" }}>
          <Button type="submit" label="Sign Up" primary />
          <AuthSwitchContainer direction="row">
            <AuthSwitchLabel truncate>Have an account?</AuthSwitchLabel>
            <AuthSwitchButton > Sign In </AuthSwitchButton>
          </AuthSwitchContainer>
        </Box>
      </Form>
    </AuthFormContainer>
  )
}

export default SignUp; 