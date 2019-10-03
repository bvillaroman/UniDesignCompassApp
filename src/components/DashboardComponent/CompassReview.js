import React, {useContext} from 'react'
import { Text} from "grommet";

import { DashboardContext } from "../../context/DashboardPage/context"
import { 
  ReviewCard, 
  ReviewTitle,
  SubmitCompassButton, 
  ReviewStepsView,
  ReviewStepPanel ,
  ReviewStepDescription,
  StepContainer,
  ReviewDetails,
  CompassCircle
} from "../../styles/Dashboard"
import { createCompass, createStep } from "../../utils/mutations"

const Review = ({backToDashboard}) => {
  const { form } = useContext(DashboardContext);

  const submitCompass = event => {
    return createCompass(form.title,form.description,form.admins,form.readers)
      .then((compass) => {
        form.steps.map((step,key) => {
          return createStep(step.title,step.description,step.color,compass.data.createCompass.id)
        })
        return backToDashboard()
      })
      .catch(err => console.log(err))
  };

  return (
    <ReviewCard >
      <ReviewDetails>
        <ReviewTitle gridArea="header">
          {form.title}
        </ReviewTitle>
        <CompassCircle 
          gridArea="content" 
          circleLength={form.steps.length}
          size={12}
        >
          {
            form.steps.map((item,key) => (
                <StepContainer 
                  key={key} 
                  circleLength={form.steps.length}
                  rotateAngle={key*(360/(form.steps.length))}
                  color={item.color}
                />
              )
            )
          }
        </CompassCircle>
        <SubmitCompassButton 
          gridArea="submit" 
          onClick={submitCompass} 
          label="Create Compass"
        />
      </ReviewDetails>
      <ReviewDetails>
        <ReviewStepsView gridArea="compass" multiple>
          { 
            form.steps.map((step,key) => (        
              <ReviewStepPanel
                key={key}
                color={step.color}
                label={<Text size="large">{step.title}</Text>}
              >
                <ReviewStepDescription>
                  {step.description}
                </ReviewStepDescription>
              </ReviewStepPanel>
            ))
          }
        </ReviewStepsView>
      </ReviewDetails>
    </ReviewCard>
  )
}

export default Review; 