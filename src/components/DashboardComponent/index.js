import React, {useState} from 'react'
import { Tabs, Tab } from "grommet";

import { 
  DashboardContainer,
  Header, 
  Feed,
  Title, 
  AddCompass,
  Divider,
  DashboardGrid
} from "../../styles/Dashboard"

import CompassForm from "./CompassForm"

const Dashboard = (props) => {
  const [tab, setTab] = useState(0)

  const onActive = (index) => setTab(index)

  return (
    <DashboardContainer>
      <Tabs activeIndex={tab} onActive={onActive}>
        <Tab>
          <DashboardGrid
            rows={['5rem', '1rem', 'full']}
            columns={['70%', '30%']}
            fill
            areas={[
              { name: 'header', start: [0, 0], end: [1, 0] },
              { name: 'add', start: [1, 0], end: [1, 0] },
              { name: 'divider', start: [0, 1], end: [1, 1] },
              { name: 'feed', start: [0, 2], end: [1, 2] }, 
            ]}  
          >
            <Header gridArea="header" >
              <Title>Compasses</Title>
            </Header>
            <Header gridArea="add" direction="row">
              <AddCompass onClick={e => setTab(1)}/>
            </Header>
            <Divider gridArea="divider"/>
            <Feed gridArea="feed">
              compasses
            </Feed>
            </DashboardGrid>
        </Tab>
        <Tab>
          <CompassForm backToDashboard={e => {setTab(0)}}/>
        </Tab>
      </Tabs>
    </DashboardContainer>
  )
}

export default Dashboard; 