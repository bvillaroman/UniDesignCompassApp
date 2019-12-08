import React, { useState, useContext } from 'react';
import {
  CompassSideBar,
  CompassHeaderCompass,
  LinkContainer,
  CompassLink,
  CompassLink2,
  HamburgerIcon
} from '../../styles/SideBar'
import { Compass, DocumentText, BarChart, Home, User } from 'grommet-icons'

import { CompassContext } from "../../context/CompassPage/context"

const CompassBar = (props) => {
  const { compass } = useContext(CompassContext);

  const [renderSidebar, setRenderSidebar] = useState(true);
  const handleClick = () => {
    setRenderSidebar(!renderSidebar);
  }

  return (
    <CompassSideBar renderSidebar={renderSidebar}>
      <HamburgerIcon onClick={handleClick}>&#9776;</HamburgerIcon>
      <LinkContainer>
        <CompassHeaderCompass className='CompassHeaderCompass' to={`/`}>UDC</CompassHeaderCompass>
        <CompassLink to={`/Compass/?c=${compass.id}`}><Compass /><span>Compass</span></CompassLink>
        <CompassLink to={`/Summary/?c=${compass.id}`}><DocumentText /><span>Summary</span></CompassLink>
        <CompassLink to={`/Analytics/?c=${compass.id}`}><BarChart /><span>Analytics</span></CompassLink>
        {/* </LinkContainer>
      <LinkContainer> */}
        <CompassLink2 to={`/`}><Home /><span>Home</span> </CompassLink2>
        <CompassLink2 to={`/Profile`}><User /><span>Profile</span></CompassLink2>
      </LinkContainer>
    </CompassSideBar >
  )
}
export default CompassBar;


