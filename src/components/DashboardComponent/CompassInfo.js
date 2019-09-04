import React from 'react'
import {
  Box,
  Button,
  Form,
} from "grommet";

import { userDashboard } from "../../context/DashboardPage/context"
import { InputContainer,  InputField, InputTextArea } from "../../styles/Form"

const Info = (props) => {

  const { form,  errors, updateForm, switchTab } = userDashboard();

  const onChange = event => {
    const { target: { value,name } } = event;
    updateForm({
      ...form,
      [name]: value
    })
  };

  const submitForm = event => {
    switchTab(1);
  };

  return (
    <Form
      onSubmit={submitForm}
      onChange={onChange}
      value={form}
      errors={{...errors}}
    >
      <InputContainer name="title" required>
        <InputField name="title"  type="text" placeholder="Title of your Compass" />
      </InputContainer>
      <InputContainer name="description" required >
        <InputTextArea name="description" placeholder="Description of your design process" />
      </InputContainer>
      <Box direction="column" justify="between" margin={{ top: "medium" }}>
        <Button type="submit" onClick={submitForm} label="Compass Type" primary />
      </Box>
    </Form>
  )
}

export default Info; 