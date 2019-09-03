import React, {useState} from 'react'
import { Tabs, Tab } from "grommet";
import {navigate} from "gatsby"
import { 
  DashboardContainer,
  Header, 
  Feed,
  Title, 
  AddCompass,
  Divider,
  DashboardGrid,
  CompassTitle,
  CompassCard,
  CompassDescription,
  GoToCompassButton
} from "../../styles/Dashboard"
import {globalStore} from "../../context/context"

import CompassForm from "./CompassForm"

const Dashboard = (props) => {
  const [tab, setTab] = useState(0)
  const { user,chooseCompass } = globalStore()

  const onActive = (index) => setTab(index)

  const goToCompass = (compass) => {
    chooseCompass(compass)
    navigate("/Compass")
  }

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
              { user.compasses ? user.compasses.map((compass) => (
                  <CompassCard>
                    <CompassTitle>{compass.title}</CompassTitle>
                    <CompassDescription>{compass.description}</CompassDescription>
                    <GoToCompassButton label="Go To Compass" onClick={e => goToCompass(compass)} />
                  </CompassCard>
              )) :<p>you have no compasses</p> }
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