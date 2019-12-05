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

const CompassBar = ({page}) => {

  const { compass } = useContext(CompassContext);
  const [renderSidebar, setRenderSidebar] = useState(true);
  // const [activePage, setActivePage] = useState("");

  // useEffect(() => {
  //   setActivePage
  // }, props.page)

  const handleClick = () => {
    setRenderSidebar(!renderSidebar);
  }

  return (
    <CompassSideBar renderSidebar={renderSidebar}>
      <HamburgerIcon onClick={handleClick}>&#9776;</HamburgerIcon>
      <LinkContainer>
        <CompassHeaderCompass className='CompassHeaderCompass' to={`/`} >UDC</CompassHeaderCompass>
        <CompassLink to={`/Compass/?c=${compass.id}`} active={page === "/Compass/"}><Compass /><span>Compass</span></CompassLink>
        <CompassLink to={`/Summary/?c=${compass.id}`} active={page === "/Summary/"}><DocumentText /><span>Summary</span></CompassLink>
        <CompassLink to={`/Analytics/?c=${compass.id}`} active={page === "/Analytics/"}><BarChart /><span>Analytics</span></CompassLink>
      </LinkContainer>
      <LinkContainer>
        <CompassLink to={`/`}><Home /><span>Home</span> </CompassLink>
        <CompassLink to={`/Profile`}><User /><span>Profile</span></CompassLink>
      </LinkContainer>
    </CompassSideBar >
  )
}
export default CompassBar;


