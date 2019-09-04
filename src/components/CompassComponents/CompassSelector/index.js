import React  from "react";
import Step from "./Step"
import { StepRow } from "../../../styles/CompassPage"
import { globalStore } from "../../../context/context"
import { userCompassPage } from "../../../context/CompassPage/context"

const CompassSelector = (props) => {
  const {compass} = globalStore()
  const { changeStep } = userCompassPage()
  const {steps} = compass;

  return (
    <>
      <StepRow>
        <Step activeStep={steps[0]} onClick={e => changeStep(steps[0])}/>
        <Step activeStep={steps[1]} onClick={e => changeStep(steps[1])}/>
        {/* {steps.map((step,key) => <Step title={step} />)} */}
      </StepRow> 

      <StepRow>

        <Step activeStep={steps[2]} onClick={e => changeStep(steps[2])}/>
        <Step />
        <Step activeStep={steps[3]} onClick={e => changeStep(steps[3])}/>
        {/* {steps.map((step,key) => <Step title={step} />)} */}
      </StepRow> 

      <StepRow>

        <Step activeStep={steps[4]} onClick={e => changeStep(steps[4])}/>
        <Step activeStep={steps[5]} onClick={e => changeStep(steps[5])}/>
        {/* {steps.map((step,key) => <Step title={step} />)} */}
      </StepRow> 
    </>
    
)};
export default CompassSelector;
