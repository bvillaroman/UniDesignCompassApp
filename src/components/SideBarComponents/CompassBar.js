import React from 'react';
import {
  CompassSideBar,
  CompassText,
  LinkContainer,
  CompassLink,
} from '../../styles/SideBar'
import {Compass, DocumentText, BarChart} from 'grommet-icons'

const CompassBar = (props) => (
  <CompassSideBar>
    <CompassText>Compass Title</CompassText>
    <LinkContainer>
      <CompassLink to="/"><Compass/> Compass</CompassLink>
      <CompassLink to="/"><DocumentText/> Summary</CompassLink>
      <CompassLink to="/"><BarChart/> Analytics</CompassLink>
    </LinkContainer>
  </CompassSideBar>
)

export default CompassBar;