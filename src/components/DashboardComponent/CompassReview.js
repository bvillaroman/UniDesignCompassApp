import React from 'react'
import {Button} from "grommet";

import { userDashboard } from "../../context/DashboardPage/context"
import { FormSwitchContainer } from "../../styles/Form"
import { CompassCard, CompassLabel } from "../../styles/Dashboard"

const Review = (props) => {

  const { submitForm, form } = userDashboard();

  const submit = event => {
    submitForm();
  };

  return (
    <CompassCard >
      <CompassLabel>title:</CompassLabel> {form.title}
      <CompassLabel>description:</CompassLabel>{form.description}
      <CompassLabel>steps:</CompassLabel>
      {form.steps.map((step) => {
        return (<p>{step.title}</p>)
      })}
      <Button onClick={submitForm} label="Create Compass" primary />
    </CompassCard>
  )
}

export default Review; 