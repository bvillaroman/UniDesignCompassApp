import React, { useContext } from "react";
import styled from "styled-components"
import {navigate} from "gatsby"

import { CompassContext } from "../../../context/CompassPage/context"
import { getCompass} from "../../../utils/queries"
import { createSession } from "../../../utils/mutations"
import { dateFormatter, timeSorter } from "../../../utils/translateTime"

const ModalMenu = () => {
  const {compass} = useContext(CompassContext);

  // get the newest session and start from there
  const continueSession = (e) => {
    getCompass(compass.id)
      .then((res) => {
        const newestSession = res.data.getCompass.sessions.items.sort(timeSorter)[0]
        navigate(`/Logger/?c=${compass.id}&s=${newestSession.id}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const newSession = (e) => {

    const today = new Date();
    const hour = today.getHours()
    const minute = today.getMinutes()

    createSession(`Session on ${dateFormatter(today)} at ${hour % 12}:${minute} ${hour >= 12 ? "p.m." : "a.m."}`, " ", compass.id)
      .then((result) => {
        navigate(`/Logger/?c=${compass.id}&s=${result.data.createSession.id}`)
      })
      .catch(err => console.log(err))
  }

  return (
    <NavigationContainer>
      {
        compass.sessions.items.length > 0 && 
        <NavigationButton onClick={continueSession} > Continue Session </NavigationButton>
      }
      <NavigationButton onClick={newSession} > New Session </NavigationButton>      
    </NavigationContainer>
  )
}
export default ModalMenu;

export const NavigationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const NavigationButton = styled.div`
  margin: 0 3rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  background: white;
  box-shadow: 0 1px 3px 0 #b3b3b3;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  :hover {
    margin-bottom: 1rem;
    cursor: pointer;
    background-color: #5361FD;
    box-shadow: 0 1px 3px 0 #d2d4d6;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    color: white;
  }
`