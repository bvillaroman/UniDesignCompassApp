import React from "react";
import Layout from '../components/Layout';
import LogPage from "../components/CompassComponents/LogPage"

import {Tab} from "grommet"
import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import {CompassPageProvider, CompassPageContext} from "../context/CompassPage/context"
import { MainContent, MainView } from "../styles/CompassPage"

const CompassPage = (props) => (
  <Layout>
    <CompassPageProvider>
      <CompassPageContext.Consumer>
        {
          ( {view,changeView,currentSession}) => (
            <>
            {
              currentSession.title ? (
                <MainView gridArea="main" activeIndex={view} onActive={changeView}>
                  <MainContent> <CompassSelector/> </MainContent>
                  <MainContent> <LogPage/> </MainContent>
                </MainView>
              ) : <SessionCreator />
            }
            </>
          )
        }
      </CompassPageContext.Consumer>
    </CompassPageProvider>
  </Layout>
) 
export default CompassPage;
