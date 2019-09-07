import React from "react";
import Landing from "../components/LandingPageComponents"
import Dashboard from "../components/DashboardComponent"
import Layout from '../components/Layout';
import { Auth } from 'aws-amplify'
import { globalStore } from "../context/context"
import { DashboardProvider } from "../context/DashboardPage/context"

const IndexPage = (props) => {
  // loginUser as saveToGlobalStore
  // user is the object in globalStore
  const { user, loginUser } = globalStore()

  if (!user.hasOwnProperty("email")) {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(cognitoUser => {
      const { email } = cognitoUser.attributes;

      loginUser({ email }); // save email to global store
    })
      .catch(err => console.log(err));

  }

  return (
    <Layout>
      {
        user.hasOwnProperty("email") ? <DashboardProvider><Dashboard /></DashboardProvider> : <Landing path="/" />
      }
    </Layout>
  )
}
export default IndexPage;
