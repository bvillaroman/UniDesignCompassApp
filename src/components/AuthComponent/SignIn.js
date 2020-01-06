import React, { useState, useContext } from 'react'
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
import { Loader } from "../../styles/layout"
import { GlobalContext } from "../../context/context"
import { getUser } from "../../utils/queries"
import { createUser } from "../../utils/mutations"
import { Auth } from 'aws-amplify';


const SignIn = ({ switchToSignUp, switchToForgetPassword }) => {
  const { loginUser } = useContext(GlobalContext);
  const [form, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const onChange = event => {
    const { target: { value, name } } = event;
    setValues({
      ...form,
      [name]: value
    })
    setError('')
    setLoading(false)
  };

  const submitForm = ({ value }) => {
    const { email, password } = value
    setLoading(true)
    Auth.signIn({ username: email, password })
      .then(user => {
        const { sub, } = user.attributes;

        localStorage.setItem("authuser", sub)
        getUser(sub)
          .then((res) => {
            if(res && res.data && res.data.getUser){
              loginUser(res.data.getUser) // Save to global store   
            } else {
              createUser(sub, email, user.attributes["custom:firstName"], user.attributes["custom:lastName"])
                .then((result) => {
                  loginUser(result.data.getUser) // Save to global store   
                })                
            }
          })    
          .catch(err => {
            localStorage.removeItem("authuser")
            setError(err.message)
            setLoading(false)
          });
      })
      .catch(err => {
        localStorage.removeItem("authuser")
        setError(err.message)
        setLoading(false)
      });
  }

  return (
    <FormContainer>
      <FormTitle> Sign In</FormTitle>
      <Form
        onSubmit={submitForm}
        onChange={onChange}
        value={form}
        errors={{ ...errors }}
      >
        <InputContainer name="email" required>
          <InputField name="email" type="email" placeholder="Email" />
        </InputContainer>
        <InputContainer name="password" type="password" required >
          <InputField name="password" type="password" placeholder="Password" />
        </InputContainer>
        <Box direction="column" justify="between" margin={{ top: "medium" }}>
          <Button type="submit" label="Sign In" primary />
          <FormSwitchBox>
            <FormSwitchContainer direction="row">
              <FormSwitchLabel truncate>Don't have an account?</FormSwitchLabel>
              <FormSwitchButton onClick={e => switchToSignUp()}> Sign Up </FormSwitchButton>
            </FormSwitchContainer>
            <FormSwitchContainer direction="row">
              <FormSwitchLabel truncate>Forgot Password ?</FormSwitchLabel>
              <FormSwitchButton onClick={e => switchToForgetPassword()}> Reset Password </FormSwitchButton>
            </FormSwitchContainer>
            <FormErrorLabel>
              {
                error ? error : (loading && <Loader />)
              }
            </FormErrorLabel>
          </FormSwitchBox>
        </Box>
      </Form>
    </FormContainer>
  )
}

export default SignIn; 