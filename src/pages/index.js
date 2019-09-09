import React from "react";
import Landing from "../components/LandingPageComponents"
import Dashboard from "../components/DashboardComponent"
import Layout from '../components/Layout';
import { globalStore } from "../context/context"
import { DashboardProvider } from "../context/DashboardPage/context"

const IndexPage = (props) => {
  
  const { user } = globalStore()

  return (
    <Layout>
      {
        user.hasOwnProperty("email") ? 
        <DashboardProvider>
          <Dashboard />
        </DashboardProvider> 
        : <Landing path="/" />
      }
    </Layout>
  )
}
export default IndexPage;
