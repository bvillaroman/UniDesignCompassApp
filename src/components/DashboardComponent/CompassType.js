import React, {useContext} from 'react'
import { Button } from "grommet";

import { DashboardContext } from "../../context/DashboardPage/context"
import { FormSwitchContainer, FormCard, FormTitle } from "../../styles/Form"

const Type = (props) => {

  const { updateForm, switchTab } = useContext(DashboardContext);

  const goToCustom = event => {
    switchTab(3);
  };

  const goToReview = event => {
    updateForm({steps : [
      {
        title:  "Grasp Challenge",
        description: "Understanding the challenge/problem "
      },
      {
        title:  "Research",
        description: "Investigating/Researching ideas to incorporate into a solution"
      },
      {
        title:  "Generate Ideas",
        description: "Creating ideas/rough drafts of solutions"
      },
      {
        title:  "Model/Test Ideas",
        description: "Created and test new solutions"
      },
      {
        title:  "Choose/Make Prototype",
        description: "Choosing the best solution and implementing it"
      },
      {
        title:  "Troubleshoot/Revise",
        description: "Edit/revise current implementation of solution"
      },
      {
        title:  "Communicate/Reflect",
        description: "Discuss the overall reflection of the process"
      },
    ]})
    switchTab(3);
  };

  return (
    <FormCard>
      <FormTitle>Compass Type</FormTitle>
      <FormSwitchContainer fill="horizontal" justify="between" direction="row">
        <Button label="Custom Steps" onClick={goToCustom} primary />
        <Button label="Default Steps" onClick={goToReview} primary />
      </FormSwitchContainer> 
    </FormCard>
  )
}

export default Type; 