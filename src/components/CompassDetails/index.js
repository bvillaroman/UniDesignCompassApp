import React from "react";
import { CompassViewerContainer, MainContainer, CompassNavigationBar } from "../../styles/CompassPage"
import ProjectDetails from "./ProjectDetails";
import SessionCreator from "./SessionCreator";
// import CompassPermission from "./CompassPermissions";
import ScribePermission from "./Permissions/ScribePermission";
import TeachersPermission from "./Permissions/TeachersPermission";
import MembersPermission from "./Permissions/MembersPermission";
import ReadersPermission from "./Permissions/ReadersPermission";
import DisplayPermission from "./Permissions/DisplayPermission";


export default (props) => {

  return (
    <CompassViewerContainer>
      <MainContainer >
        <SessionCreator />
      </MainContainer>
      <CompassNavigationBar>
        <ProjectDetails />
        {/* <CompassPermission /> */}
        <ScribePermission />
        <TeachersPermission />
        <MembersPermission />
        <ReadersPermission />
        <DisplayPermission />
      </CompassNavigationBar>
    </CompassViewerContainer>
  )
};

