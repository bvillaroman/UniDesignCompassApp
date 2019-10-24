import React, { useContext } from "react"

import { GlobalContext } from "../../context/context"
import CompassBar from "./CompassBar"
import AccountBar from "./AccountBar"
import BlankBar from "./BlankBar"

export default (props) => {
  const { user = {} } = useContext(GlobalContext);

  const userSignedIn = user.hasOwnProperty("email");
  const compassExist = props.compassExists;

  return (
    <> 
      {
        // if the user is signed in 
        props.loading ? <BlankBar/>
        : userSignedIn ? ( compassExist ? <CompassBar /> : <AccountBar/> ) : null
      }
    </>
  )
}