import React from "react";
import Layout from '../components/Layout';
import LogPage from "../components/CompassComponents/LogPage"

import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import {CompassPageProvider, CompassPageContext} from "../context/CompassPage/context"
import {globalStore} from "../context/context"
import { MainView } from "../styles/CompassPage"

const CompassPage = (props) => {
  const {compass} = globalStore()

  return (
    <Layout>
      <CompassPageProvider>
        <CompassPageContext.Consumer>
          {
            ( {currentSession,currentInteraction}) => (
              <MainView>
              {
                currentInteraction.step.title ? <LogPage/> :
                compass.title && currentSession.title ? <CompassSelector/> :
                <SessionCreator />
              }
              </MainView>
            )
          }
        </CompassPageContext.Consumer>
      </CompassPageProvider>
    </Layout>
) 
}
export default CompassPage;
