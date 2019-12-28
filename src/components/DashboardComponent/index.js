import React, { useState, useEffect, useContext } from 'react'
import styled from "styled-components"
import { getCompasses } from "../../utils/queries"
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
    clearCompass()
    clearSession()
    clearInteraction()
    clearInteractions()

    getCompasses()
      .then((res) => {
        console.log("does this hit?")
        console.log("FIRST RES", res)
        const owners = res.filter((compass) => (compass.owner && (compass.owner.id === user.id)))

        // finding the projects i am a member of:
        // 1. get all projects
        // 2. get their members list
        // 3. check if im in the members list
        const scribe = res.filter((compass) => compass.scribe && (compass.scribe.id === user.id))
        const allMembers = res.map((compass) => compass.members.items.filter((member) => member.email === user.email)).flat().map(compass => compass.compass)
        const allTeachers = res.map((compass) => compass.teachers.items.filter((teacher) => teacher.email === user.email)).flat().map(compass => compass.compass)
        const allReaders = res.map((compass) => compass.readers.items.filter((reader) => reader.email === user.email)).flat().map(compass => compass.compass)
        // setCompasses(res.filter((compass) => ((compass.owner && (compass.owner.id === user.id))) || (compass.members.items.filter((member) => member.email === user.email))))
        console.log(owners)
        console.log('scribe', scribe)
        console.log("SECOND Members", allMembers)
        console.log("SECOND Members", allTeachers)
        console.log("SECOND Members", allReaders)

        setCompasses([...owners, ...allMembers, ...allTeachers, ...allReaders, ...scribe])
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      });


    // eslint-disable-next-line
  }, [user.id]);

  // subscription for any new project being created
  useEffect(() => {
    const subscriber = updateProjectsSub().subscribe({
      next: res => {
        const newProject = res.value.data.onCreateCompass
        if (newProject.owner && (newProject.owner.id === user.id)) {
          setNewestProject(newProject)
        }
      }
    });

    return () => subscriber.unsubscribe()

    // eslint-disable-next-line
  }, [])

  // if a new project is created, add it to existing projects
  useEffect(() => {
    if (newestProject !== {}) {
      if (compasses.length) setCompasses([newestProject, ...compasses])
      else setCompasses([newestProject])
    }

    // eslint-disable-next-line
  }, [newestProject])

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