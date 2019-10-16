import React from "react"
import styled from 'styled-components';
import { Box, Button } from 'grommet'
import { Link } from 'gatsby';

export const NavigationContainer = styled(Box)`
  text-align: center;
  min-width: 4rem;
  padding: 1rem 0;
  background: #5361FE;
`;

export const CompassSideBar = styled(Box)`
  background: #5361FE;
  display: flex;
  flex-direction: column;
  width: 11rem;
  padding: 1rem 0;
  height: 100vh;
  justify-content: space-between;

  @media (max-width: 376px){
    width: 100%;
    height: 0%;
  }
`
export const CompassHeader = styled(Link)`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  font-weight: 900;
  color: white;
  text-decoration: underline;
`
export const LinkContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
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
    stroke: black;
  }
  span {
    margin-left: 0.8rem;
  }
  justify-content: center;
  margin: 0.5rem 0;

  @media (max-width: 376px){
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
  line-height: 70px;

  @media (max-width: 376px){
    //display: block;
    //cursor: pointer;

    &:hover ${CompassLink}{
      display: block;
    }
  }
`;

export const HamburgerInput = styled.input`
  display: none;

  @media (max-width: 376px){
    #toggle:checked + .CompassLink {
      display: block;
    }
  }
`;

const activeLinkStyle = {
  background: "white",
  color: "black"

};

export const CompassLink = ({ to, children }) => (
  <CompassLinkStyles
    to={to}
    activeStyle={activeLinkStyle}
    partiallyActive={to !== "/" ? true : false}

  >
    {children}
  </CompassLinkStyles>
)