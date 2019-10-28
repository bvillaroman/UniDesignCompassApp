import React, { useContext } from 'react'
import { ReviewModalContext } from "../../context/ReviewModal/context"
import {
  TemplateContainer,
  CompassCircle,
  StepContainer,
  CompassCardTitle,
  ProjectTypeDetails
} from "../../styles/Dashboard"

export default (props) => {
  const {updateShowModal} = useContext(ReviewModalContext)

  const goToReview = (event) => {
    updateShowModal(true)
  };

  return (
    <TemplateContainer onClick={goToReview}>
      <ProjectTypeDetails>
          plus
      </ProjectTypeDetails>
      <CompassCardTitle>Custom</CompassCardTitle>
    </TemplateContainer>     
  )
}
