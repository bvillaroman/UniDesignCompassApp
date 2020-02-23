import React, { useContext } from 'react'
import styled from "styled-components"
import { DashboardSectionHeader } from "./style"
import { navigate } from "gatsby"
import { dateFormatter } from "../../utils/translateTime"
import { deleteCompass, updateCompass } from "../../utils/mutations"
import { GlobalContext } from "../../context/context"
import { getCompass } from "../../utils/queries"
import { timeSorter } from "../../utils/translateTime"
import {
  CompassRowMoreButton,
  CompassRowMore,
  InvisCompassRowMore,
  InvisCompassRowMoreButton
} from "../../styles/CompassPage"

export const CompassFeed = ({ compasses, type, onShow }) => {

  const { user } = useContext(GlobalContext);


  const goToCompass = (compass) => {
    navigate(`/Compass/?c=${compass.id}`)
  }

  const onDelete = (compass) => {
    deleteCompass(compass.id)
      .then(res => {
        getCompass(res.data.deleteCompass.compass.id)
          .then((res) => updateCompass(res.data.getCompass))
          .catch((err) => console.log(err))
      })
      .catch(err => console.log(err))
  }

  return (
    <ProjectFeedContainer className="projects-help">
      <DashboardSectionHeader> {type} Projects </DashboardSectionHeader>
      {
        compasses.length > 0 ? (
          <>
            <ProjectFeedHeader>
              <CompassTitle >Name</CompassTitle>
              <CompassDescription >Description</CompassDescription>
              <CompassDate> Created On</CompassDate>
              <InvisCompassRowMore><InvisCompassRowMoreButton /></InvisCompassRowMore>
            </ProjectFeedHeader>
            <Feed>
              {
                compasses.sort(timeSorter).map((compass, key) => (
                  <ProjectCard >
                    <CompassTitle onClick={e => goToCompass(compass)} key={key}>{compass.name_of_compass}</CompassTitle>
                    <CompassDescription onClick={e => goToCompass(compass)} key={key}>{compass.description_of_compass}</CompassDescription>
                    <CompassDate onClick={e => goToCompass(compass)} key={key}>{dateFormatter(compass.createdAt)}</CompassDate>
                    {onShow ? <CompassRowMore><CompassRowMoreButton onDelete={e => onDelete(compass)} /></CompassRowMore> : <InvisCompassRowMore><InvisCompassRowMoreButton /></InvisCompassRowMore>}
                  </ProjectCard>
                ))
              }
            </Feed>
          </>
        ) : <p>You have no Projects, create one from above !</p>
      }
    </ProjectFeedContainer >
  )
}

export default CompassFeed;

const Feed = styled.div`
  color: black;
  height: 100%;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
`;
const ProjectCard = styled.div`
  padding: 1rem 0;
  width: 100%;
  min-height: 2rem;
  background-color: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  :hover {
    cursor: pointer;
    background-color: white;
    box-shadow: 0 1px 3px 0 #d2d4d6;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
    border-radius: 0.5rem;
  }
`;
const CompassHeaderStyle = styled.div`
  font-weight: 400;
  padding: 0 2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 550px){
    padding: 0 0.5rem;
  }
`
const CompassTitle = styled(CompassHeaderStyle)`
  color: black;
  font-size: 1.2rem;
  line-height: 2.1rem;
  width: 30%;
  font-size: 1.2rem;
  @media (max-width: 550px){
    padding: 0 0.5rem;
  }
`
const CompassDescription = styled(CompassHeaderStyle)`
  color: rgba(0,0,0,0.8);
  font-weight: 400;
  font-size: 0.9rem;
  width: 40%;
  @media (max-width: 550px){
    padding: 0 0.5rem;
  }
`
const CompassDate = styled(CompassHeaderStyle)`
  font-size: 0.9rem;
  color: rgba(0,0,0,0.8);
  width: 30%;
  text-align: end;
  @media (max-width: 550px){
    padding: 0 0.5rem;
  }
`
const ProjectFeedContainer = styled.div`
  color: black;
  // height: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
`;
const ProjectFeedHeader = styled.div`
  display: flex;
  padding: .5rem 0;
  width: 100%;
  min-height: 1.5rem;
  background-color: none;
  flex-direction: row;
  align-items: center;
  div {
    font-size: 1.0rem;
    font-weight: 4500;
    color: rgba(0,0,0,0.6);
  }
  border-bottom: 0.05rem solid rgba(0,0,0,0.1);
`;