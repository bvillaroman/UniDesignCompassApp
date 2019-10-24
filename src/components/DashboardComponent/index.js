import React, { useState, useEffect, useContext } from 'react'
// 
import { GlobalContext } from "../../context/context"
import { getCompasses } from "../../utils/queries"

// styles
import {
  DashboardContainer,
  Header,
  Title,
  InfoText
} from "../../styles/Dashboard";
import { Loader } from "../../styles/layout"

// components
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
  }, [user.email]);

  return (
    <>
      {
        loading ? <Loader/> : (
          <DashboardContainer>
            <Header >
              <Title>Project Hub</Title>
              <InfoText>What are projects?</InfoText>
            </Header>
            <ProjectCreator />
            {
              !error ? (compasses.length ? <Feed compasses={compasses}/>  : <div>You have no projects, start one from above! </div>)
              : <div> Error !</div>
            }
          </DashboardContainer>
        )
      }
    </>
  )
}

export default Dashboard; 