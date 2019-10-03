import React from 'react';
import {
  CompassSideBar,
  CompassHeader,
  LinkContainer,
  CompassLink,
} from '../../styles/SideBar'
import {Compass, DocumentText, BarChart, Home, User} from 'grommet-icons'


const CompassBar = ({title, show = true}) => {
  return (
    <CompassSideBar>
      <LinkContainer>
        <CompassHeader to="/Compass">{title}</CompassHeader>
        <CompassLink to="/Compass"><Compass/>{show && <span>Compass</span>}</CompassLink>
        <CompassLink to="/Summary"><DocumentText/>{show && <span>Summary</span>}</CompassLink>
        <CompassLink to="/Analytics"><BarChart/>{show && <span>Analytics</span>}</CompassLink>
      </LinkContainer>
      <LinkContainer>
        <CompassLink to="/"><Home /> {show && <span>Home</span>} </CompassLink>
        <CompassLink to="/Profile"><User /> {show && <span>Profile</span>}</CompassLink>
      </LinkContainer>
    </CompassSideBar>
  )
}
export default CompassBar;