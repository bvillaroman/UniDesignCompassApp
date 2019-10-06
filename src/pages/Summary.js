import React, { useEffect, useState } from "react";
import SummarySession from "../components/SummaryComponents/SummarySession/"
import SummaryLog from "../components/SummaryComponents/SummaryLog/"
import queryStringParser from "../utils/queryStringParser"
import { getInteraction } from "../utils/queries"

const SummaryPage = (props) => {
  const [log, setLog] = useState({});
  const [compassID, setCompassID] = useState("");
  const [sessionID, setSessionID] = useState("");
  const [interactionID, setInteractionID] = useState("");

  useEffect(() => {
    const compass = queryStringParser(props.location.search).compassID
    const session = queryStringParser(props.location.search).sessionID
    const interaction = queryStringParser(props.location.search).interactionID
    setCompassID(compass)
    setSessionID(session)
    setInteractionID(interaction)
    console.log(`session: ${session}`)
    console.log(`interaction: ${interaction}`)
  }, [props.location.search])

  console.log(interactionID)

  useEffect(() => {
    // attachments,  currentLog, interactId, compassID
    if (interactionID !== "") {
      getInteraction(interactionID)
        .then(res => {
          console.log(res.data.getInteraction)
          setLog(res.data.getInteraction)
        })
        .catch(err => setLog({}))
    }
  }, [interactionID])

  return (
    <>
      {
        interactionID && log != {} && log.attachments ? (
          <SummaryLog
            attachments={log.attachments}
            currentLog={log.log_content}
            interactId={interactionID}
            compassID={compassID}
            comments={log.comments}
          />
        ) : <SummarySession compassID={compassID} />
      }
      {/* <SummarySession compassID={compassID} /> */}

    </>
  )
};

export default SummaryPage;
