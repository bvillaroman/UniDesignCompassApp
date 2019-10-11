import React from 'react'

import { ProjectTypeFeed, ProjectTypeFeedContainer, ProjectTypeFeedHeader } from "../../styles/Dashboard"

import ProjectTemplate from "./ProjectTemplate"

export default (props) => {

  return (
    <ProjectTypeFeedContainer>
      <ProjectTypeFeedHeader>
        Create a Project
      </ProjectTypeFeedHeader>
      <ProjectTypeFeed>
        <ProjectTemplate/>
      </ProjectTypeFeed>
    </ProjectTypeFeedContainer>
  )
}
