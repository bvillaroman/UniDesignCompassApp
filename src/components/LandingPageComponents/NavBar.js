import React from 'react';
import {
  NavContainer,
  GatsbyLink,
  LinkContainer,
  LogoBox
} from '../../styles/LandingPage'
 

const NavBar = (props) => (
  <NavContainer>
      <LogoBox>
      <GatsbyLink to="/" label="UDCompass" />
      </LogoBox>
      <LinkContainer>
        <GatsbyLink to="/About" label="About" />
        <GatsbyLink to="/Contact" label="Contact"/>
      </LinkContainer>
  </NavContainer>
)

export default NavBar;
