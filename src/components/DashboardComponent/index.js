import React, { useState, useEffect, useContext } from 'react'

import { GlobalContext } from "../../context/context"
import { getCompasses } from "../../utils/queries"

import {
  DashboardContainer,
  Header,
  Title,
} from "../../styles/Dashboard";

import ProjectCreator from "./ProjectCreator";
import Feed from "./ProjectFeed";

const Dashboard = (props) => {
  const { user } = useContext(GlobalContext);
  const [compasses, setCompasses] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCompasses()
      .then((res) => {
        setCompasses(res.filter((compass) => (compass.admins && compass.admins.includes(user.email))))
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      });
  }, []);

  return (
    <DashboardContainer>
      <Header gridArea="header" >
        <Title>Project Hub</Title>
      </Header>

      <ProjectCreator />

      <Feed compasses={compasses}/>
    </DashboardContainer>
  )
}

export default Dashboard; 