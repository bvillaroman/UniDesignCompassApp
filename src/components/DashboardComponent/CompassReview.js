import React from 'react'
import {Box, Text} from "grommet";

import { userDashboard } from "../../context/DashboardPage/context"
import { globalStore } from "../../context/context"
import { 
  ReviewCard, 
  ReviewTitle,
  ReviewDescription, 
  SubmitCompassButton, 
  ReviewStepsView,
  ReviewStepPanel 
} from "../../styles/Dashboard"

const Review = ({backToDashboard}) => {

  const { form } = userDashboard();
  const { addCompass } = globalStore();

  const submitCompass = event => {
    addCompass(form);
    backToDashboard()
  };

  return (
    <ReviewCard 
      rows={['20%', '60%', '20%']}
      columns={['50%', '50%']}
      
      gap='1rem'
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'description', start: [0, 1], end: [0, 1]},
        { name: 'compass', start: [1, 0], end: [1, 2] }, 
        { name: 'submit', start: [0, 2], end: [0, 2] }, 
      ]}  
    >
      <ReviewTitle gridArea="header">{form.title}</ReviewTitle>
      <ReviewDescription gridArea="description">{form.description}</ReviewDescription>
      <ReviewStepsView gridArea="compass" multiple>
        { 
          form.steps.map((step,key) => (        
            <ReviewStepPanel
              key={key}
              label={<Text size="large">{step.title}</Text>}
            >
              <Box background="light-2" height="small">
                {step.description}
              </Box>
            </ReviewStepPanel>
          ))
        }
      </ReviewStepsView>
      <SubmitCompassButton gridArea="submit" onClick={submitCompass} label="Create Compass"/>
    </ReviewCard>
  )
}

export default Review; 