import React, { useContext } from 'react';
import { CompassSideBar, CompassLink, SignOutButton, CompassHeaderCompass, LinkContainer, CompassLink2 } from './style';
import styled from "styled-components";
import { navigate } from "gatsby";
import { User, Logout, Compass, DocumentText, BarChart, Home, Notes } from 'grommet-icons';
import { GlobalContext } from "../../context/context";
import { Auth } from 'aws-amplify';

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
        <CompassLink to={`/`}><Home /><span style={{ borderBottom: '0.1rem solid white' }}>Dashboard</span> </CompassLink>
        {/* <CompassLink2><Home /><span style={{ borderBottom: '0.1rem solid white' }}>Dashboard</span> </CompassLink2> */}
        <CompassLink2><Notes /><span>Details</span></CompassLink2>
        <CompassLink2><Compass /><span>Compass</span></CompassLink2>
        <CompassLink2><DocumentText /><span>Log </span></CompassLink2>
        <CompassLink2><BarChart /><span>Overview</span></CompassLink2>
      </LinkContainer>
      <LinkContainer center>
        <CompassLink to="/Profile"><User /><span>Profile</span></CompassLink>
        <SignOutButton onClick={e => signOut()}><Logout color="black" /><Span>Sign out</Span></SignOutButton>
      </LinkContainer>

    </CompassSideBar>
  )
}

export default AccountBar;

const Span = styled.span`
  margin-left: 0.8rem;
`;