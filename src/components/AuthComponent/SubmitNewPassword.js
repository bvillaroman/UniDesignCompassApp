import React, { useState } from 'react'
import { Box, Button, Form } from "grommet";
import {
  FormSwitchButton,
  InputContainer,
  FormSwitchContainer,
  FormSwitchBox,
  FormSwitchLabel,
  InputField,
  FormErrorLabel,
  FormMessageLabel
} from "../../styles/Form"
import {Loader} from "../../styles/layout"
import { Auth } from 'aws-amplify';

export default ({ switchToSignUp, user, switchToReset }) => {

  const [form, setValues] = useState({confirmation: "", password: '', password1: ""});
  const [errors] = useState({ confirmation: "", password: '', password1: "" })
  const [error,setError] = useState("")
  const [message,setMessage] = useState("")
  const [loading,setLoading] = useState(false)

  const onChange = event => {
    const { target: { value, name } } = event;
    setValues({
      ...form,
      [name]: value
    })
    setError('')
    setMessage('')
    setLoading(false)
  };

  const submitForm = ({ value }) => {
    const { password, password1, confirmation } = value
    setError("")
    setMessage("")
    if (password !== password1) {
      setError("Your Passwords dont match! ")
    } else {
      setLoading(true)
      Auth.forgotPasswordSubmit(user, confirmation, password)
        .then(data => {
          setLoading(false)
          setMessage("Password Reset!")
          console.log(data)
        })
        .catch(err => {
          setLoading(false)
          setError(err.message)
        });
    }
  }

  return (
    <>
      <Form
        onSubmit={submitForm}
        onChange={onChange}
        value={form}
        errors={{ ...errors }}
      >
        <InputContainer name="confirmation" required>
          <InputField name="confirmation" type="text" placeholder="Type in Confirmation Code" />
        </InputContainer>
        <InputContainer name="password" required>
          <InputField name="password" type="password" placeholder="Password" />
        </InputContainer>
        <InputContainer name="password1" required>
          <InputField name="password1" type="password" placeholder="Retype password" />
        </InputContainer>
        <Box direction="column" justify="between" margin={{ top: "medium" }} >
          <Button type="submit" label="Create New Password" primary />
        </Box>
      </Form>
      <FormSwitchBox>
      <FormSwitchContainer direction="row">
        <FormSwitchLabel truncate>Don't have an account?</FormSwitchLabel>
        <FormSwitchButton onClick={e => switchToSignUp()}> Sign Up </FormSwitchButton>
      </FormSwitchContainer>
      <FormSwitchContainer direction="row">
        <FormSwitchLabel truncate>Re-enter email?</FormSwitchLabel>
        <FormSwitchButton onClick={e => switchToReset()}> Back to Sign in </FormSwitchButton>
      </FormSwitchContainer>
      <FormMessageLabel truncate >
      { message }
      </FormMessageLabel>
      <FormErrorLabel truncate>
      { error ? error : (loading && <Loader/>)}
      </FormErrorLabel>
    </FormSwitchBox>
   </>
  )
};