import React ,{ useState } from "react";
// import Logger from "./logger"
// import {userLogger} from "../context"
import Step from "./Step"
import { StepRow } from "../../../styles/CompassPage"

const CompassSelector = (props) => {
  const steps = ["Step 1", "Step 2","Step 3","Step 4","Step 5","Step 6","Step 7"]

  // const {logs} = userLogger()
  return (
    <>
      <StepRow>
        <Step title={steps[0]} />
        <Step title={steps[1]} />
        {/* {steps.map((step,key) => <Step title={step} />)} */}
      </StepRow> 

      <StepRow>

        <Step title={steps[2]} />
        <Step  />
        <Step title={steps[4]} />
        {/* {steps.map((step,key) => <Step title={step} />)} */}
      </StepRow> 

      <StepRow>

        <Step title={steps[5]} />
        <Step title={steps[6]} />
        {/* {steps.map((step,key) => <Step title={step} />)} */}
      </StepRow> 
    </>
    
)};
export default CompassSelector;
