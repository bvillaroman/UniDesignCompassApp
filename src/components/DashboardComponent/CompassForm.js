import React from 'react'
import { Tabs, Tab } from "grommet";

import { userDashboard } from "../../context/DashboardPage/context"
import { FormContainer } from "../../styles/Form"
import { 
  FormHeader, 
  Title, 
  BackButton,
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
      rows={['20%', '80%',]}
      gap="1rem"
      columns={['full']}
      fill
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'feed', start: [0, 1], end: [0, 1] },
      ]}  
    >
      <FormHeader gridArea="header" direction="row">
        <BackButton onClick={e=> {backToDashboard()}}></BackButton>
        <Title>Create Compass</Title>
        <Title/>
      </FormHeader>
      <FormContainer gridArea="feed">
        <Tabs activeIndex={tab} onActive={onActive}>
          <Tab><Info/></Tab>
          <Tab><Type/></Tab>
          <Tab><Steps/></Tab>
          <Tab><Review backToDashboard={e=>backToDashboard()}/></Tab>
        </Tabs>
      </FormContainer>
    </DashboardGrid>
  )
}

export default Form; 