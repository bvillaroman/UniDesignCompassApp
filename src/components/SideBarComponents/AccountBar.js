import React from 'react';
import { NavigationContainer, NavLink, } from '../../styles/SideBar';
import { navigate } from "gatsby"
import { Home, User } from 'grommet-icons'
import { globalStore } from "../../context/context"
import { Auth } from 'aws-amplify'


const AccountBar = props => {
  const { logoutUser } = globalStore()

  const goToLink = (link) => {
    // localStorage.setItem('compass','')
    navigate(link);
  }
  const signOut = () => {
    Auth.signOut({ global: true })
      .then(data => {
        logoutUser();
        goToLink('/')
      })
      .catch(err => console.log("Signout Not Working", err))
  }

  return (
    <NavigationContainer>
      <NavLink onClick={e => goToLink("/")}><Home /></NavLink>
      <NavLink onClick={e => goToLink("/Profile")}><User /></NavLink>
      <NavLink onClick={e => signOut()}>Sign out</NavLink>
    </NavigationContainer>
  )
}

export default AccountBar;