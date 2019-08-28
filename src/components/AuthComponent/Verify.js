import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
} from "grommet";
import { Auth } from 'aws-amplify';
import { createUser } from '../../utils/mutations'
import {globalStore} from "../../context/context"

import {
  AuthSwitchButton, 
  InputContainer, 
  AuthSwitchContainer, 
  AuthSwitchLabel, 
  InputField 
} from "../../styles/AuthPage"

const Verify = ({email, name, switchToSignUp}) => {
  const {loginUser} = globalStore();

  const [form,setForm] = useState({ code: '' });
  const [error,setErrors] = useState({ code: ''})

  const onChange = ({ target: { value } }) => { setForm({code: value})  };

  const sendConfirmationCode = (e) => {
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(email, form.code)
      .then(data => {
        createUser(email,name)
          .then((res) => {
            loginUser({
              email: res.data.createUser.email,
              id: res.data.createUser.id,
              compasses: res.data.createUser.compasses,
            })
          })
      })
      .catch(err => console.log(err));
  }

  const resendCCode = (e) => {
    Auth.resendSignUp(email)
    .then((user) => {
        
    }).catch(e => {
        console.log(e);
    });
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
          <Button label="Resend Code" onClick={resendCCode} primary />
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