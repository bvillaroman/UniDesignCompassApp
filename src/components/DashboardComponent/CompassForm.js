import React, {useContext} from 'react'

import { DashboardContext } from "../../context/DashboardPage/context"
import { 
  Header, 
  Title, 
  BackButton,
  CompassFormTabs, 
  CompassFormTab 
} from "../../styles/Dashboard"

import Info from "./CompassInfo"
import Review from "./CompassReview"
import Steps from "./CompassSteps"
import Type from "./CompassType"
import Permissions from "./CompassPermissions"

const Form = ({backToDashboard}) => {
  const {tab} = useContext(DashboardContext);
  return (
    <>
      <Header gridArea="header" direction="row">
        <BackButton onClick={e=> {backToDashboard()}}></BackButton>
        <Title>Create a Project</Title>
        <Title/>
      </Header>
      <CompassFormTabs>
        {
          tab === 1 ? <CompassFormTab><Type/></CompassFormTab>
          : tab === 2 ? <CompassFormTab><Steps/></CompassFormTab>
          : tab === 3 ? <CompassFormTab><Permissions backToDashboard={e=>backToDashboard()}/></CompassFormTab>
          : tab === 4 ? <CompassFormTab><Review backToDashboard={e=>backToDashboard()}/></CompassFormTab>
          : <CompassFormTab><Info/></CompassFormTab>
        }
      </CompassFormTabs>
    </>
  )
}

export default Form; 