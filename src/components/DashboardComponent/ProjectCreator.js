import React, { useContext } from 'react'
import { GlobalContext } from "../../context/context"
import {
  CompassCard,
  CompassTypeFeed,
  CompassCircle,
  StepContainer,
  CompassCardTitle,
  CompassCardDetails
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
      title: "Generate Ideas",
      description: "Creating ideas/ rough drafts of solutions",
      color: "#9b59b6"
    },
    {
      title: "Model/ Test Ideas",
      description: "Created and test new solutions",
      color: "#f1c40f"
    },
    {
      title: "Choose/ Make Prototype",
      description: "Choosing the best solution and implementing it",
      color: "#e67e22"
    },
    {
      title: "Troubleshoot/ Revise",
      description: "Edit/revise current implementation of solution",
      color: "#e74c3c"
    },
    {
      title: "Communicate/ Reflect",
      description: "Discuss the overall reflection of the process",
      color: "#7f8c8d"
    }
  ];


  const goToReview = (event) => {
    createCompass("Untitled", " ", [user.email], [])
      .then(res => {
        defaultCompass.forEach((step, key) =>
          createStep(step.title, step.description, step.color, res.data.createCompass.id)
        )
        navigate(`/Compass?c=${res.data.createCompass.id}`)
      })
      .catch(err => console.log(err))
  };

  return (

    <CompassTypeFeed>
      <section>
        <CompassCard onClick={goToReview}>
          <CompassCardTitle>Default Compass</CompassCardTitle>
          <CompassCardDetails>
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
          </CompassCardDetails>
        </CompassCard>
      </section>
    </CompassTypeFeed>
  )
}
