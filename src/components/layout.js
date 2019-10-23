/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useState, useContext } from "react"
import PropTypes from "prop-types"
import Amplify from 'aws-amplify';
import SideBar from "./SideBarComponents"
import { LayoutContainer, MainViewContainer } from "../styles/layout"

import { GlobalContext } from "../context/context"
import { CompassContext } from "../context/CompassPage/context"

import { Auth } from 'aws-amplify'
import { getCompass } from '../utils/queries'
import queryStringParser from '../utils/queryStringParser'
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);


const Layout = (props) => {
  const { user = {}, loginUser } = useContext(GlobalContext);

  const [compassExists, setCompassExists] = useState('')
  const [loading, setLoading] = useState(true)

  // setting up the compass through the url
  useEffect(() => {
    const compass = queryStringParser(props.location.search).compassID
    if (compass) {
      getCompass(compass)
        .then((res) => {
          console.log("compassExists")
          setLoading(false)
          setCompassExists(true)
        })
        .catch((err) => {
          setLoading(false)
          setCompassExists(false)
          console.log(err)
        })

    } else {
      setCompassExists(false)
    }
  }, [props.location.search])

  // user authentications 
  useEffect(() => {
    if (!user.hasOwnProperty("email")) {
      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      })
        .then(cognitoUser => {
          const { email, sub } = cognitoUser.attributes;
          setLoading(false)
          loginUser({ email, id: sub }); // save email to global store
        })
        .catch(err => {
          setLoading(false)
          console.log(`cognito error: ${err}`)
        });
    }

  }, [user])

  return (
    <LayoutContainer >
      <SideBar loading={loading} compassExists={compassExists}/>
      <MainViewContainer>
        {props.children}
      </MainViewContainer>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
