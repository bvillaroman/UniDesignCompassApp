import React, { useState, useContext } from 'react';
import {
  CompassSideBar,
  CompassHeader,
  LinkContainer,
  CompassLink,
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
        <CompassHeader className='compassHeader' to={`/`}>UDC</CompassHeader>
        <CompassLink to={`/Compass/?c=${compass.id}`}><Compass /><span>Compass</span></CompassLink>
        <CompassLink to={`/Summary/?c=${compass.id}`}><DocumentText /><span>Summary</span></CompassLink>
        <CompassLink to={`/Analytics/?c=${compass.id}`}><BarChart /><span>Analytics</span></CompassLink>
      </LinkContainer>
      <LinkContainer>
        <CompassLink to={`/`}><Home /><span>Home</span> </CompassLink>
        <CompassLink to={`/Profile`}><User /><span>Profile</span></CompassLink>
      </LinkContainer>
    </CompassSideBar >
  )
}
export default CompassBar;


