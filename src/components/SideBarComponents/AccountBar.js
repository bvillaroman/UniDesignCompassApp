import React from 'react';
import { NavigationContainer, NavLink,} from '../../styles/SideBar';
import { navigate } from "gatsby"
import {Home, User} from 'grommet-icons'
import { globalStore } from "../../context/context"

const AccountBar = props => {
  const { chooseCompass } = globalStore()

  const goToLink = (link) => {
    chooseCompass({
      title: "",
      description: ""
    })
    navigate(link);
  }

  return (
    <NavigationContainer>
      <NavLink onClick={e => goToLink("/")}><Home /></NavLink>
      <NavLink onClick={e => goToLink("/Profile")}><User /></NavLink>
    </NavigationContainer>
  )
}

export default AccountBar;