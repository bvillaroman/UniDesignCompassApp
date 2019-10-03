import React from 'react';
import {
  CompassSideBar,
  CompassHeader,
  LinkContainer,
  CompassLink,
} from '../../styles/SideBar'
import { Compass, DocumentText, BarChart } from 'grommet-icons'

const CompassBar = ({ title }) => {
  return (
    <CompassSideBar>
      <CompassHeader>{title}</CompassHeader>
      <LinkContainer>
        <CompassLink to={"/Compass?c=${compassID}&s=${sessionID}&i=${interactionID}"}><Compass />Compass</CompassLink>
        <CompassLink to={'/Summary?c=b1d4f1cb-04e1-4c55-80bc-80048c2ff73f'} ><DocumentText />Summary</CompassLink>
        <CompassLink to={"/Analytics?c=${compassID}&s=${sessionID}&i=${interactionID}"}><BarChart />Analytics</CompassLink>
      </LinkContainer>
    </CompassSideBar >
  )
}
export default CompassBar;