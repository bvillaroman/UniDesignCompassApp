/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Grommet, Box } from 'grommet';
import { StaticQuery, graphql } from "gatsby"
import Amplify from 'aws-amplify';

import {AccountBar, CompassBar} from "./SideBarComponents"
import { LayoutContainer,SidebarContainer, MainViewContainer } from "../styles/layout"
import {GlobalProvider,GlobalContext} from "../context/context"

import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const Layout = ({ children }) => (
  <Grommet 
    theme={
      {
        global: { 
          colors: { primary: '#5361FF', back: '#F2F2F2',fore: '#FEFFFE',  } 
        } ,
        button: {
          color: 'white', 
          primary : {color: '#5361FF'},
          border : {color: '#5361FF'}
        },
        
      }
    }
  >
    <GlobalProvider>
      <GlobalContext.Consumer>
        { 
          ({user,compass}) => (
            <LayoutContainer >
              <SidebarContainer>
              { user.hasOwnProperty("email") && <AccountBar />}
              { (user.hasOwnProperty("email") && compass.hasOwnProperty("id")) && <CompassBar/> }
              </SidebarContainer>
              <MainViewContainer>
                <main>{children}</main>
              </MainViewContainer>
            </LayoutContainer>
          )
        }
      </GlobalContext.Consumer>
    </GlobalProvider>
  </Grommet>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
