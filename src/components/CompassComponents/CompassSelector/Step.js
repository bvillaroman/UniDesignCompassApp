import React from "react";
// import Logger from "./logger"
// import {userLogger} from "../context"
import { StepContainer, StepRow } from "../../../styles/CompassPage"
import { userCardPage } from "../../../context/CardPage/context"

const Step = ({title}) => {
  const {changeView} = userCardPage()
  
  return (
    <StepContainer onClick={e => changeView(2)}>
      {title}
    </StepContainer> 
)};
export default Step;
