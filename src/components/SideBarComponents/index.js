import React, { useContext } from "react"

import { GlobalContext } from "../../context/context"
import { CompassContext } from "../../context/CompassPage/context"

import CompassBar from "./CompassBar"
import AccountBar from "./AccountBar"

export default (props) => {
  const { user = {} } = useContext(GlobalContext);
  const { compass } = useContext(CompassContext);

  const userSignedIn = user.hasOwnProperty("email");
  const compassExists = compass.hasOwnProperty("id")

  return (
    <> 
      {
        // if the user is signed in : 
        userSignedIn ? ( compassExists ? <CompassBar page={props.page} compass={props.session}/> : <AccountBar/> ) : null
      }
    </>
  )
}