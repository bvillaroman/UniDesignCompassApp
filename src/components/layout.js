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
import { Auth } from 'aws-amplify'
import { getCompass } from '../utils/queries'
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);


const Layout = (props) => {
  const {
    user = { },
    loginUser,
    compass = "",
    removeCompass,
    removeSession,
    removeInteraction
  } = useContext(GlobalContext);

  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (props.uri !== "/Compass" && props.uri !== "/Summary" && props.uri !== "/Analytics") {
      removeCompass()
      removeInteraction()
      removeSession()
    }
  }, [props.uri])

  useEffect(() => {
    // queries the compass and assigns it throughout the app
    if (compass) {
      getCompass(compass)
        .then((res) => {
          setLoading(false)
          setTitle(res.data.getCompass.name_of_compass)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        })
    }

    // user authentications 
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


  }, [compass])

  return (
    <LayoutContainer >
      <SideBar loading={loading} user={user} compass={compass} title={title}/>
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
