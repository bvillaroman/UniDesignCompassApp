import React from "react";
import Layout from '../components/Layout';
import LogPage from "../components/CompassComponents/LogPage"
import {Tabs, Tab} from "grommet"
import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import {CompassPageProvider, CompassPageContext} from "../context/CompassPage/context"
import { MainView } from "../styles/CompassPage"

const CompassPage = (props) => (
  <Layout>
    <CompassPageProvider>
      <CompassPageContext.Consumer>
        {
          ( {view,changeView}) => (
            <MainView>
              <Tabs activeIndex={view} onActive={changeView}>
                <Tab> <SessionCreator /> </Tab>
                <Tab> <CompassSelector/> </Tab>
                <Tab> <LogPage/> </Tab>
              </Tabs>
            </MainView>
          )
        }
      </CompassPageContext.Consumer>
    </CompassPageProvider>
  </Layout>
)
export default CompassPage;
