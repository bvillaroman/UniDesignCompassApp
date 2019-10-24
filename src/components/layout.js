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
import { LayoutContainer, MainViewContainer, Loader } from "../styles/layout"

import { GlobalContext } from "../context/context"
import {CompassContext} from "../context/CompassPage/context"

import { Auth } from 'aws-amplify'
import { getCompass,getSession,getInteraction } from '../utils/queries'
import queryStringParser from '../utils/queryStringParser'
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);


const Layout = (props) => {
  const { user = {}, loginUser } = useContext(GlobalContext);
  const {
    updateCompass, 
    clearCompass,
    updateSession,
    clearSession, 
    updateInteraction, 
    clearInteraction,    
    updateInteractions, 
    clearInteractions
  } = useContext(CompassContext);

  const [loading, setLoading] = useState(true)

  // setting up the compass through the url
  useEffect(() => {
    const compass = queryStringParser(props.location.search).compassID
    if (compass) {
      clearCompass()
      setLoading(true)
      getCompass(compass)
        .then((res) => {
          setLoading(false);
          updateCompass(res.data.getCompass);
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          clearCompass();
          console.log(err)
        })
    } else {
      clearCompass()
    } 
  }, [props.location.search])

  // setting up the session through url
  useEffect(() => {
    const session = queryStringParser(props.location.search).sessionID
    if (session) {
      clearSession();
      setLoading(true)
      getSession(session)
        .then((res) => {
          setLoading(false)
          updateSession(res.data.getSession)
          let interactions = []
          if (res.data.getSession.interactions.items.length > 0) {
            interactions = res.data.getSession.interactions.items.sort((a,b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
          }
          updateInteractions(interactions);
        })
        .catch((err) => {
          setLoading(false)
          clearSession();
          clearInteractions();
          console.log(err)
        })
    } else {
      clearSession();
    }
  }, [props.location.search])

  // setting up the interaction through url
  useEffect(() => {
    // queries the compass and assigns it throughout the app
    const interaction = queryStringParser(props.location.search).interactionID

    if (interaction) {
      clearInteraction();
      setLoading(true)
      getInteraction(interaction)
        .then((res) => {
          setLoading(false);
          updateInteraction(res.data.getInteraction);
        })
        .catch((err) => {
          setLoading(false);
          clearInteraction();
          console.log(err);
        })
    } else {
      clearInteraction();
    }

  // eslint-disable-next-line
  }, [props.location.search])

  // user authentications 
  useEffect(() => {
    if (!user.hasOwnProperty("email")) {
      Auth.currentAuthenticatedUser({ bypassCache: false   })
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

  }, [loginUser,user])

  return (
    <LayoutContainer >
      <SideBar loading={loading}/>
      <MainViewContainer>
        { loading ? <Loader/> : props.children }
      </MainViewContainer>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
