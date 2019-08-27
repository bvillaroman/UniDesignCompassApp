import React from 'react';
import { Grommet } from 'grommet';
import {
  NavigationSideBar,
  LinkContainer,
  HomepageLink,
  ProfileLink
} from '../../styles/NavigationBar';

class NavigationBar extends React.Component {
  render() {
    return (
      <Grommet>
        <NavigationSideBar>
          <LinkContainer>
            <HomepageLink to="/">Home</HomepageLink>
            <ProfileLink to="/">Profile</ProfileLink>
          </LinkContainer>
        </NavigationSideBar>
      </Grommet>
    )
  }
}

export default NavigationBar;