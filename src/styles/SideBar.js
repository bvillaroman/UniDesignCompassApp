import React from "react"
import styled from 'styled-components';
import { Box, Button } from 'grommet'
import { Link } from 'gatsby';

export const NavigationContainer = styled(Box)`
  text-align: center;
  min-width: 4rem;
  padding: 1rem 0;
  background: #5361FE;

  @media (max-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
  }
`;

export const CompassSideBar = styled(Box)`
  background: #5361FE;
  display: flex;
  flex-direction: column;
  width: 11rem;
  padding: 1rem 0;
  height: 100vh;
  justify-content: space-between;

  @media (max-width: 768px){
    width: 100%;
    height: 0%;
    
    
    a:not(:nth-last-child(4)){
      ${props => props.renderSidebar ? 'display: none;' : 'initial'};
    };

  }
`
export const CompassHeaderDash = styled(Link)`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  font-weight: 900;
  color: white;
  text-decoration: underline;

  @media (max-width: 768px){
    //flex: 0 0 100%;
    line-height: 3rem;
    margin-bottom: auto;
    //flex: 0 1 100%;
  }
`

export const CompassHeaderCompass = styled(Link)`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  font-weight: 900;
  color: white;
  text-decoration: underline;

  @media (max-width: 768px){
    //flex: 0 0 100%;
    line-height: 3rem;
    margin-bottom: auto;
    flex: 0 1 100%;
  }
`

export const LinkContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100%

  @media (max-width: 768px){
    //width: 20%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-basis:50%;
  }
`;

const CompassLinkStyles = styled(Link)`
  display: flex;
  flex-direction: row;
  height: 2rem;
  color: white;
  text-decoration: none;
  font-weight: 560;
  align-items: center;
  svg {
    fill: black;
    stroke:  black;
    ${({active}) => active && "padding-bottom: 0.2rem"};
  }
  span {
    margin-left: 0.8rem;
    ${({active}) => active && "border-bottom: 0.1rem solid white"};
    ${({active}) => active && "padding-bottom: 0.1rem"};
    line-height: 2.0rem;
  }
  justify-content: center;
  margin: 0.5rem 0;
  @media (max-width: 768px){
    //display: none;
  }
`
export const SignOutButton = styled(Button)`
  display: flex;
  flex-direction: row;
  height: 2rem;
  color: white;
  text-decoration: none;
  font-weight: 560;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
`

export const HamburgerIcon = styled.label`
  display: none;

  @media (max-width: 768px){
    display: block;
    cursor: pointer;
    align-self: flex-end;
  }
`;

export const CompassLink = ({ to, children, active }) => (
  <CompassLinkStyles
    to={to}
    active={active}
    partiallyActive={to !== "/" ? true : false}

  >
    {children}
  </CompassLinkStyles>
)


// a:not(:nth-last-child(4)){
//   ${props => props.renderSidebar ? 'display: none;' : 'initial'};
// };