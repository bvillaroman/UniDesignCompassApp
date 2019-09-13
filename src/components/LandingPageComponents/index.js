import React from "react";
import NavBar from "./NavBar"
import MainView from "./MainView"
import { LandingPageContainer } from "../../styles/LandingPage"

const LandingPage = (props) => (
  <LandingPageContainer>
    <NavBar />
    <MainView />
  </LandingPageContainer>
);
export default LandingPage;
