import React from 'react';
import { Grommet } from 'grommet';
import { SidebarContainer } from '../../styles/CompassNavigationSideBar';
import NavigationBar from './NavigationBar';
import CompassBar from './CompassBar';

class CompassNavigationBar extends React.Component {
  render() {
    return (
      <Grommet>
        <SidebarContainer>
          <NavigationBar />
          <CompassBar />
        </SidebarContainer>
      </Grommet>
    )
  }
}

export default CompassNavigationBar;