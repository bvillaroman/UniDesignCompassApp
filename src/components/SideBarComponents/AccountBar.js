import React, { useContext } from 'react';
import { CompassSideBar, CompassLink, SignOutButton, CompassHeaderCompass, LinkContainer } from './style';
import { navigate } from "gatsby"
import { User } from 'grommet-icons'
import { GlobalContext } from "../../context/context"
import { Auth } from 'aws-amplify'


const AccountBar = props => {
  const { logoutUser } = useContext(GlobalContext);

  const goToLink = (link) => {
    navigate(link);
  }
  const signOut = () => {
    Auth.signOut({ global: true })
      .then(() => {
        localStorage.removeItem("authuser")
        logoutUser();
        goToLink('/')
      })
      .catch(err => console.log("Signout Not Working", err))
  }

  return (
    <CompassSideBar>
      <LinkContainer>
        <CompassHeaderCompass to={`/`} >UDC</CompassHeaderCompass>
      </LinkContainer>
      <LinkContainer center>
        <CompassLink to="/Profile"><User /><span>Profile</span></CompassLink>
        <SignOutButton onClick={e => signOut()}>Sign out</SignOutButton>
      </LinkContainer>
      
    </CompassSideBar>
  )
}

export default AccountBar;