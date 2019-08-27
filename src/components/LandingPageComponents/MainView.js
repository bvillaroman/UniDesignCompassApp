import React from 'react';
import {
  MainViewContainer,
  MainContent,
  AuthContainer,
  AboutContainer,
  ContactContainer
} from '../../styles/LandingPage'

import Auth from "../../components/AuthComponent"

const MainView = (props) => (
  <MainViewContainer
    rows={['80vh', 'xsmall', 'xsmall']}
    columns={['1/2', '1/2']}
    fill
    areas={[
      { name: 'mainContent', start: [0, 0], end: [0, 0] },
      { name: 'AuthContainer', start: [1, 0], end: [1, 0] },
      { name: 'about', start: [0, 1], end: [1, 1] },      
      { name: 'contact', start: [0, 2], end: [1, 2] }
    ]}
  >
    <MainContent gridArea="mainContent">
      <p>Record, track and visualize your design process.</p>
    </MainContent>
    <AuthContainer gridArea="AuthContainer"><Auth /></AuthContainer>
    <AboutContainer gridArea="contact" ><p>About</p></AboutContainer>
    <ContactContainer gridArea="about" ><p>Contact</p></ContactContainer>
  </MainViewContainer>
)

export default MainView;