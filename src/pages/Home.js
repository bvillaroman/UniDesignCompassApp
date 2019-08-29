import React from "react";
import Layout from '../components/Layout';
import { NavBar, MainView } from '../components/LandingPageComponents'

const HomePage = (props) => (
  <Layout>
    <NavBar />
    <MainView />
  </Layout>
);
export default HomePage;
