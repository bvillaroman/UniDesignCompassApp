import React from "react";
import Layout from '../components/Layout';
import LogPage from "../components/CompassComponents/LogPage"
import {LoggerProvider} from "../components/CompassComponents/context"

const CompassPage = (props) => (
  <Layout>
    <LoggerProvider>
      <LogPage />
    </LoggerProvider>
  </Layout>
);
export default CompassPage;
