import styled from "styled-components"
import React from "react";
import { Box, } from "grommet";

export const LayoutContainer = styled(Box)` 
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px){
    flex-direction: column;
  }  
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

  @media (max-width: 500px){
    flex-direction: column-reverse;
    //block-size: inherit;
  }  
`;
export const Loader = () => (
  <div className="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)