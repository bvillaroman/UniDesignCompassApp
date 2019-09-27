import React, { useContext, useState, useEffect } from 'react';
import { getCompass, getInteraction } from "../../../utils/queries";
import { GlobalContext } from '../../../context/context';
import SummaryLog from '../SummaryLog/';
import { Image } from 'grommet-icons';
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
      <div>{sessions.map(session =>
        <SummaryTableConatiner>
          <SummaryTable alignSelf="stretch">
            <SummaryTableHeader>
              <SummaryTableRow>
                <SummaryTableCellHeader>Session Name</SummaryTableCellHeader>
                <SummaryTableCellHeader>Duration</SummaryTableCellHeader>
                <SummaryTableCellHeader>Step</SummaryTableCellHeader>
                <SummaryTableCellHeader>Log</SummaryTableCellHeader>
                <SummaryTableCellHeader>Attachments</SummaryTableCellHeader>
              </SummaryTableRow>
            </SummaryTableHeader>
            {session.interactions.items.map((interaction, i) =>
              <SummaryTableBody>
                <tr key={interaction.id} onClick={() => getSessionLogs(interaction.id)} style={{ cursor: "pointer" }}>
                  <SummaryTableCellBody>{session.name_of_session}</SummaryTableCellBody>
                  <SummaryTableCellBody>{interaction.duration}</SummaryTableCellBody>
                  <SummaryTableCellBody color={interaction.step.color}>{interaction.step.name_of_step.substring(0, 19) + "..."}</SummaryTableCellBody>
                  <SummaryTableCellBody>{interaction.log_content.substring(0, 5) + "..."}</SummaryTableCellBody>
                  <SummaryTableCellBody>{interaction.attachments.items.length > 0 ? <Image color="#5567FD" size="medium" /> : "No Attachments"}</SummaryTableCellBody>
                </tr>
              </SummaryTableBody>
            )}
          </SummaryTable>
        </SummaryTableConatiner>
      )}
      </div>)
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