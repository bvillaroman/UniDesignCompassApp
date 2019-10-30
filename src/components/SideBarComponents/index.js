import React, { useContext } from "react"

import { GlobalContext } from "../../context/context"
import { CompassContext } from "../../context/CompassPage/context"

import CompassBar from "./CompassBar"
import AccountBar from "./AccountBar"
import BlankBar from "./BlankBar"

export default (props) => {
  const { user = {} } = useContext(GlobalContext);
  const { compass } = useContext(CompassContext);

  const userSignedIn = user.hasOwnProperty("email");
  const compassExists = compass.hasOwnProperty("id")

  return (
    <> 
      {
        props.loading ? <BlankBar/>
        // if the user is signed in 
        : userSignedIn ? ( compassExists ? <CompassBar /> : <AccountBar/> ) : null
      }
    </>
  )
}