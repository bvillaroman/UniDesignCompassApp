import React from "react";
import { CompassNavigationBar } from "../../styles/CompassPage"
import ProjectDetails from "./ProjectDetails";
import ScribePermission from "./Permissions/ScribePermission";
import TeachersPermission from "./Permissions/NewTeacherPermission";
import MembersPermission from "./Permissions/NewMemberPermission";
import ReadersPermission from "./Permissions/NewReaderPermission";
import DisplayPermission from "./Permissions/DisplayPermission";
import HeaderInfo from "./HeaderInfo";
import { Box } from "grommet";
import styled from "styled-components";


export default (props) => {

  return (
    <CompassViewerContainer>
      <HeaderInfo />
      <ProjectDetailBody>
        <CompassNavigationBar>
          <ProjectDetails />
        </CompassNavigationBar>
        <CompassNavigationBar2>
          <DisplayPermission />
          <ContainerPermission className="all-permissions-help">
            <TeachersPermission />
            <ScribePermission />
            <MembersPermission />
            <ReadersPermission />
          </ContainerPermission>
        </CompassNavigationBar2>
      </ProjectDetailBody>
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

export const HeaderSpacing = styled.div`
  padding: 0 2rem;
`

export const Header = styled.div`
  color: black;
  min-height: 2.5rem;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.1rem solid rgba(0,0,0,0.1);
  width: 100%;
`;
export const Title = styled.p`
  color: black;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
`;

export const CompassViewerContainer = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  overflow: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px){
    flex-direction: column;
  }    
`

export const ContainerPermission = styled.div`

`;

export const ProjectDetailBody = styled.div`
  display: flex;

  @media (max-width: 767px){
    flex-direction: column;
  }  
`;