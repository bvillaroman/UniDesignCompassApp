import React from "react";
import { CompassViewerContainer, MainContainer, CompassNavigationBar } from "../../../styles/CompassPage"
import ProjectDetails from "./ProjectDetails"
import SessionCreator from "./SessionCreator"
import CompassPermission from "./CompassPermissions"

export default (props) => {

  return (
    <CompassViewerContainer>
      <MainContainer >
        <SessionCreator />
      </MainContainer>
      <CompassNavigationBar>
        <ProjectDetails />
        <CompassPermission />
      </CompassNavigationBar>
    </CompassViewerContainer>
  )
};

