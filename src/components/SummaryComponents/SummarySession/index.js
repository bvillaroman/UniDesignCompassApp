import React, { useContext, useState, useEffect } from 'react';
import { getCompass, getInteraction } from "../../../utils/queries";
import { GlobalContext } from '../../../context/context';
import SummaryLog from '../SummaryLog/';
import {
  SummaryTable,
  SummaryTableHeader,
  SummaryTableBody,
  SummaryTableRow,
  SummaryTableCellHeader,
  SummaryTableCellBody,
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
        setSession(res.data.getCompass.sessions.items)
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
      <SummaryTableConatiner>
        <SummaryTable alignSelf="stretch">
          <SummaryTableHeader>
            <SummaryTableRow>
              <SummaryTableCellHeader>Session Name</SummaryTableCellHeader>
              <SummaryTableCellHeader>Session Description</SummaryTableCellHeader>
              <SummaryTableCellHeader>Created At</SummaryTableCellHeader>
              <SummaryTableCellHeader>Step</SummaryTableCellHeader>
              <SummaryTableCellHeader>Log</SummaryTableCellHeader>
            </SummaryTableRow>
          </SummaryTableHeader>
          <SummaryTableBody>
            {sessions.map(session =>
              session.interactions.items.map((interaction, i) => (
                <tr key={interaction.id} onClick={() => getSessionLogs(interaction.id)} style={{ cursor: "pointer" }}>
                  <SummaryTableCellBody>{session.name_of_session}</SummaryTableCellBody>
                  <SummaryTableCellBody>{session.description_of_session.substring(0, 10) + "..."}</SummaryTableCellBody>
                  <SummaryTableCellBody>{session.createdAt.substring(0, 19)}</SummaryTableCellBody>
                  <SummaryTableCellBody>{interaction.step.name_of_step.substring(0, 19)}</SummaryTableCellBody>
                  <SummaryTableCellBody>{interaction.log_content.substring(0, 5) + "..."}</SummaryTableCellBody>
                </tr>
              ))
            )}
          </SummaryTableBody>
        </SummaryTable>
      </SummaryTableConatiner>
    )
  }

  const renderLog = () => {
    showRender(!render)
  }

  const storeLog = expandLog.log_content;
  const attachments = expandLog.attachments;

  return (
    <>
      {
        render ? <SummaryLog currentLog={storeLog} showLog={renderLog} attachments={attachments} />
          : <SessionTable sessions={sessions} />
      }
    </>

  )
}

export default SummarySession;


