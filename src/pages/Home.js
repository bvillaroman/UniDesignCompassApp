import React from "react";
import Layout from '../components/Layout';
import Logger from "../components/Logger"

const HomePage = (props) => (
  <Layout>
    <Logger logs={["log 1","log 2","log 1","log 2","log 1","log 2","log 1","log 2","log 1","log 2"]} />
  </Layout>
);
export default HomePage;
