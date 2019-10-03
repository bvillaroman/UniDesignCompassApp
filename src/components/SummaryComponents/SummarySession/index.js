import React, { useContext, useState, useEffect } from 'react';
import { getCompass, getInteraction } from "../../../utils/queries";
import { GlobalContext } from '../../../context/context';
import SummaryLog from '../SummaryLog/';
import SummaryLegend from '../SummaryLegend/';
// import CompassBar from '../../SideBarComponents/CompassBar'
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

const SummarySession = (props) => {
  const { compass } = useContext(GlobalContext)
  const [sessions, setSession] = useState([])
  // const [compassID, setCompassID] = useState('')
  const [expandLog, setExpandLog] = useState("")
  const [render, showRender] = useState(false)

  const compassID = props.compassID.slice(3);
  console.log()
  //Mounting once when the page loads
  useEffect(() => {
    getCompass(compass)
      .then(res => {
        setSession(res.data.getCompass.sessions.items.filter((item) => { return item.interactions.items.length > 0 }))
        // console.log(res.data.getCompass)
        // setCompassID(res.data.getCompass.id)
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

  function timeConverter(a, b) {
    if (a.createdAt > b.createdAt) {
      return -1
    } else if (a.createdAt < b.createdAt) {
      return 1
    } else {
      return 0
    }
  }

  const SessionTable = ({ sessions }) => {
    return (
      <>
        <SummaryMainView>{sessions.sort(timeConverter).map((session, i) =>
          <SummaryTableConatiner style={{ margin: '1em', width: '96%' }} key={i}>
            <div style={{ fontSize: 'x-large', fontWeight: 500 }}>
              {session.name_of_session}
            </div>
            <SummaryTable alignSelf="stretch">
              <SummaryTableHeader>
                <SummaryTableRow style={{ fontSize: "initial" }}>
                  <SummaryTdHeader style={{ width: '10%' }}>Step</SummaryTdHeader>
                  <SummaryTdHeader style={{ width: '10%' }}>Time</SummaryTdHeader>
                  <SummaryTdHeader>CreatedAt</SummaryTdHeader>
                  <SummaryTdHeader style={{}}>Log</SummaryTdHeader>
                  <SummaryTdHeader style={{ width: '19%' }}>Attachments</SummaryTdHeader>
                </SummaryTableRow>
              </SummaryTableHeader>
              {console.log(session.interactions.items.sort(timeConverter))}
              {session.interactions.items.sort(timeConverter).map((interaction, i) =>
                <SummaryTableBody key={i}>
                  <tr key={interaction.id} onClick={() => getSessionLogs(interaction.id)} style={{ cursor: "pointer" }}>
                    <SummaryTdBody color={interaction.step.color} style={{ border: "hidden" }}>{interaction.step.name_of_step.substring(0, 7)}</SummaryTdBody>
                    <SummaryTdBody color={interaction.step.color} style={{ border: "hidden" }}>{interaction.duration}s</SummaryTdBody>
                    <SummaryTdBody color={interaction.step.color} style={{ border: "hidden" }}>{interaction.createdAt.substring(0, 19)}</SummaryTdBody>
                    <SummaryTdBody color={interaction.step.color} style={{ border: "hidden" }}>{interaction.log_content.substring(0, 50) + "..."}</SummaryTdBody>
                    <SummaryTdBody color={interaction.step.color} style={{ border: "hidden" }}>{interaction.attachments.items.length > 0 ? <Image color="#5567FD" size="medium" /> : "---"}</SummaryTdBody>
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
      {/* <CompassBar compassID={compassID} /> */}
    </>

  )
}

export default SummarySession;