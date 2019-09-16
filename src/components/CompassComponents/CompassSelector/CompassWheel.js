import React,{useState, useEffect} from "react";
import { 
  StepRow, 
  CSMain,
  CSTitle
} from "../../../styles/CompassPage"
import Step from "./Step"

const CompassWheel = ({compassSteps = [],interactions} = []) => {
  const [durations,setDurations] = useState(compassSteps)

  // useEffect(() => {

  // }, [])
  console.log(compassSteps)

  return (
    <CSMain 
      gridArea="main"
      rows={['10%', '90%']}
      columns={['30%', '70%']}
      fill
      areas={[
        { name: 'title', start: [0, 0], end: [0, 1] },
        { name: 'content', start: [0, 1], end: [1, 1] },
      ]}
    >
      <CSTitle gridArea="title">
        <span>Compass Steps</span>  
      </CSTitle>
      <StepRow gridArea="content">
        {
          compassSteps ? compassSteps.map((item,key) => {
            return (<Step activeStep={item} key={key} rotateAngle={key*(360/compassSteps.length)}/>)
          }) : ''
        }
      </StepRow>
    </CSMain>
  )
};
export default CompassWheel;
