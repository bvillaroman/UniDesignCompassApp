import React, { useContext, useEffect, useState } from "react";
import SummarySession from "../components/SummaryComponents/SummarySession/";
import SummaryLog from "../components/SummaryComponents/SummaryLog/";
import { CompassContext } from "../context/CompassPage/context";
import { ReviewModalContext } from "../context/ReviewModal/context"
import ReviewLog from "../components/ModalComponents/ReviewLog"

const SummaryPage = (props) => {
  const { compass, session, interaction } = useContext(CompassContext);
  const { showModal } = useContext(ReviewModalContext);

  return (
    <>
      {
        interaction.hasOwnProperty("id") ? (
          < SummaryLog />
        ) : <SummarySession />
      }
      {showModal && <ReviewLog />}
    </>
  )
};

export default SummaryPage;
