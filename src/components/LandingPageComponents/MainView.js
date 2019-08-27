import React from 'react';
import {
  BoxWrapper,
  BoxA,
  BoxB,
  BoxC,
  BoxAText,
  BoxBText, 
} from '../../styles/LandingPage'

const MainView = (props) => (
  <BoxWrapper>
    <BoxA><BoxAText>BoxA</BoxAText></BoxA>
    <BoxB><BoxBText>BoxB</BoxBText></BoxB>
    <BoxC><p>BoxC/Logo</p></BoxC>
  </BoxWrapper>
)

export default MainView;