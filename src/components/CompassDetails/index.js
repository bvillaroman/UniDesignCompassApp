import React from "react";
import { CompassViewerContainer, MainContainer, CompassNavigationBar } from "../../styles/CompassPage"
import ProjectDetails from "./ProjectDetails"
import SessionCreator from "./SessionCreator"
import CompassPermission from "./CompassPermissions"
import TeachersPermission from "./Permissions/TeachersPermission";
import MembersPermission from "./Permissions/MembersPermission";
import ReadersPermission from "./Permissions/ReadersPermission";


export default (props) => {

  return (
    <CompassViewerContainer>
      <MainContainer >
        <SessionCreator />
      </MainContainer>
      <CompassNavigationBar>
        <ProjectDetails />
        {/* <CompassPermission /> */}
        <TeachersPermission />
        <MembersPermission />
        <ReadersPermission />
      </CompassNavigationBar>
    </CompassViewerContainer>
  )
};

