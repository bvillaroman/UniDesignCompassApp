import React from "react";
import Layout from '../components/Layout';
// import LogPage from "../components/CompassComponents/LogPage"
import SessionCreator from "../components/CompassComponents/SessionCreator"
import {LoggerProvider} from "../components/CompassComponents/context"
import { MainView } from "../styles/CompassPage"

const CompassPage = (props) => (
  <Layout>
    <LoggerProvider>
      <MainView>
        <SessionCreator />
      </MainView>
    </LoggerProvider>
  </Layout>
);
export default CompassPage;
