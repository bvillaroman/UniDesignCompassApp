import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
  Tab,
  Tabs
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
import {userAuth} from "./context/context"
import Verify from "./Verify"

const SignUp = ({switchToSignIn}) => {

  const [form,setValues] = useState({
    email: '',
    name: '',
    password: '',
    password2: '',
  });

  const [error,setErrors] = useState({  
    email: '',
    name: '',
    password: '',
    password2: '',
  })


  const [tab,setTab] = useState(0);

  const { signupUser, changeStatus} = userAuth();

  const onChange = event => {
    const { target: { value,name } } = event;
    setValues({
      ...form,
      [name]: value
    })
  };

  const onActive = (index) => setTab(index)

  const submitForm = ({value}) => {
    const { email, name, password } = value

    Auth.signUp({
      username: email,
      password,
      attributes: { name },
      })
      .then(data => {
        signupUser(data.user.username);
        onActive(1);
      })
      .catch(err => console.log(err));

  }

  return (
    <AuthFormContainer>
      <AuthFormTitle> { tab == 0 ? 'Sign Up' : 'Verifcation'} </AuthFormTitle>
      <Tabs activeIndex={tab} onActive={onActive}>
        <Tab>
          <Form
            onSubmit={submitForm}
            onChange={onChange}
            value={form}
            errors={{...error}}
          >
            <InputContainer name="email" required>
              <InputField name="email"  type="email" placeholder="Email" />
            </InputContainer>
            <InputContainer name="name" required >
              <InputField name="name" placeholder="Name" />
            </InputContainer>
            <InputContainer name="password" required >
              <InputField name="password" type="password" placeholder="Password" />
            </InputContainer>
            <InputContainer name="password2" required>
              <InputField name="password2" type="password" placeholder="Retype Password" />
            </InputContainer>
            <Box direction="column" justify="between" margin={{ top: "medium" }}>
              <Button type="submit" label="Sign Up" primary />
              <AuthSwitchContainer direction="row">
                <AuthSwitchLabel truncate>Have an account?</AuthSwitchLabel>
                <AuthSwitchButton onClick={e => switchToSignIn()}> Sign In </AuthSwitchButton>
              </AuthSwitchContainer>
            </Box>
          </Form>
        </Tab>
        <Tab>
          <Verify email={form.email} switchToSignUp={e => onActive(0)}/>
        </Tab>
      </Tabs>
    </AuthFormContainer>
  )
}

export default SignUp; 