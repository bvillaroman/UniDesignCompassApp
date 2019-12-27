import React, { useState, useContext } from 'react';
import { navigateTo } from 'gatsby';
import {
  CompassSideBar,
  CompassHeaderCompass,
  LinkContainer,
  CompassLink,
  HamburgerIcon
} from '../../styles/SideBar'
import { Compass, DocumentText, BarChart, Home, User } from 'grommet-icons'

import { CompassContext } from "../../context/CompassPage/context"

const CompassBar = ({ page }) => {

  const CompassInfo = useContext(CompassContext);
  const [renderSidebar, setRenderSidebar] = useState(true);

  const session = localStorage.getItem("session");

  const handleClick = () => {
    setRenderSidebar(!renderSidebar);
  }
  
  return (
    <CompassSideBar renderSidebar={renderSidebar}>
      <HamburgerIcon onClick={handleClick}>&#9776;</HamburgerIcon>
      <LinkContainer>
        <CompassHeaderCompass className='CompassHeaderCompass' to={`/Compass/?c=${CompassInfo.compass.id}`} >UDC</CompassHeaderCompass>
        <CompassLink 
          to={`/Logger/?c=${CompassInfo.compass.id}`} 
          active={page === "/Logger/" && CompassInfo.session.hasOwnProperty("id")}
        >
          <Compass />
          <span>Compass</span>
        </CompassLink>
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


