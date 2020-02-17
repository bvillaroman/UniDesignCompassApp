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
  padding: 1rem;
  height: 100vh;
  justify-content: space-between;

  @media (max-width: 768px){
    width: 100%;
    height: 0%;
        
    a:not(:nth-last-child(5)){
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
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  font-weight: 900;
  color: white;
  text-decoration: underline;
  align-self: center;
  text-decoration: none;

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
  // width: 7.2rem;
  align-items: ${props => props.center ? "center" : "flex-start"};

  @media (max-width: 768px){
    //width: 20%;
    width: 100%;
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
  margin: 0.5rem 0!important;
  svg {
    fill: black;
    stroke:  black;
    ${({ size }) => size === "small" && "height: 1.5rem"};
    ${({ size }) => size === "small" && "width: 1.5rem"};
    ${({ size }) => size === "small" && "margin-left: 1.5rem"};
    ${({ active }) => active && "margin-bottom: 0.2rem"};
  }
  span {
    ${({ size }) => size === "small" ? "margin-left: 0.5rem;" : "margin-left: 0.8rem;"};
    ${({ active, size }) => {
    if (active) {
      if (size === "small") return "border-bottom: 0.05rem solid white"
      else return "border-bottom: 0.1rem solid white"
    }
  }};
    ${({ active, size }) => {
    if (active) {
      if (size === "small") return "padding-bottom: 0.05rem"
      else return "padding-bottom: 0.1rem"
    }
  }};
    ${({ size }) => size === "small" && "font-size: 0.8rem"};
  }
  justify-content: center;
  ${({ size }) => size === "small" ? "margin: 0 auto" : "margin: 0.5rem auto"};
  @media (max-width: 768px){
    //display: none;
  }
`
const CompassLinkStyles2 = styled(Link)`
  display: flex;
  flex-direction: row;
  height: 2rem;
  color: white;
  text-decoration: none;
  font-weight: 560;
  margin: 0.5rem 0!important;
  pointer-events: none;
  svg {
    fill: black;
    stroke:  black;
    ${({ size }) => size === "small" && "height: 1.5rem"};
    ${({ size }) => size === "small" && "width: 1.5rem"};
    ${({ size }) => size === "small" && "margin-left: 1.5rem"};
    ${({ active }) => active && "margin-bottom: 0.2rem"};
  }
  span {
    ${({ size }) => size === "small" ? "margin-left: 0.5rem;" : "margin-left: 0.8rem;"};
    ${({ active, size }) => {
    if (active) {
      if (size === "small") return "border-bottom: 0.05rem solid white"
      else return "border-bottom: 0.1rem solid white"
    }
  }};
    ${({ active, size }) => {
    if (active) {
      if (size === "small") return "padding-bottom: 0.05rem"
      else return "padding-bottom: 0.1rem"
    }
  }};
    ${({ size }) => size === "small" && "font-size: 0.8rem"};
  }
  justify-content: center;
  ${({ size }) => size === "small" ? "margin: 0 auto" : "margin: 0.5rem auto"};
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
    display: flex;
    cursor: pointer;
    align-self: flex-end;
  }
`;

export const CompassLink = ({ to, children, active, size, onClick }) => (
  <CompassLinkStyles
    to={to}
    active={active}
    partiallyActive={to !== "/" ? true : false}
    size={size}
    onClick={onClick}
  >
    {children}
  </CompassLinkStyles>
)

export const CompassLink2 = ({ to, children, active, size, onClick }) => (
  <CompassLinkStyles2
    to={to}
    active={active}
    partiallyActive={to !== "/" ? true : false}
    size={size}
    onClick={onClick}
  >
    {children}
  </CompassLinkStyles2>
)

