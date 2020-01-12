import React, { useState, useEffect, useContext } from 'react'
import styled from "styled-components"
import CustomCompassForm from "../ModalComponents/ProjectCustomForm"
import { updateProjectsSub } from "../../utils/subscriptions"
import { CompassContext } from "../../context/CompassPage/context"
import { GlobalContext } from "../../context/context"
import { ReviewModalContext } from "../../context/ReviewModal/context"

import { Loader } from "../../styles/layout"
import { getUser } from "../../utils/queries"

// components
import ProjectCreator from "./ProjectCreator";
import Feed from "./ProjectFeed";

const Dashboard = (props) => {
  const { user, loginUser } = useContext(GlobalContext);
  const { clearCompass, clearSession, clearInteraction, clearInteractions } = useContext(CompassContext);
  const { showModal } = useContext(ReviewModalContext);
  const [ownerCompasses, setOwnerCompasses] = useState([])
  // const [newestProject, setNewestProject] = useState({})
  const [teacherCompasses, setTeacherCompasses] = useState([])
  const [memberCompasses, setMemberCompasses] = useState([])
  const [readerCompasses, setReaderCompasses] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user.id) {
      const owners = user.compass.items

      // finding the projects i am a member of:
      // 1. get all projects
      // 2. get their members list
      // 3. check if im in the members list
      // const scribe = res.filter((compass) => compass.scribe && (compass.scribe.id === user.id))
      const allMembers = user.member.items.map(res => res.compass)
      const allTeachers = user.teacher.items.map(res => res.compass)
      const allReaders = user.reader.items.map(res => res.compass)
      // setOwnerCompasses([...owners, ...allMembers, ...allTeachers, ...allReaders].filter(res => res))
      setOwnerCompasses([...owners])
      setTeacherCompasses([...allTeachers])
      setMemberCompasses([...allMembers])
      setReaderCompasses([...allReaders])
      setLoading(false)
    }

    // eslint-disable-next-line
  }, [user]);

  // subscription for any new project being created
  useEffect(() => {
    clearCompass()
    clearSession()
    clearInteraction()
    clearInteractions()

    const subscriber = updateProjectsSub().subscribe({
      next: res => {
        const newProject = res.value.data.onCreateCompass
        if (newProject.owner && (newProject.owner.id === user.id)) {
          getUser(user.id)
            .then((res) => {
              loginUser(res.data.getUser) // Save to global store                 
            })
            .catch(err => {
              localStorage.removeItem("authuser")
              setError(err.message)
            });
        }
      }
    });

    return () => subscriber.unsubscribe()

    // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        loading ? <Loader /> : (
          <DashboardContainer>
            <Header >
              <Title>Project Hub</Title>
              <InfoText>What are projects?</InfoText>
            </Header>
            {showModal && <CustomCompassForm setLoading={setLoading} />}
            <ProjectCreator setLoading={setLoading} />
            {/* {
              !error ? (ownerCompasses.length || memberCompasses.length ? (<><Feed compasses={ownerCompasses} type={"Past"} />  <Feed compasses={memberCompasses} type={"Member"} onShow={true}/> </>) : <div>You have no projects, start one from above! </div>)
                : <div> Error !: {error}</div>
            } */}
            {
              !error ? (ownerCompasses.length ? (<Feed compasses={ownerCompasses} type={"Past"} />) : <div>You have no projects, start one from above! </div>)
                : <div> Error !: {error}</div>
            }
            {
              !error ? (teacherCompasses.length ? (<Feed compasses={teacherCompasses} type={"Teacher"} onShow={true} />) : "")
                : <div> Error !: {error}</div>
            }
            {
              !error ? (memberCompasses.length ? (<Feed compasses={memberCompasses} type={"Member"} onShow={true} />) : "")
                : <div> Error !: {error}</div>
            }
            {
              !error ? (readerCompasses.length ? (<Feed compasses={readerCompasses} type={"Reader"} onShow={true} />) : "")
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