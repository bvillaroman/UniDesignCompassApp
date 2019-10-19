import React, {useState, useEffect, useContext}  from "react";
import { CompassViewerContainer, MainContainer, CompassNavigationBar } from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import ProjectDetails from "./ProjectDetails"
import SessionCreator from "./SessionCreator"
import StepDetails from "./StepDetails"

export default (props) => {
  const {compass} = useContext(CompassContext)
  useEffect(() => {
    if(compass.hasOwnProperty("id")){

    }

  }, [compass])

  return (
    <CompassViewerContainer>
      <MainContainer >

          <SessionCreator/>
      </MainContainer>
      <CompassNavigationBar>
        <ProjectDetails />
      </CompassNavigationBar>
    </CompassViewerContainer>
)};

