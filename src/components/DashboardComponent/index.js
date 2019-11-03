import React, { useState, useEffect, useContext } from 'react'
import { getCompasses } from "../../utils/queries"
import CustomCompassForm from "../ModalComponents/ProjectCustomForm"
import {updateProjectsSub} from "../../utils/subscriptions"
import { CompassContext } from "../../context/CompassPage/context"
import { GlobalContext } from "../../context/context"
import {ReviewModalContext} from "../../context/ReviewModal/context"
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
  const { clearCompass, clearSession, clearInteraction, clearInteractions } = useContext(CompassContext);
  const { showModal } = useContext(ReviewModalContext);
  const [compasses, setCompasses] = useState([])
  const [newestProject, setNewestProject] = useState({})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    clearCompass() 
    clearSession() 
    clearInteraction()
    clearInteractions()

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

  // subscription for any new project being created
  useEffect(() => {
    const subscriber = updateProjectsSub().subscribe({
      next: res => {
        const newProject = res.value.data.onCreateCompass
        if(newProject.admins.includes(user.email)){
          setNewestProject(newProject)
        }
      }
    });

    return () => subscriber.unsubscribe()
  }, [])

  // if a new project is created, add it to existing projects
  useEffect(() => {
    if(newestProject !== {}) {
      if (compasses.length) setCompasses([newestProject, ...compasses]) 
      else setCompasses([newestProject]) 
    }
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
            { showModal && <CustomCompassForm /> }
            <ProjectCreator />
            {
              !error ? (compasses.length ? <Feed compasses={compasses} /> : <div>You have no projects, start one from above! </div>)
                : <div> Error !</div>
            }
          </DashboardContainer>
        )
      }
    </>
  )
}

export default Dashboard; 