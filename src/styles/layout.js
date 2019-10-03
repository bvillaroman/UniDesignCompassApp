import styled from "styled-components"
import React from "react";
import { Box, } from "grommet";

export const LayoutContainer = styled(Box)` 
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const SidebarContainer = styled(Box)`
  height: 100vh;
`;
export const MainViewContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  width: ${props => props.Compass ? '80%' : '100%'};
  height: 100vh;
  background: #F4F6F9;
`;
export const Loader = () => (
  <div className="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)