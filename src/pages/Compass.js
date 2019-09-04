import React from "react";
import Layout from '../components/Layout';
import LogPage from "../components/CompassComponents/LogPage"
import {Tabs, Tab} from "grommet"
import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import {CompassPageProvider, CompassPageContext} from "../context/CompassPage/context"
import { ComponentContainer, MainView, SessionView } from "../styles/CompassPage"

const CompassPage = (props) => (
  <Layout>
    <CompassPageProvider>
      <CompassPageContext.Consumer>
        {
          ( {view,changeView}) => (
            <ComponentContainer
              rows={['flex', 'auto']}
              columns={['80%', '20%']}
              fill="horizontal"
              areas={[
                { name: 'main', start: [0, 0], end: [1, 1] },
                { name: 'session', start: [1, 0], end: [1, 1]},
              ]}  
            >
              <MainView gridArea="main">
                <Tabs activeIndex={view} onActive={changeView}>
                  <Tab> <SessionCreator /> </Tab>
                  <Tab> <CompassSelector/> </Tab>
                  <Tab> <LogPage/> </Tab>
                </Tabs>
              </MainView>
              <SessionView gridArea="session">
                session component
              </SessionView>
            </ComponentContainer>
          )
        }
      </CompassPageContext.Consumer>
    </CompassPageProvider>
  </Layout>
)
export default CompassPage;
