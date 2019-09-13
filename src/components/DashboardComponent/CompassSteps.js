import React, {useContext} from 'react'
import { Button } from "grommet";

import { DashboardContext } from "../../context/DashboardPage/context"
import { FormSwitchContainer, FormTitle } from "../../styles/Form"

const Steps = (props) => {
  const { switchTab } = useContext(DashboardContext);

  const goToReview = event => {
    switchTab(3);
  };

  return (
    <FormSwitchContainer fill="horizontal" justify="between" direction="row">
      <FormTitle>Compass Steps</FormTitle>
      <Button label="Go To Review" onClick={goToReview} primary />
    </FormSwitchContainer>
  )
}

export default Steps; 