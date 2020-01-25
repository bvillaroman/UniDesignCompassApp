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
import { getCompass, getUser } from '../utils/queries'
import queryStringParser from '../utils/queryStringParser'
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Layout = (props) => {
  const { user = {}, loginUser, logoutUser } = useContext(GlobalContext);
  const {
    updateCompass, 
    clearCompass,
  } = useContext(CompassContext);

  const [loading, setLoading] = useState(true)

  const {compassID} = queryStringParser(props.location.search)

  // user authentications 
  useEffect(() => {
    if (!user.hasOwnProperty("email") && localStorage.getItem("authuser")) {
      setLoading(true)
      Auth.currentAuthenticatedUser({ bypassCache: false   })
        .then(cognitoUser => {
          const { sub } = cognitoUser.attributes;
          return getUser(sub)
        })
        .then((res) => {
          if(res && res.hasOwnProperty("data") && res.data.getUser){
            loginUser(res.data.getUser) // Save to global store    
            setLoading(false)
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

  // eslint-disable-next-line
  }, [loginUser,user]) 

  // setting up the compass through the url
  useEffect(() => {
    if (compassID !== "") {
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
  }, [compassID, props.location.pathname])

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
