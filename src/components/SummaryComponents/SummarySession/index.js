import React, { useContext, useState, useEffect } from 'react';
import { getCompass, getSession } from "../../../utils/queries";
import { GlobalContext } from '../../../context/context';

const SummarySession = () => {
  const { compass } = useContext(GlobalContext)
  const [sessions, setSession] = useState([])
  //const [interactions, setInteraction] = useState([])
  const [currentCompass, setCurrentCompass] = useState("")
  console.log(compass)

  //Mounting once when the page loads
  useEffect(() => {
    getCompass(compass)
      //.then(res => getCurrentCompass(res.data.getCompass.name_of_compass))
      .then(res => {
        setSession(res.data.getCompass.sessions.items)
        setCurrentCompass(res.data.getCompass.name_of_compass)
        //console.log(res)
      })
      .catch(err => console.log(err))
  }, [])

  // const getSessionLogs = (id) => {
  //   console.log("Getting session logs")
  //   getSession(id)
  //     .then(res => {
  //       console.log(res.data.getSession.interactions.items)
  //     })
  //     .catch(err => console.log(err))
  //   //props.showInteraction()
  // }

  const interactionReduce = (session) => {
    let interactionArray = ""
    let divArray = session.interactions.items.reduce((accumulate, interaction) => {
      console.log(interactionArray)
      interactionArray += interaction.log_content + '\n'
    })
    return interactionArray;
  }

  let renderthis = []
  renderthis.push(<h5>Summary for {currentCompass}</h5>);
  renderthis.push(<h6>{sessions.map(session => (
    <div>
      <div>
        {session.interactions.items.map(interaction => (
          <div>
            <div key={session.id} >
              {session.name_of_session} ||
          	  {session.description_of_session} ||
              {session.createdAt} ||
              {interaction.step.name_of_step} ||
              {interaction.log_content}
            </div>
          </div>
        ))}
      </div></div>))}</h6>);

  return (
    <div>
      {renderthis}
    </div>
  )
}

export default SummarySession;
