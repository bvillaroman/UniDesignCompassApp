import React, { useState, useContext, useEffect } from 'react';
import {
  CompassSideBar,
  CompassHeaderCompass,
  LinkContainer,
  CompassLink,
  HamburgerIcon
} from '../../styles/SideBar'
import { Compass, DocumentText, BarChart, Home, User } from 'grommet-icons'

import { CompassContext } from "../../context/CompassPage/context"
import { timeSorter } from "../../utils/translateTime"

const CompassBar = ({ page }) => {

  const CompassInfo = useContext(CompassContext);
  const [renderSidebar, setRenderSidebar] = useState(true);
  const [newestSession, setNewestSession] = useState("")

  useEffect(() => {
    if (CompassInfo.compass.sessions && CompassInfo.compass.sessions.items.length > 0) {
      setNewestSession(CompassInfo.compass.sessions.items.sort(timeSorter)[0].id)
    }

  }, [CompassInfo.compass])

  const handleClick = () => {
    setRenderSidebar(!renderSidebar);
  }

  return (
    <CompassSideBar renderSidebar={renderSidebar}>
      <HamburgerIcon onClick={handleClick}>&#9776;</HamburgerIcon>
      <LinkContainer>
        <CompassHeaderCompass className='CompassHeaderCompass' to={`/Compass/?c=${CompassInfo.compass.id}`} >UDC</CompassHeaderCompass>
        <CompassLink active={page === "/Logger/"} to={`/Logger/?c=${CompassInfo.compass.id}&s=${newestSession}`}>
          <Compass />
          <span>Compass</span>
        </CompassLink>
        <CompassLink to={`/Summary/?c=${CompassInfo.compass.id}`} active={page === "/Summary/"}><DocumentText /><span>Log </span></CompassLink>
        <CompassLink to={`/Analytics/?c=${CompassInfo.compass.id}`} active={page === "/Analytics/"}><BarChart /><span>Overview</span></CompassLink>
      </LinkContainer>
      <LinkContainer>
        <CompassLink to={`/`}><Home /><span>Home</span> </CompassLink>
        <CompassLink to={`/Profile`}><User /><span>Profile</span></CompassLink>
      </LinkContainer>
    </CompassSideBar >
  )
}
export default CompassBar;


