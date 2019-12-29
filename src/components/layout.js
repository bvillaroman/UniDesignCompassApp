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
import { getCompass,getSession, getUser, getInteraction } from '../utils/queries'
import queryStringParser from '../utils/queryStringParser'
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);


const Layout = (props) => {
  const { user = {}, loginUser, logoutUser } = useContext(GlobalContext);
  const {
    updateCompass, 
    clearCompass,
    updateSession,
    clearSession,     
    updateInteractions, 
    clearInteractions,
    updateInteraction, 
    clearInteraction
  } = useContext(CompassContext);

  const [compassID, setCompassID] = useState("")
  const [sessionID, setSessionID] = useState("")
  const [interactionID, setInteractionID] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const {compassID, sessionID, interactionID} = queryStringParser(props.location.search)
    setCompassID(compassID)
    setSessionID(sessionID)
    setInteractionID(interactionID)

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
          // localStorage.setItem("session", res.data.getSession.id);
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
    if (!user.hasOwnProperty("email") && localStorage.getItem("authuser")) {
      let user = {}
      Auth.currentAuthenticatedUser({ bypassCache: false   })
        .then(cognitoUser => {
          const { sub } = cognitoUser.attributes;          
          user = cognitoUser.attributes
          return getUser(sub)
        })
        .then((res) => {
          console.log(res)
          if(res && res.hasOwnProperty("data") && res.data.getUser){
            loginUser({ 
              email: res.data.getUser.email, 
              id: res.data.getUser.id,
              firstName: res.data.getUser.first_name,
              lastName: res.data.getUser.last_name
            }) // Save to global store    
          } else {
            setLoading(false)
            localStorage.removeItem("authuser")
            logoutUser();
          }
        })
        .catch(err => {
          setLoading(false)
          localStorage.removeItem("authuser")
          alert(err.message)
          logoutUser();
        });
    } else {
      setLoading(false)
    }

  }, [loginUser,user])

  // setting up the interaction through url
  useEffect(() => {
    // console.log(`called intearctionid: ${interactionID}`)
    if (interactionID !== "") {
      getInteraction(interactionID)
        .then((res) => {
          updateInteraction(res.data.getInteraction);
        })
        .catch((err) => {
          clearInteraction();
          console.log(err);
        })
    } else {
      clearInteraction();
    }

  // eslint-disable-next-line
  }, [interactionID])

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
