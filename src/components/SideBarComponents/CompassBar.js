import React from 'react';
import {
  CompassSideBar,
  CompassText,
  LinkContainer,
  CompassLink,
} from '../../styles/SideBar'
import {Compass, DocumentText, BarChart} from 'grommet-icons'

const CompassBar = ({compass}) => (
  <CompassSideBar>
    <CompassText>{compass.title}</CompassText>
    <LinkContainer>
      <CompassLink to="/Compass"><Compass/> Compass</CompassLink>
      <CompassLink to="/Summary"><DocumentText/> Summary</CompassLink>
      <CompassLink to="/Analytics"><BarChart/> Analytics</CompassLink>
    </LinkContainer>
  </CompassSideBar>
)

export default CompassBar;