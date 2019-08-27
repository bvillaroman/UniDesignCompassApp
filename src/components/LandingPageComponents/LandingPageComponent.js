import React from 'react';
import { Grommet } from 'grommet'
import {
  BoxWrapper,
  BoxNav,
  BoxA,
  BoxB,
  BoxC,
  BoxAText,
  BoxBText,
  BoxNavText,
  GatsbyLinks,
  LinkContainer,
  LogoBox
} from '../../styles/LandingPage'

class LandingPageComponent extends React.Component {
  render() {
    return (
      <Grommet>
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
        <BoxWrapper>
          <BoxA><BoxAText>BoxA</BoxAText></BoxA>
          <BoxB><BoxBText>BoxB</BoxBText></BoxB>
          <BoxC><p>BoxC/Logo</p></BoxC>
        </BoxWrapper>
      </Grommet>
    )
  }
}

export default LandingPageComponent;