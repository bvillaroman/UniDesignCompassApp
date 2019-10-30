import React, { useContext } from 'react'
import { GlobalContext } from "../../context/context"
import {
  TemplateContainer,
  CompassCircle,
  StepContainer,
  CompassCardTitle,
  ProjectTypeDetails
} from "../../styles/Dashboard"
import { createCompass, createStep } from "../../utils/mutations"
import { navigate } from "gatsby"

export default (props) => {
  const { user } = useContext(GlobalContext);

  const defaultCompass = [
    {
      title: "Grasp Challenge",
      description: "Understanding the challenge/ problem ",
      color: "#3498db"
    },
    {
      title: "Research",
      description: "Investigating/ Researching ideas to incorporate into a solution",
      color: "#2ecc71"
    },
    {
      title: "Brainstorm",
      description: "Creating ideas/ rough drafts of solutions",
      color: "#9b59b6"
    },
    {
      title: "Test",
      description: "Created and test new solutions",
      color: "#f1c40f"
    },
    {
      title: "Prototype",
      description: "Choosing the best solution and implementing it",
      color: "#e67e22"
    },
    {
      title: "Revise",
      description: "Edit/revise current implementation of solution",
      color: "#e74c3c"
    },
    {
      title: "Reflect",
      description: "Discuss the overall reflection of the process",
      color: "#7f8c8d"
    }
  ];

  const goToReview = (event) => {
    createCompass("Untitled", "-", "default", [user.email], [])
      .then(res => {
        defaultCompass.forEach((step, key) =>
          createStep(step.title, step.description, step.color, res.data.createCompass.id)
        )
        navigate(`/Compass/?c=${res.data.createCompass.id}`)
      })
      .catch(err => console.log(err))
  };

  return (
    <TemplateContainer onClick={goToReview}>
      <ProjectTypeDetails>
        <CompassCircle gridArea="content" circleLength={defaultCompass.length}>
          {
            defaultCompass.map((item, key) => (
                <StepContainer
                  key={key}
                  circleLength={defaultCompass.length}
                  rotateAngle={key * (360 / (defaultCompass.length))}
                  color={item.color}
                />
              )
            )
          }
        </CompassCircle>
      </ProjectTypeDetails>
      <CompassCardTitle>Default Compass</CompassCardTitle>
    </TemplateContainer>     
  )
}
