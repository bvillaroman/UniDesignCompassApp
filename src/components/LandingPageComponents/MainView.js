import React from 'react';
import {
  MainViewContainer,
  BoxA,
  BoxB,
  BoxC,
  BoxAText,
  BoxBText, 
} from '../../styles/LandingPage'

const MainView = (props) => (
  <MainViewContainer>
    <BoxA><BoxAText>BoxA</BoxAText></BoxA>
    <BoxB><BoxBText>BoxB</BoxBText></BoxB>
    <BoxC><p>BoxC/Logo</p></BoxC>
  </MainViewContainer>
)

export default MainView;