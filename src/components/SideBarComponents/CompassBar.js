import React, { useState, useContext, useEffect } from 'react';
import {
  CompassSideBar,
  CompassHeaderCompass,
  LinkContainer,
  CompassLink,
  HamburgerIcon,
  SignOutButton,
} from './style';
import { navigate } from "gatsby";
import styled from "styled-components";
import { Compass, DocumentText, BarChart, Home, User, Notes, Logout } from 'grommet-icons';
import { GlobalContext } from "../../context/context";
import { Auth } from 'aws-amplify';

import { CompassContext } from "../../context/CompassPage/context"
import { timeSorter } from "../../utils/translateTime"

const CompassBar = ({ page }) => {
  const { logoutUser } = useContext(GlobalContext);

  const CompassInfo = useContext(CompassContext);
  const [renderSidebar, setRenderSidebar] = useState(true);
  const [newestSession, setNewestSession] = useState("");

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

  useEffect(() => {
    if (CompassInfo.compass.sessions && CompassInfo.compass.sessions.items.length > 0) {
      setNewestSession(CompassInfo.compass.sessions.items.sort(timeSorter)[0].id)
    }

  }, [CompassInfo.compass])

  const handleClick = () => {
    setRenderSidebar(!renderSidebar);
  }

  return (
    <CompassSideBar renderSidebar={renderSidebar}>
      <HamburgerIcon onClick={handleClick}>&#9776;</HamburgerIcon>
      <LinkContainer>
        {/* {<CompassHeaderCompass to={`/Compass/?c=${CompassInfo.compass.id}`} >UDC</CompassHeaderCompass>} */}
        <CompassHeaderCompass to={`/`} >UDC</CompassHeaderCompass>
        <CompassLink to={`/`}><Home /><span>Dashboard</span> </CompassLink>
        <CompassLink to={`/Compass/?c=${CompassInfo.compass.id}`} active={page === "/Compass/"}><Notes /><span>Details </span></CompassLink>
        <CompassLink active={page === "/Logger/"} to={`/Logger/?c=${CompassInfo.compass.id}&s=${newestSession}`}>
          <Compass />
          <span>Compass</span>
        </CompassLink>
        <CompassLink to={`/Summary/?c=${CompassInfo.compass.id}`} active={page === "/Summary/"}><DocumentText /><span>Log </span></CompassLink>
        <CompassLink to={`/Analytics/?c=${CompassInfo.compass.id}`} active={page === "/Analytics/"}><BarChart /><span>Overview</span></CompassLink>
      </LinkContainer>
      <LinkContainer>
        {/* <CompassLink to={`/`}><Home /><span>Dashboard</span> </CompassLink> */}
        <CompassLink to={`/Profile`}><User /><span>Profile</span></CompassLink>
        <SignOutButton onClick={e => signOut()}><Logout color="black" /><Span>Sign out</Span></SignOutButton>
      </LinkContainer>
    </CompassSideBar >
  )
}
export default CompassBar;

const Span = styled.span`
  margin-left: 0.8rem;
`;
