import React from 'react';
import {
  MainViewContainer,
  MainContent,
  MainLogo,
  AboutContainer,
  ContactContainer
} from '../../styles/LandingPage'

const MainView = (props) => (
  <MainViewContainer
    rows={['80vh', 'xsmall', 'xsmall']}
    columns={['1/2', '1/2']}
    fill
    gap="small"
    areas={[
      { name: 'mainContent', start: [0, 0], end: [0, 0] },
      { name: 'mainLogo', start: [1, 0], end: [1, 0] },
      { name: 'about', start: [0, 1], end: [1, 1] },      
      { name: 'contact', start: [0, 2], end: [1, 2] }
    ]}
  >
    <MainContent gridArea="mainContent">
      Record, track and visualize your design process.
    </MainContent>
    <MainLogo gridArea="mainLogo"><p>logo</p></MainLogo>
    <AboutContainer gridArea="contact" ><p>About</p></AboutContainer>
    <ContactContainer gridArea="about" ><p>Contact</p></ContactContainer>
  </MainViewContainer>
)

export default MainView;