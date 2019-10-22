import React, { useEffect, useContext}  from "react";
import { CompassSectionContainer } from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import Loadable from "@loadable/component"

import InteractionFeed from "./InteractionFeed"
const CompassWheel = Loadable(() => import('./CompassWheel'));

const CompassSelector = ({showAttachment}) => {
  const {compass} = useContext(CompassContext)

  const selectStep = (interaction) => {
    console.log(interaction)
  }

  return (
    <CompassSectionContainer>
      <CompassWheel selectStep={selectStep} />
      <InteractionFeed />
    </CompassSectionContainer>
)};
export default CompassSelector;
