import React from "react";
import { CompassSectionContainer } from "../../../styles/CompassPage"
import Loadable from "@loadable/component"

import InteractionFeed from "./InteractionFeed"
const CompassWheel = Loadable(() => import('./CompassWheel'));

const CompassSelector = ({selectStep}) => {

  return (
    <CompassSectionContainer>
      <CompassWheel selectStep={selectStep} />
      <InteractionFeed />
    </CompassSectionContainer>
)};
export default CompassSelector;
