import React from "react";
import { CompassViewerContainer, MainContainer, CompassNavigationBar } from "../../../styles/CompassPage"
import ProjectDetails from "./ProjectDetails"
import SessionCreator from "./SessionCreator"

export default (props) => {

  return (
    <CompassViewerContainer>
      <MainContainer >
        <SessionCreator/>  
      </MainContainer>
      <CompassNavigationBar>
        <ProjectDetails />
      </CompassNavigationBar>
    </CompassViewerContainer>
)};

