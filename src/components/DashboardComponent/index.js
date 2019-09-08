import React, {useState, useEffect} from 'react'
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

  useEffect(() => {
    localStorage.setItem('compass','')
  },[])

  const onActive = (index) => setTab(index)

  return (
    <DashboardContainer>
      <DashboardTabs activeIndex={tab} onActive={onActive}>
        <DashboardTab>
          <DashboardGrid
            rows={['20%', '70%']}
            gap="1rem"
            columns={['70%', '30%']}
            fill
            areas={[
              { name: 'header', start: [0, 0], end: [1, 1] },
              { name: 'feed', start: [0, 1], end: [1, 1] },
            ]}  
          >
            <Header gridArea="header" >
              <Title>Compasses</Title>
              <AddCompass onClick={e => setTab(1)}/>
            </Header>
              <Feed/>
            </DashboardGrid>
        </DashboardTab>
        <DashboardTab>
          <CompassForm backToDashboard={e => {setTab(0)}}/>
        </DashboardTab>
      </DashboardTabs>
    </DashboardContainer>
  )
}

export default Dashboard; 