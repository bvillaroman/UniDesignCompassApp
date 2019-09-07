import React, { useState, useEffect } from 'react'
import { Box, Button, Form } from "grommet";
import {
  FormSwitchButton,
  InputContainer,
  FormSwitchContainer,
  FormContainer,
  FormTitle,
  FormSwitchLabel,
  InputField
} from "../../styles/Form"
import { globalStore } from "../../context/context"
import { Auth } from 'aws-amplify';

const SignIn = ({ switchToSignUp }) => {
  const { loginUser } = globalStore();
  const [form, setValues] = useState({
    email: '',
    password: '',
  });
  const [error] = useState({
    email: '',
    password: '',
  })

  const onChange = event => {
    const { target: { value, name } } = event;
    setValues({
      ...form,
      [name]: value
    })
  };

  const submitForm = ({ value }) => {
    const { email, password } = value
    Auth.signIn({
      username: email, // Required, the username
      password, // Optional, the password
    })
      .then(user => {
        const { email } = user.attributes;
        console.log({ user, email })

        loginUser({ email }) // Save to global store

        // globalStore
      })
      .catch(err => console.log(err));
  }

  return (
    <FormContainer>
      <FormTitle> Sign In</FormTitle>
      <Form
        onReset={event => console.log(event)}
        onSubmit={submitForm}
        onChange={onChange}
        value={form}
        errors={{ ...error }}
      >
        <InputContainer name="email" required>
          <InputField name="email" type="email" placeholder="Email" />
        </InputContainer>
        <InputContainer name="password" type="password" required >
          <InputField name="password" type="password" placeholder="Password" />
        </InputContainer>
        <Box direction="column" justify="between" margin={{ top: "medium" }}>
          <Button type="submit" label="Sign In" primary />
          <FormSwitchContainer direction="row">
            <FormSwitchLabel truncate>Don't have an account?</FormSwitchLabel>
            <FormSwitchButton onClick={e => switchToSignUp()}> Sign Up </FormSwitchButton>
          </FormSwitchContainer>
        </Box>
      </Form>
    </FormContainer>
  )
}

export default SignIn; 