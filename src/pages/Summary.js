import React, { useContext, useEffect, useState } from "react";
import SummarySession from "../components/SummaryComponents/SummarySession/";
import SummaryLog from "../components/SummaryComponents/SummaryLog/";
import { CompassContext } from "../context/CompassPage/context";

const SummaryPage = (props) => {
  const { compass, session, interaction } = useContext(CompassContext);

  return (
    <>
      {
        interaction.hasOwnProperty("id") ? (
          <SummaryLog
          // attachments={interaction.attachments}
          // currentLog={interaction.log_content}
          // interactId={interaction.id}
          // compassID={compass.id}
          // sessionID={session.id}
          // interactionID={interaction.id}
          // comments={interaction.comments}
          />
        ) : <SummarySession compassID={compass.id} />
      }
      {/* <SummarySession compassID={compassID} /> */}

    </>
  )
};

export default SummaryPage;
