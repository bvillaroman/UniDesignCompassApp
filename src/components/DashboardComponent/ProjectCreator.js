import React from 'react'

import { ProjectTypeFeed, ProjectTypeFeedContainer, DashboardSectionHeader } from "../../styles/Dashboard"

import ProjectTemplate from "./ProjectTemplate"
import CustomTemplate from "./CustomTemplate"
export default (props) => {

  return (
    <ProjectTypeFeedContainer>
      <DashboardSectionHeader>
        Create a Project
      </DashboardSectionHeader>
      <ProjectTypeFeed>
        <CustomTemplate/>
        <ProjectTemplate/>
      </ProjectTypeFeed>
    </ProjectTypeFeedContainer>
  )
}
