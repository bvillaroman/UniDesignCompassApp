import React, { useState, useEffect, useContext } from 'react'
import styled from "styled-components"
import CustomCompassForm from "../ModalComponents/ProjectCustomForm"
import { updateProjectsSub } from "../../utils/subscriptions"
import { CompassContext } from "../../context/CompassPage/context"
import { GlobalContext } from "../../context/context"
import { ReviewModalContext } from "../../context/ReviewModal/context"
import { CircleQuestion } from 'grommet-icons'

import { Loader } from "../../styles/layout"
import { getUser } from "../../utils/queries"

import ReactJoyride from "react-joyride";

// components
import ProjectCreator from "./ProjectCreator";
import Feed from "./ProjectFeed";

const Dashboard = (props) => {
  const { user, loginUser } = useContext(GlobalContext);
  const { clearCompass, clearSession, clearInteraction, clearInteractions } = useContext(CompassContext);
  const { showModal } = useContext(ReviewModalContext);
  const [ownerCompasses, setOwnerCompasses] = useState([])
  const [scribeCompasses, setScribeCompasses] = useState([])
  // const [newestProject, setNewestProject] = useState({})
  const [teacherCompasses, setTeacherCompasses] = useState([])
  const [memberCompasses, setMemberCompasses] = useState([])
  const [readerCompasses, setReaderCompasses] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const [step, setStep] = useState({
    run: false,
    steps: [
      {
        target: ".quick-template-help",
        content: "Quick Start",
        disableBeacon: true
      },
      {
        target: ".default-compass-help",
        content: "Default Project",
        disableBeacon: true
      },
      {
        target: ".custom-template-help",
        content: "Custom Project",
        disableBeacon: true
      },
      {
        target: ".projects-help",
        content: "View and access all your projects here",
        disableBeacon: true
      },
      {
        target: ".navbar-help",
        content: "Navigate with this sidebar",
        disableBeacon: true
      },
    ]
  })

  const checkprops = (callback) => {
    if (callback.status === 'finished' || callback.status === 'skipped') {
      const updateState = { ...step, run: false }
      setStep(updateState)
    }
  }

  const handleClick = (e) => {
    e.preventDefault();

    const updateState = { ...step, run: true }
    setStep(updateState)
  }

  useEffect(() => {
    if (user.id) {
      const owners = user.compass.items
      const scribe = user.scribe.items
      // finding the projects i am a member of:
      // 1. get all projects
      // 2. get their members list
      // 3. check if im in the members list
      // const scribe = res.filter((compass) => compass.scribe && (compass.scribe.id === user.id))

      const scriber = scribe.filter(own => own.owner.id !== own.scribe.id)

      const allMembers = user.member.items.map(res => res.compass)
      const allTeachers = user.teacher.items.map(res => res.compass)
      const allReaders = user.reader.items.map(res => res.compass)
      // setOwnerCompasses([...owners, ...allMembers, ...allTeachers, ...allReaders].filter(res => res))
      setOwnerCompasses([...owners])
      setScribeCompasses([...scriber])
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
      <ReactJoyride
        steps={step.steps}
        run={step.run}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        callback={checkprops}
        styles={{
          options: {
            // modal arrow and background color
            arrowColor: "#eee",
            backgroundColor: "#eee",
            // page overlay color
            overlayColor: "rgba(46, 49, 49, 1)",
            //button color
            primaryColor: "mediumaquamarine",
            //text color
            textColor: "#333",

            //width of modal
            width: 500,
            //zindex of modal
            zIndex: 1000
          }
        }}
      />
      {
        loading ? <Loader /> : (
          <DashboardContainer>
            <Header >
              <Title>Dashboard</Title>
              {/* <InfoText>What are projects?</InfoText> */}
              {/* <InfoText className="tour1"><button onClick={handleClick}><CircleQuestion /></button></InfoText> */}
              <InfoText><CircleQuestion onClick={handleClick} style={{ cursor: 'pointer' }} /></InfoText>
            </Header>
            {showModal && <CustomCompassForm setLoading={setLoading} />}
            <ProjectCreator setLoading={setLoading} />
            {/* {
              !error ? (ownerCompasses.length || memberCompasses.length ? (<><Feed compasses={ownerCompasses} type={"Past"} />  <Feed compasses={memberCompasses} type={"Member"} onShow={true}/> </>) : <div>You have no projects, start one from above! </div>)
                : <div> Error !: {error}</div>
            } */}
            {
              !error ? (ownerCompasses.length ? (<Feed compasses={ownerCompasses} type={"Past"} onShow={true} />) : <NoProjects>You have no projects, start one from above! </NoProjects>)
                : <div> Error !: {error}</div>
            }
            {
              !error ? (scribeCompasses.length ? (<Feed compasses={scribeCompasses} type={"Scribe"} onShow={true} />) : "")
                : <div> Error !: {error}</div>
            }
            {
              !error ? (teacherCompasses.length ? (<Feed compasses={teacherCompasses} type={"Team Leader"} onShow={false} />) : "")
                : <div> Error !: {error}</div>
            }
            {
              !error ? (memberCompasses.length ? (<Feed compasses={memberCompasses} type={"Member"} onShow={false} />) : "")
                : <div> Error !: {error}</div>
            }
            {
              !error ? (readerCompasses.length ? (<Feed compasses={readerCompasses} type={"Reader"} onShow={false} />) : "")
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
  overflow: auto !important;
  padding: 0 2rem;
  @media (max-width: 767px){
    width: 90%;
    height: 100vh;
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

export const NoProjects = styled.div`
  margin-top: 1.5em;
`;