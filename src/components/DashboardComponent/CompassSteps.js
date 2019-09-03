import React from 'react'
import {
  Box,
  Button,
  Form,
  Tab,
} from "grommet";

import { userDashboard } from "../../context/DashboardPage/context"
import { FormSwitchContainer } from "../../styles/Form"

const Steps = (props) => {
  const { updateForm, switchTab } = userDashboard();

  const goToReview = event => {
    switchTab(3);
  };

  return (
    <FormSwitchContainer fill="horizontal" justify="between" direction="row">
      <Button label="Go To Review" onClick={goToReview} primary />
    </FormSwitchContainer>
  )
}

export default Steps; 