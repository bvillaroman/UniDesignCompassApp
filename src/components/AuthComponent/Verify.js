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
  FormSwitchButton, 
  InputContainer, 
  FormSwitchContainer, 
  FormSwitchLabel, 
  InputField 
} from "../../styles/Form"

const Verify = ({email, name, switchToSignUp}) => {
  const {loginUser} = globalStore();

  const [form,setForm] = useState({ code: '' });
  const [error] = useState({ code: ''})

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
        <FormSwitchContainer fill="horizontal" justify="between" direction="row">
          <Button label="Resend Code" onClick={resendCCode} primary />
          <Button type="submit" label="Verify Account" primary />
        </FormSwitchContainer>
        <FormSwitchContainer direction="row">
          <FormSwitchLabel truncate>Want to create a new account?</FormSwitchLabel>
          <FormSwitchButton onClick={e => switchToSignUp()}> Sign Up </FormSwitchButton>
        </FormSwitchContainer>
      </Box>
    </Form>
  )
}

export default Verify; 