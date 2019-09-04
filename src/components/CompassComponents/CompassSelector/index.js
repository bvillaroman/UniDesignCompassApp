import React  from "react";
import Step from "./Step"
import { StepRow } from "../../../styles/CompassPage"
import { userCompassPage } from "../../../context/CompassPage/context"

const CompassSelector = (props) => {
  const {steps} = userCompassPage()
  return (
    <>
      <StepRow>
        <Step activeStep={steps[0]} />
        <Step activeStep={steps[1]}/>
        {/* {steps.map((step,key) => <Step title={step} />)} */}
      </StepRow> 

      <StepRow>

        <Step activeStep={steps[2]}/>
        <Step />
        <Step activeStep={steps[3]}/>
        {/* {steps.map((step,key) => <Step title={step} />)} */}
      </StepRow> 

      <StepRow>

        <Step activeStep={steps[4]}/>
        <Step activeStep={steps[5]}/>
        {/* {steps.map((step,key) => <Step title={step} />)} */}
      </StepRow> 
    </>
    
)};
export default CompassSelector;
