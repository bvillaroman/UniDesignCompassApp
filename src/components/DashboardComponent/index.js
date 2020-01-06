import React, { useState, useEffect, useContext } from 'react'
import styled from "styled-components"
import { getCompasses, getUser } from "../../utils/queries"
import CustomCompassForm from "../ModalComponents/ProjectCustomForm"
import { updateProjectsSub } from "../../utils/subscriptions"
import { CompassContext } from "../../context/CompassPage/context"
import { GlobalContext } from "../../context/context"
import { ReviewModalContext } from "../../context/ReviewModal/context"

import { Loader } from "../../styles/layout"

// components
import ProjectCreator from "./ProjectCreator";
import Feed from "./ProjectFeed";

const Dashboard = (props) => {
  const { user } = useContext(GlobalContext);
  const { clearCompass, clearSession, clearInteraction, clearInteractions } = useContext(CompassContext);
  const { showModal } = useContext(ReviewModalContext);
  const [compasses, setCompasses] = useState([])
  const [newestProject, setNewestProject] = useState({})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(user.id){
      const owners = user.compass.items

      // finding the projects i am a member of:
      // 1. get all projects
      // 2. get their members list
      // 3. check if im in the members list
      // const scribe = res.filter((compass) => compass.scribe && (compass.scribe.id === user.id))
      const allMembers = user.member.items.map(res => res.compass)
      const allTeachers = user.teacher.items.map(res => res.compass)
      const allReaders = user.reader.items.map(res => res.compass)
      console.log([...owners, ...allMembers, ...allTeachers, ...allReaders])
      setCompasses([...owners, ...allMembers, ...allTeachers, ...allReaders])
      setLoading(false)
    } else {
      clearCompass()
      clearSession()
      clearInteraction()
      clearInteractions()
    }

    // eslint-disable-next-line
  }, [user.id]);

  // subscription for any new project being created
  // useEffect(() => {
  //   clearCompass()
  //   clearSession()
  //   clearInteraction()
  //   clearInteractions()

  //   const subscriber = updateProjectsSub().subscribe({
  //     next: res => {
  //       console.log(res)
  //       const newProject = res.value.data.onCreateCompass
  //       if (newProject.owner && (newProject.owner.id === user.id)) {
  //         setNewestProject(newProject)
  //       }
  //     }
  //   });

  //   return () => subscriber.unsubscribe()

  //   // eslint-disable-next-line
  // }, [])

  // // if a new project is created, add it to existing projects
  // useEffect(() => {
  //   if (newestProject !== {}) {
  //     if (compasses.length) setCompasses([newestProject, ...compasses])
  //     else setCompasses([newestProject])
  //   }

  //   // eslint-disable-next-line
  // }, [newestProject])

  return (
    <>
      {
        loading ? <Loader /> : (
          <DashboardContainer>
            <Header >
              <Title>Project Hub</Title>
              <InfoText>What are projects?</InfoText>
            </Header>
            {showModal && <CustomCompassForm />}
            <ProjectCreator setLoading={setLoading}/>
            {
              !error ? (compasses.length ? <Feed compasses={compasses}/> : <div>You have no projects, start one from above! </div>)
                : <div> Error !: {error}</div>
            }
          </DashboardContainer>
        )
      }
    </>
  )
}

export default Dashboard;

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 2rem;
  @media (max-width: 767px){
    width: 90%;
    padding: 0;
    margin: 0 auto;
  }
`;
export const Header = styled.div`
  color: black;
  min-height: 2.5rem;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.1rem solid rgba(0,0,0,0.1);
  width: 100%;
`;
export const Title = styled.p`
  color: black;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
`;
export const InfoText = styled.p`
  color: black;
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
`;