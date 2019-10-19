import React, {useState, useEffect, useContext}  from "react";
import { CompassViewerContainer, MainContainer, CompassNavigationBar } from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import ProjectDetails from "./ProjectDetails"
import SessionCreator from "./SessionCreator"
import StepDetails from "./StepDetails"

export default (props) => {
  const {compass} = useContext(CompassContext)
  // const [data,setData] = useState([])
  // const [labels,setLabels] = useState([])
  // const [colors,setColors] = useState([])
  const [step,setStep] = useState({})

  // const selectStep = async (step) => {
  //   console.log(step)
  // }

  // useEffect(() => {

  //   if(compass.hasOwnProperty("id")){
  //     const parsedSteps = compass.steps.items.map((step) => ({
  //             id : step.id,
  //             title : step.name_of_step,
  //             color: step.color,
  //             value: 1/compass.steps.items.length
  //           })
  //         );

  //     setLabels( parsedSteps.map((item) => item.title) )
  //     setData( parsedSteps.map((item) => item.value))
  //     setColors( parsedSteps.map((item) => item.color))
  //   }

  // }, [compass])

  return (
    <CompassViewerContainer>
      <MainContainer >
        {/* <CompassWheel selectStep={setStep} />
        <StepDetails step={step}/> */}
          <SessionCreator/>
      </MainContainer>
      <CompassNavigationBar>
        <ProjectDetails />
      </CompassNavigationBar>
    </CompassViewerContainer>
)};

