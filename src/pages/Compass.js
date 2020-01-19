import React, { useContext } from "react";
import { CompassContext } from "../context/CompassPage/context"

import CompassDetails from "../components/CompassDetails"
import { MainView } from "../styles/CompassPage"

const CompassPage = (props) => {
  const { compass } = useContext(CompassContext);

  return (
    <MainView>
      {
        compass.hasOwnProperty("id") ? <CompassDetails /> : <div> Sorry, this project does not exist !</div>
      }
    </MainView>
  )
}
export default CompassPage;
