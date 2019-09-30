import React, { useContext, useState, useEffect } from 'react';
import { getCompass, getInteraction } from "../../../utils/queries";
import { GlobalContext } from '../../../context/context';
import SummaryLog from '../SummaryLog/';
import SummaryLegend from '../SummaryLegend/';
import { Image } from 'grommet-icons';
import {
  SummaryMainView,
  SummaryTable,
  SummaryTableHeader,
  SummaryTableBody,
  SummaryTableRow,
  SummaryTdHeader,
  SummaryTdBody,
  SummaryTableConatiner
} from '../../../styles/SummaryPage';

const SummarySession = () => {
  const { compass } = useContext(GlobalContext)
  const [sessions, setSession] = useState([])
  const [expandLog, setExpandLog] = useState("")
  const [render, showRender] = useState(false)

  //Mounting once when the page loads
  useEffect(() => {
    getCompass(compass)
      .then(res => {
        setSession(res.data.getCompass.sessions.items.filter((item) => { return item.interactions.items.length > 0 }))
      })
      .catch(err => console.log(err))
  }, [])

  const getSessionLogs = (id) => {
    getInteraction(id)
      .then(res => {
        setExpandLog(res.data.getInteraction)
        showRender(!render)
      })
      .catch(err => console.log('getSessionLogs err:', err))
  }

  const SessionTable = ({ sessions }) => {
    return (
      <>
        <SummaryMainView>{sessions.map(session =>
          <SummaryTableConatiner>
            <SummaryTable alignSelf="stretch">
              <SummaryTableHeader>
                <SummaryTableRow>
                  <SummaryTdHeader style={{ width: '12%' }}>Session</SummaryTdHeader>
                  <SummaryTdHeader style={{ width: '9%' }}>Time</SummaryTdHeader>
                  <SummaryTdHeader>Log</SummaryTdHeader>
                  <SummaryTdHeader style={{ width: '19%' }}>Attachments</SummaryTdHeader>
                </SummaryTableRow>
              </SummaryTableHeader>
              {session.interactions.items.map((interaction, i) =>
                <SummaryTableBody>
                  <tr key={interaction.id} onClick={() => getSessionLogs(interaction.id)} style={{ cursor: "pointer" }}>
                    <SummaryTdBody color={interaction.step.color}>{session.name_of_session.substring(0, 10) + "..."}</SummaryTdBody>
                    <SummaryTdBody color={interaction.step.color}>{interaction.duration}s</SummaryTdBody>
                    <SummaryTdBody color={interaction.step.color}>{interaction.log_content.substring(0, 15) + "..."}</SummaryTdBody>
                    <SummaryTdBody color={interaction.step.color}>{interaction.attachments.items.length > 0 ? <Image color="#5567FD" size="medium" /> : "---"}</SummaryTdBody>
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

  const renderLog = () => {
    showRender(!render)
  }

  const interactId = expandLog.id
  const storeLog = expandLog.log_content;
  const attachments = expandLog.attachments;

  return (
    <>
      {
        render ? <SummaryLog currentLog={storeLog} showLog={renderLog} attachments={attachments} interactId={interactId} />
          : <SessionTable sessions={sessions} />
      }
    </>

  )
}

export default SummarySession;