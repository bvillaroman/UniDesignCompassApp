/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import Amplify from 'aws-amplify';

import {AccountBar, CompassBar} from "./SideBarComponents"
import { LayoutContainer,SidebarContainer, MainViewContainer } from "../styles/layout"
import {globalStore} from "../context/context"
import { Auth } from 'aws-amplify'
import { getCompass } from '../utils/queries'
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const Layout = ({ children }) => {
  const {user, loginUser, selectCompass, compass} = globalStore()

  useEffect(() => {

    console.log("call")
    const isNewCompass = localStorage.getItem('compass') 
                      && compass.id !== localStorage.getItem('compass')
    // queries the compass and assigns it throughout the app
    if (isNewCompass) {
      getCompass(localStorage.getItem('compass'))
        .then((res) => {
          selectCompass(res.data.getCompass)
        })
        .catch((err) => {
          console.log(err)
        })
    } 
    
    // user authentications 
    if (!user.hasOwnProperty("email")) {
      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      })
      .then(cognitoUser => {
        const { email,sub } = cognitoUser.attributes;
        
        loginUser({ email, id: sub }); // save email to global store
      })
      .catch(err => console.log(`cognito error: ${err}`));
    }
    
    
  }, [children])
  
  return (
    <LayoutContainer >
      <SidebarContainer>
      { user.email && <AccountBar />}
      { (user.email && compass.id) && <CompassBar compass={compass}/> }
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
