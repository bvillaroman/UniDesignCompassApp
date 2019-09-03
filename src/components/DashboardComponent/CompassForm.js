import React from 'react'
import { Tabs, Tab, Button } from "grommet";

import { userDashboard } from "../../context/DashboardPage/context"
import { FormContainer } from "../../styles/Form"
import { 
  FormHeader, 
  Feed,
  Title, 
  BackButton,
  Divider,
  DashboardGrid
} from "../../styles/Dashboard"

import Info from "./CompassInfo"
import Review from "./CompassReview"
import Steps from "./CompassSteps"
import Type from "./CompassType"

const Form = ({backToDashboard}) => {
  const {tab, switchTab } = userDashboard();

  const onActive = (index) => switchTab(index)

  return (
    <DashboardGrid
      rows={['3rem', '1rem', 'medium']}
      columns={['full']}
      fill
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'divider', start: [0, 1], end: [0, 1] },
        { name: 'feed', start: [0, 2], end: [0, 2] }, 
      ]}  
    >
      <FormHeader gridArea="header" direction="row">
        <BackButton onClick={e=> {backToDashboard()}}></BackButton>
        <Title>Create Compass</Title>
      </FormHeader>
      <Divider gridArea="divider"/>
      <Feed gridArea="feed">
        <FormContainer>
          <Tabs activeIndex={tab} onActive={onActive}>
            <Tab><Info/></Tab>
            <Tab><Type/></Tab>
            <Tab><Steps/></Tab>
            <Tab><Review /></Tab>
          </Tabs>
        </FormContainer>
      </Feed>
    </DashboardGrid>
  )
}

export default Form; 