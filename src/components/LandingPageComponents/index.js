import React from "react";
import Layout from '../Layout';
import NavBar from "./NavBar"
import MainView from "./MainView"

const LandingPage = (props) => (
  <Layout>
    <NavBar />
    <MainView />
  </Layout>
);
export default LandingPage;
