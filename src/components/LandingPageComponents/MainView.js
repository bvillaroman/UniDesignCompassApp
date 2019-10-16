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
    rows={['85%', 'xsmall', 'xsmall']}
    columns={['55%', '45%']}
    fill
    areas={[
      { name: 'mainContent', start: [0, 0], end: [0, 0] },
      { name: 'FormContainer', start: [1, 0], end: [1, 0] },
      { name: 'about', start: [0, 1], end: [1, 1] },
      { name: 'contact', start: [0, 2], end: [1, 2] }
    ]}
  >
    <MainContent gridArea="mainContent">
      <p>Log, Track and Visualize your Design Process.</p>
    </MainContent>
    <AuthContainer gridArea="FormContainer"><Auth /></AuthContainer>
    <AboutContainer gridArea="contact" ><p>About</p></AboutContainer>
    <ContactContainer gridArea="about" ><p>Contact</p></ContactContainer>
  </MainViewContainer>
)

export default MainView;