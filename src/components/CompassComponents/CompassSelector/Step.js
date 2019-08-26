import React from "react";
// import Logger from "./logger"
// import {userLogger} from "../context"
import { StepContainer, StepRow } from "../../../styles/CompassPage"

const Step = ({title}) => {
  // const {logs} = userLogger()
  return (
    <StepContainer onClick={e => console.log(title)}>
      {title}
    </StepContainer> 
)};
export default Step;
