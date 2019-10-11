import React, { useState, useContext } from 'react'
import {
  DashboardContainer,
  Header,
  Title,
  AddCompass,
  DashboardTabs,
  DashboardTab
} from "../../styles/Dashboard";
import CompassType2 from "./CompassType2";

import Feed from "./CompassFeed"
import CompassForm from "./CompassForm"
import { DashboardContext } from "../../context/DashboardPage/context"

const Dashboard = (props) => {
  const { clearForm, switchTab } = useContext(DashboardContext);
  const [tab, setTab] = useState(0)

  const backToDashboard = (e) => {
    setTab(0);
    clearForm();
    switchTab(0);
  }
  return (
    <DashboardContainer>
      <DashboardTabs>
        {
          tab === 1 ? (
            <DashboardTab>
              <CompassForm backToDashboard={backToDashboard} />
            </DashboardTab>
          ) : (
              <DashboardTab>
                <Header gridArea="header" >
                  <Title>Project Hub</Title>
                  {/* <AddCompass onClick={e => setTab(1)} /> */}
                </Header>
                <CompassType2 />
                <Feed />
              </DashboardTab>
            )
        }
      </DashboardTabs>
    </DashboardContainer>
  )
}

export default Dashboard; 