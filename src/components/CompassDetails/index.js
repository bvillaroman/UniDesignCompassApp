import React from "react";
import { CompassViewerContainer, CompassNavigationBar } from "../../styles/CompassPage"
import ProjectDetails from "./ProjectDetails";
import ScribePermission from "./Permissions/ScribePermission";
import TeachersPermission from "./Permissions/NewTeacherPermission";
import MembersPermission from "./Permissions/NewMemberPermission";
import ReadersPermission from "./Permissions/NewReaderPermission";
import DisplayPermission from "./Permissions/DisplayPermission";
import { Box } from "grommet";
import styled from "styled-components";


export default (props) => {

  return (
    <CompassViewerContainer>
      <CompassNavigationBar>
        <ProjectDetails />
        <DisplayPermission />
      </CompassNavigationBar>
      <CompassNavigationBar2>
        <TeachersPermission />
        <ScribePermission />
        <MembersPermission />
        <ReadersPermission />

        {/* <DeletePermission /> */}
      </CompassNavigationBar2>
    </CompassViewerContainer>
  )
};

export const CompassNavigationBar2 = styled(Box)`
  width: 50%;
  height: 100%
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  // background: white;

  @media (max-width: 767px){
    width: 100%;
    flex-direction: column;
  } 
`;
