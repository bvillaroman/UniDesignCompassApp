import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
} from "grommet";
import { Auth } from 'aws-amplify';

import {
  AuthSwitchButton, 
  InputContainer, 
  AuthSwitchContainer, 
  AuthFormContainer, 
  AuthFormTitle,
  AuthSwitchLabel, 
  InputField 
} from "../../styles/AuthPage"


const Verify = ({email, switchToSignUp}) => {

  const [form,setForm] = useState({ code: '' });

  const [error,setErrors] = useState({ code: ''})

  const onChange = ({ target: { value } }) => { setForm({code: value})  };

  const sendConfirmationCode = (e) => {
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(email, form.code)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <Form
      onSubmit={sendConfirmationCode}
      onChange={onChange}
      errors={{...error}}
      value={form}
    >
      <InputContainer name="code" required>
        <InputField name="code" type="text" placeholder="Confirmation Code" />
      </InputContainer>
      <Box direction="column" justify="between" margin={{ top: "medium" }}>
        <AuthSwitchContainer fill="horizontal" justify="between" direction="row">
          <Button label="Resend Code" primary />
          <Button type="submit" label="Verify Account" primary />
        </AuthSwitchContainer>
        <AuthSwitchContainer direction="row">
          <AuthSwitchLabel truncate>Want to create a new account?</AuthSwitchLabel>
          <AuthSwitchButton onClick={e => switchToSignUp()}> Sign Up </AuthSwitchButton>
        </AuthSwitchContainer>
      </Box>
    </Form>
  )
}

export default Verify; 