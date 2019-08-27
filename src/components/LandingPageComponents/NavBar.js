import React from 'react';
import {
  BoxNav,
  BoxNavText,
  GatsbyLinks,
  LinkContainer,
  LogoBox
} from '../../styles/LandingPage'

const NavBar = (props) => (
  <BoxNav>
    <BoxNavText>
      <LogoBox>
        UniCompass Design
      </LogoBox>
      <LinkContainer>
        <GatsbyLinks to="/about">About</GatsbyLinks>
        <GatsbyLinks to="/contact">Contact</GatsbyLinks>
        <GatsbyLinks to="/SignUp">SignUp</GatsbyLinks>
      </LinkContainer>
    </ BoxNavText>
  </BoxNav>
)

export default NavBar;
