import React, { useContext, useState, useEffect } from 'react';
import { getCompass } from "../../../utils/queries";
import { navigate } from "gatsby"
import SummaryLegend from '../SummaryLegend/';
import { Image } from 'grommet-icons';
import { CompassContext } from "../../../context/CompassPage/context";
import {
  SummaryMainView,
  SummaryTable,
  SummaryTableHeader,
  SummaryTdHeader1,
  SummaryTableBody,
  SummaryTableRow,
  SummaryTdHeader,
  SummaryTdBody,
  SummaryTableConatiner,
  SummarySessionName
} from '../../../styles/SummaryPage';
import { Loader } from '../../../styles/layout';

const SummarySession = (props) => {
  const { compass, session, interaction } = useContext(CompassContext);
  console.log("context", useContext(CompassContext))

  const [sessions, setSession] = useState([])
  const [loading, setLoading] = useState(true)
  const { compassID } = props;

  //Mounting once when the page loads
  useEffect(() => {
    setLoading(true)
    if (compass.sessions) {
      setSession(compass.sessions.items.filter((item) => { return item.interactions.items.length > 0 }))
      setLoading(false)
    }
  }, [compass.sessions])

  const timeConverter = (a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1
    } else if (a.createdAt < b.createdAt) {
      return 1
    } else {
      return 0
    }
  }

  const SessionTable = ({ sessions }) => {
    console.log('sessions :', sessions)
    return (
      <>
        <SummaryMainView>{sessions.sort(timeConverter).map((session, i) =>
          <SummaryTableConatiner key={i}>
            <SummarySessionName>
              {session.name_of_session}
            </SummarySessionName>
            <SummaryTable alignSelf="stretch">
              <SummaryTableHeader>
                <SummaryTableRow>
                  <SummaryTdHeader style={{ width: '10%' }}>Step</SummaryTdHeader>
                  <SummaryTdHeader style={{ width: '10%' }}>Time</SummaryTdHeader>
                  {/* <SummaryTdHeader>CreatedAt</SummaryTdHeader> */}
                  <SummaryTdHeader>Log</SummaryTdHeader>
                  <SummaryTdHeader style={{ width: '14%' }}>Attachments</SummaryTdHeader>
                </SummaryTableRow>
              </SummaryTableHeader>
              {/* {console.log(session.interactions.items.sort(timeConverter))} */}
              {session.interactions.items.sort(timeConverter).map((interaction, i) =>
                <SummaryTableBody>
                  <tr key={i} onClick={() => navigate(`/Summary/?c=${compass.id}&s=${session.id}&i=${interaction.id}`)} style={{ cursor: "pointer" }}>
                    <SummaryTdBody color={interaction.step.color}>{interaction.step.name_of_step.substring(0, 10)}</SummaryTdBody>
                    <SummaryTdBody>{interaction.duration}s</SummaryTdBody>
                    {/* <SummaryTdBody>{interaction.createdAt.substring(0, 19)}</SummaryTdBody> */}
                    <SummaryTdBody>{interaction.log_content.substring(0, 25) + "..."}</SummaryTdBody>
                    <SummaryTdBody>{interaction.attachments.items.length > 0 ? <Image color="#5567FD" size="medium" /> : "---"}</SummaryTdBody>
                    {console.log(interaction)}
                  </tr>
                </SummaryTableBody>
              )}
            </SummaryTable>
          </SummaryTableConatiner>
        )}
        </SummaryMainView>
        <SummaryLegend></SummaryLegend>
      </>
    )
  }

  return (
    <>
      {
        loading ? <Loader /> : <SessionTable sessions={sessions} />
      }
    </>
  )
}

export default SummarySession;