import React from 'react'

import { ProjectTypeFeed, ProjectTypeFeedContainer, DashboardSectionHeader } from "../../styles/Dashboard"

import ProjectTemplate from "./ProjectTemplate"

export default (props) => {

  return (
    <ProjectTypeFeedContainer>
      <DashboardSectionHeader>
        Create a Project
      </DashboardSectionHeader>
      <ProjectTypeFeed>
        <ProjectTemplate/>
      </ProjectTypeFeed>
    </ProjectTypeFeedContainer>
  )
}
