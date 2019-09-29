import React, {useState} from 'react'
import { 
  DashboardContainer,
  Header,
  Title, 
  AddCompass,
  DashboardGrid,
  DashboardTabs, 
  DashboardTab 
} from "../../styles/Dashboard"

import Feed from "./CompassFeed"
import CompassForm from "./CompassForm"

const Dashboard = (props) => {
  const [tab, setTab] = useState(0)

  return (
    <DashboardContainer>
      <DashboardTabs>
        {
          tab === 1 ?  (
            <DashboardTab>
              <CompassForm backToDashboard={e => {setTab(0)}}/>
            </DashboardTab>
          ) : (
            <DashboardTab>
              <Header gridArea="header" >
                <Title>Projects</Title>
                <AddCompass onClick={e => setTab(1)}/>
              </Header>
              <Feed/>
            </DashboardTab>
          ) 
        }
      </DashboardTabs>
    </DashboardContainer>
  )
}

export default Dashboard; 