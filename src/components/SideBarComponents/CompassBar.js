import React, { useState, useContext, useEffect } from 'react';
import { navigateTo } from 'gatsby';
import {
  CompassSideBar,
  CompassHeaderCompass,
  LinkContainer,
  CompassLink,
  HamburgerIcon
} from '../../styles/SideBar'
import { Compass, DocumentText, BarChart, Home, User, FormNextLink } from 'grommet-icons'

import { CompassContext } from "../../context/CompassPage/context"

const CompassBar = ({ page }) => {

  const CompassInfo = useContext(CompassContext);
  const [renderSidebar, setRenderSidebar] = useState(true);

  const session = localStorage.getItem("session");

  const handleClick = () => {
    setRenderSidebar(!renderSidebar);
  }

  const clearCurrentSession = (e) => {
    e.preventDefault()
    localStorage.setItem("session", "")
    navigateTo(`/Compass/?c=${CompassInfo.compass.id}`)
  }
  return (
    <CompassSideBar renderSidebar={renderSidebar}>
      <HamburgerIcon onClick={handleClick}>&#9776;</HamburgerIcon>
      <LinkContainer>
        <CompassHeaderCompass className='CompassHeaderCompass' to={`/`} >UDC</CompassHeaderCompass>
        <CompassLink
          active={page === "/Compass/" && !CompassInfo.session.hasOwnProperty("id")}
          onClick={clearCurrentSession}
        >
          <Compass /><span>Compass</span>
        </CompassLink>
        {session && <CompassLink size="small" to={`/Compass/?c=${CompassInfo.compass.id}&s=${session}`} active={page === "/Compass/" && CompassInfo.session.hasOwnProperty("id")}><FormNextLink /><span>Session</span></CompassLink>}
        <CompassLink to={`/Summary/?c=${CompassInfo.compass.id}`} active={page === "/Summary/"}><DocumentText /><span>Summary</span></CompassLink>
        <CompassLink to={`/Analytics/?c=${CompassInfo.compass.id}`} active={page === "/Analytics/"}><BarChart /><span>Analytics</span></CompassLink>
      </LinkContainer>
      <LinkContainer>
        <CompassLink to={`/`}><Home /><span>Home</span> </CompassLink>
        <CompassLink to={`/Profile`}><User /><span>Profile</span></CompassLink>
      </LinkContainer>
    </CompassSideBar >
  )
}
export default CompassBar;


