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
import { getCompass,getSession } from '../utils/queries'
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
    updateInteractions, 
    clearInteractions
  } = useContext(CompassContext);

  const [compassID, setCompassID] = useState("")
  const [sessionID, setSessionID] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const {compassID, sessionID} = queryStringParser(props.location.search)
    setCompassID(compassID)
    setSessionID(sessionID)

  }, [props.location.search])

  // setting up the compass through the url
  useEffect(() => {
    if (compassID !== "") {
      clearCompass()
      setLoading(true)
      getCompass(compassID)
        .then((res) => {
          updateCompass(res.data.getCompass);
          setLoading(false)
        })
        .catch((err) => {          
          clearCompass();
          setLoading(false)
          console.log(err)
        })
    } else {
      clearCompass()      
    } 

  // eslint-disable-next-line
  }, [compassID])

  // setting up the session through url
  useEffect(() => {
    
    if (sessionID !== "") {
      clearSession();
      setLoading(true)
      getSession(sessionID)
        .then((res) => {          
          updateSession(res.data.getSession)
          localStorage.setItem("session", res.data.getSession.id);
          let interactions = []
          if (res.data.getSession.interactions.items.length > 0) {
            interactions = res.data.getSession.interactions.items.sort((a,b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
          }
          updateInteractions(interactions);
          setLoading(false)
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

  // eslint-disable-next-line
  }, [sessionID])

  // user authentications 
  useEffect(() => {
    if (!user.hasOwnProperty("email") && localStorage.getItem("amplify-signin-with-hostedUI")) {
      
      Auth.currentAuthenticatedUser({ bypassCache: false   })
        .then(cognitoUser => {
          const { email, sub, firstName, lastName } = cognitoUser.attributes;
          setLoading(false)
          loginUser({ email, id: sub, firstName, lastName }); // save email to global store
        })
        .catch(err => {
          setLoading(false)
          console.log(`cognito error: ${err}`)
        });
    } else {
      setLoading(false)
    }

  }, [loginUser,user])

  return (
    <LayoutContainer >
      <SideBar loading={loading} page={props.location.pathname}/>
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
