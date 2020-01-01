import React from "react";
import { CompassViewerContainer, CompassNavigationBar } from "../../styles/CompassPage"
import ProjectDetails from "./ProjectDetails";
import ScribePermission from "./Permissions/ScribePermission";
import TeachersPermission from "./Permissions/TeachersPermission";
import MembersPermission from "./Permissions/MembersPermission";
import ReadersPermission from "./Permissions/ReadersPermission";
import DisplayPermission from "./Permissions/DisplayPermission";


export default (props) => {

  return (
    <CompassViewerContainer>
      <CompassNavigationBar>
        <ProjectDetails />
        <ScribePermission />
        <TeachersPermission />
        <MembersPermission />
        <ReadersPermission />
        <DisplayPermission />
      </CompassNavigationBar>
    </CompassViewerContainer>
  )
};

