import React from 'react';
import { Button } from 'grommet';
import {
  NavContainer,
  GatsbyLink,
  LinkContainer,
  LogoBox
} from '../../styles/LandingPage'
 

const NavBar = (props) => (
  <NavContainer>
      <LogoBox>
        UDCompass 
      </LogoBox>
      <LinkContainer>
        <GatsbyLink to="/About" label="About" />
        <GatsbyLink to="/Contact" label="Contact"/>
        <GatsbyLink to="/Auth" label="Sign up" primary/>
      </LinkContainer>
  </NavContainer>
)

export default NavBar;
