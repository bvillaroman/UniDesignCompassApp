import React from 'react'
import {
  Box,
  Button,
  Form,
  Tab,
} from "grommet";

import { userDashboard } from "../../context/DashboardPage/context"
import { FormSwitchContainer } from "../../styles/Form"

const Feed = (props) => {

  const { submitForm, form } = userDashboard();

  const

  const submit = event => {
    submitForm();
  };

  return (
    <FormSwitchContainer fill="horizontal" justify="between" direction="row">
     
    </FormSwitchContainer>
  )
}

export default Feed; 