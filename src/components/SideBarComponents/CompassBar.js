import React from 'react';
import {
  CompassSideBar,
  CompassHeader,
  LinkContainer,
  CompassLink,
} from '../../styles/SideBar'
import {Compass, DocumentText, BarChart, Home, User} from 'grommet-icons'


const CompassBar = ({compass, title, show = true}) => {
  return (
    <CompassSideBar>
      <LinkContainer>
        <CompassHeader to={`/Compass?c=${compass}`}>{title}</CompassHeader>
        <CompassLink to={`/Compass?c=${compass}`}><Compass/>{show && <span>Compass</span>}</CompassLink>
        <CompassLink to={`/Summary?c=${compass}`}><DocumentText/>{show && <span>Summary</span>}</CompassLink>
        <CompassLink to={`/Analytics?c=${compass}`}><BarChart/>{show && <span>Analytics</span>}</CompassLink>
      </LinkContainer>
      <LinkContainer>
        <CompassLink to={`/`}><Home /> {show && <span>Home</span>} </CompassLink>
        <CompassLink to={`/Profile`}><User /> {show && <span>Profile</span>}</CompassLink>
      </LinkContainer>
    </CompassSideBar >
  )
}
export default CompassBar;