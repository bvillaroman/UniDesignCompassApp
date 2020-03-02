import React, { useContext, useState, useEffect } from 'react';
import { navigate } from "gatsby"
// import SummaryLegend from '../SummaryLegend/';
import { Image, More } from 'grommet-icons';
import HeaderInfo from './HeaderInfo.js';
import { CompassContext } from "../../../context/CompassPage/context";
import {
  SummaryMainView,
  SummaryTable,
  SummaryTableHeader,
  SummaryTableBody,
  SummaryTableRow,
  SummaryTdHeader,
  SummaryTdBody,
  SummaryTdBody2,
  SummaryTableConatiner,
  SummarySessionName
} from '../../../styles/SummaryPage';
import { Loader } from '../../../styles/layout';

const SummarySession = (props) => {
  const { compass } = useContext(CompassContext);

  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)

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
      return 1
    } else if (a.createdAt < b.createdAt) {
      return -1
    } else {
      return 0
    }
  }

  const SessionTable = ({ sessions }) => {
    return (
      <>
        <SummaryMainView>

          <HeaderInfo />

          {sessions.sort(timeConverter).map((session, i) =>
            <SummaryTableConatiner key={i} className="summary-help">
              <SummarySessionName>
                {session.name_of_session.substring(0, session.name_of_session.length - 1)}{<More onClick={() => setShow(!show)} />}
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
                  <SummaryTableBody key={i}>
                    <tr key={i} onClick={() => navigate(`/Logger/?c=${compass.id}&s=${session.id}&i=${interaction.id}`)} style={{ cursor: "pointer" }}>
                      <SummaryTdBody color={interaction.step.color}>{interaction.step.name_of_step.substring(0, 10)}</SummaryTdBody>
                      <SummaryTdBody>{interaction.duration}s</SummaryTdBody>
                      {show ? <SummaryTdBody>{interaction.log_content.length > 24 ? interaction.log_content.substring(0, 50) + "..." : interaction.log_content}</SummaryTdBody> : <SummaryTdBody2>{interaction.log_content.length > 24 ? interaction.log_content + "..." : interaction.log_content}</SummaryTdBody2>}
                      <SummaryTdBody>{interaction.attachments.items.length > 0 ? <Image color="#5567FD" size="medium" /> : "---"}</SummaryTdBody>
                    </tr>
                  </SummaryTableBody>
                )}

              </SummaryTable>
            </SummaryTableConatiner>
          )}
        </SummaryMainView>
        {/* <SummaryLegend></SummaryLegend> */}
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