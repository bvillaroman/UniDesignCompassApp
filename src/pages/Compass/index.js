import React from "react";
import Layout from '../../components/Layout';
import LogPage from "./LogPage"
import {LoggerProvider} from "./context"

const CompassPage = (props) => (
  <Layout>
    <LoggerProvider>
      <LogPage />
    </LoggerProvider>
  </Layout>
);
export default CompassPage;
