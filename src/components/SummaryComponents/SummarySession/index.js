import React, { useContext, useState, useEffect } from 'react';
import { navigate } from "gatsby"
import SummaryLegend from '../SummaryLegend/';
import { Image } from 'grommet-icons';
import { CompassContext } from "../../../context/CompassPage/context";
import {
  SummaryMainView,
  SummaryTable,
  SummaryTableHeader,
  SummaryTableBody,
  SummaryTableRow,
  SummaryTdHeader,
  SummaryTdBody,
  SummaryTableConatiner,
  SummarySessionName
} from '../../../styles/SummaryPage';
import { Loader } from '../../../styles/layout';

const SummarySession = (props) => {
  const { compass } = useContext(CompassContext);

  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)

  //Mounting once when the page loads
  useEffect(() => {
    setLoading(true)
    if (compass.sessions) {
      setSessions(compass.sessions.items.filter((item) => { return item.interactions.items.length > 0 }))
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

  // const arrayAttachments = (sessions) => {
  //   let arrAttachment = []

  //   if (sessions && sessions.length > 0) {

  //     sessions.map((session, i) => {
  //       session.interactions.items.map((interaction, i) => {
  //         arrAttachment.push(interaction.attachments.items)
  //       })
  //     })
  //   }

  //   return arrAttachment.flat()
  // }

  const SessionTable = ({ sessions }) => {
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
                  <SummaryTdHeader>Log</SummaryTdHeader>
                  <SummaryTdHeader style={{ width: '14%' }}>Attachments</SummaryTdHeader>
                </SummaryTableRow>
              </SummaryTableHeader>
              {session.interactions.items.sort(timeConverter).map((interaction, i) =>
                <SummaryTableBody>
                  <tr key={i} onClick={() => navigate(`/Logger/?c=${compass.id}&s=${session.id}&i=${interaction.id}`)} style={{ cursor: "pointer" }}>
                    <SummaryTdBody color={interaction.step.color}>{interaction.step.name_of_step.substring(0, 10)}</SummaryTdBody>
                    <SummaryTdBody>{interaction.duration}s</SummaryTdBody>
                    <SummaryTdBody>{interaction.log_content.substring(0, 25) + "..."}</SummaryTdBody>
                    {/* <SummaryTdBody>{interaction.attachments.items.length > 0 ? <Image color="#5567FD" size="medium" /> : "---"}</SummaryTdBody> */}
                    <SummaryTdBody>---</SummaryTdBody>
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