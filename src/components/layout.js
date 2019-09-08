/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Amplify from 'aws-amplify';

import {AccountBar, CompassBar} from "./SideBarComponents"
import { LayoutContainer,SidebarContainer, MainViewContainer } from "../styles/layout"
import {globalStore} from "../context/context"
import { Auth } from 'aws-amplify'

import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const Layout = ({ children }) => {
  const {user, loginUser, compass} = globalStore()

  if (!user.hasOwnProperty("email")) {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(cognitoUser => {
      console.log(cognitoUser)
      const { email,sub } = cognitoUser.attributes;
      
      loginUser({ email, id: sub }); // save email to global store
    })
      .catch(err => console.log(err));
  }

  console.log(children)
  return (
    <LayoutContainer >
      <SidebarContainer>
      { user.email && <AccountBar />}
      { (user.email && localStorage.getItem('compass')) && <CompassBar id={localStorage.getItem('compass')}/> }
      </SidebarContainer>
      <MainViewContainer>
        {children}
      </MainViewContainer>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
