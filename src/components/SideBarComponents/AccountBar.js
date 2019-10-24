import React, {useContext} from 'react';
import { NavigationContainer, CompassLink,SignOutButton, CompassHeader } from '../../styles/SideBar';
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
        logoutUser();
        goToLink('/')
      })
      .catch(err => console.log("Signout Not Working", err))
  }

  return (
    <NavigationContainer>
      <CompassHeader className='compassHeader' to="/">UDC</CompassHeader>
      <CompassLink to="/Profile"><User /></CompassLink>
      <SignOutButton onClick={e => signOut()}>Sign out</SignOutButton>
    </NavigationContainer>
  )
}

export default AccountBar;