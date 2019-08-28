import React from 'react';
import { SidebarContainer } from '../../styles/SideBar';
import NavigationBar from './NavigationBar';
import CompassBar from './CompassBar';

class CompassNavigationBar extends React.Component {
  render() {
    return (
      <SidebarContainer>
        <NavigationBar />
        <CompassBar />
      </SidebarContainer>
    )
  }
}

export default CompassNavigationBar;