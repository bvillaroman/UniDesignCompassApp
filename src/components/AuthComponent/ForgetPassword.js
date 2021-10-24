import React, { useState } from 'react'
import { Box, Button, Form } from "grommet";
import {
  FormSwitchButton,
  InputContainer,
  FormSwitchContainer,
  FormSwitchBox,
  FormContainer,
  FormTitle,
  FormSwitchLabel,
  InputField,
  FormErrorLabel
} from "../../styles/Form"
import {Loader} from "../../styles/layout"
import { Auth } from 'aws-amplify';
import SubmitNewPassword from './SubmitNewPassword'

export default ({ switchToSignUp, switchToSignIn}) => {
  const [form, setValues] = useState({email: ''});
  const [errors] = useState({ email: '' })
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false)
  const [submitPassword,changeToSubmitPassword] = useState(false)

  const onChange = event => {
    console.log(event)
    setValues({
      ...event
    })
    setError('')
    setLoading(false)
  };

  const submitForm = ({ value }) => {
    const { email } = value
    setLoading(true)

    Auth.forgotPassword(email)
      .then(data => {
        setLoading(false)
        changeToSubmitPassword(true)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      });
  }

  return (
    <FormContainer>
      <FormTitle> Password Recovery </FormTitle>
      {
        submitPassword ? (
          <SubmitNewPassword 
            switchToSignIn={switchToSignIn} 
            switchToSignUp={switchToSignUp} 
            user={form.email} 
            switchToReset={changeToSubmitPassword}
          />
        )
        : (
          <Form
            onSubmit={submitForm}
            onChange={onChange}
            value={form}
            errors={{ ...errors }}
          >
            <InputContainer name="email" required>
              <InputField name="email" type="email" placeholder="Email" />
            </InputContainer>
            <Box direction="column" justify="between" margin={{ top: "medium" }}>
              <Button type="submit" label="Send Confirmation Code" primary />
              <FormSwitchBox >
                <FormSwitchContainer direction="row">
                  <FormSwitchLabel truncate>Don't have an account?</FormSwitchLabel>
                  <FormSwitchButton onClick={e => switchToSignUp()}> Sign Up </FormSwitchButton>
                </FormSwitchContainer>
                <FormSwitchContainer direction="row">
                  <FormSwitchLabel truncate>Want to sign back in?</FormSwitchLabel>
                  <FormSwitchButton onClick={e => switchToSignIn()}> Sign In </FormSwitchButton>
                </FormSwitchContainer>
                <FormErrorLabel truncate>
                { error ? error : (loading && <Loader/>) }
                </FormErrorLabel>
              </FormSwitchBox>
            </Box>
          </Form>
        )
      }
    </FormContainer>
  )
};