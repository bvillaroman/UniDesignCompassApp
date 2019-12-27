import React from "react";
import { CompassSectionContainer } from "../../styles/CompassPage"
import Loadable from "@loadable/component"
import Logger from "./Logger"

// import InteractionFeed from "./InteractionFeed"
// const CompassWheel = Loadable(() => import('./CompassWheel'));
const NewCompassWheel = Loadable(() => import('./NewCompassWheel'));

const CompassSelector = ({selectStep}) => {

  return (
    <CompassSectionContainer>
      <NewCompassWheel selectStep={selectStep} />
      <Logger />
    </CompassSectionContainer>
)};
export default CompassSelector;
