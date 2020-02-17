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
    <>
      <HeaderSpacing>
        <Header>
          <Title>Project Details</Title>
        </Header>
      </HeaderSpacing>
      <CompassViewerContainer>
        <CompassNavigationBar>
          <ProjectDetails />
        </CompassNavigationBar>
        <CompassNavigationBar2>
          <DisplayPermission />
          <TeachersPermission />
          <ScribePermission />
          <MembersPermission />
          <ReadersPermission />
        </CompassNavigationBar2>
      </CompassViewerContainer>
    </>
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
    margin: 0 2.3rem;
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
