import React from 'react';
import {
  NavigationContainer,
  NavLink,
} from '../../styles/SideBar';
import {Home, User} from 'grommet-icons'

const AccountBar = props => (
  <NavigationContainer>
    <NavLink to="/"><Home /></NavLink>
    <NavLink to="/"><User /></NavLink>
  </NavigationContainer>
)

export default AccountBar;