import React,{useState, useEffect} from "react";
import PieChart from './PieChart';
import TimeLine from './TimeLine';

import {
  SelectedArea, 
  PieChartContainer, 
  ContainerHeader, 
  HeaderText,
  SessionSelector,
  TimeLineContainer 
} from '../../styles/AnalyticsPage';

export default ({sessions = {}}) => {
  const [selectedSession,setSelectedSession] = useState({})
  const [interactions,setInteractions] = useState([])
  const [data,setData] = useState([])
  const [labels,setLabels] = useState([])
  const [colors,setColors] = useState([])
  const [formattedSessions,setFormatterSessions] = useState([])

  useEffect(() => {
    if (sessions.length > 0) {
      let arrOfSessions = sessions.map(item => ({
        onClick: () => setSelectedSession(item),
        label: item.name_of_session 
      }))
      let session = selectedSession ? selectedSession : sessions[1]
      let allInteractions = session.interactions.items
                             .flat()
                             .filter((interaction) => (interaction.duration > 0))

      const parsedInteractions = session.compass.steps.items.map((step) => ({
          id : step.id,
          title : step.name_of_step,
          color: step.color,
          value: 0
        })
      );

      allInteractions.forEach(item => {
        parsedInteractions.find((step) => {
          if (step.id === item.step.id){
            step.value = step.value + item.duration
          }
        })
      })

      const filteredData = parsedInteractions.filter((interaction) => (interaction.value > 0))
      setFormatterSessions(arrOfSessions)
      setSelectedSession(session)
      setInteractions(allInteractions)
      setLabels( filteredData.map((item) => item.title) )
      setData( filteredData.map((item) => item.value))
      setColors( filteredData.map((item) => item.color))
    }

  }, [selectedSession])

  return (
    <SelectedArea gridArea ='selected'>
      <ContainerHeader> 
       
        <SessionSelector
          label={ (<HeaderText> {selectedSession.name_of_session} </HeaderText>)}
          items={formattedSessions}
          dropAlign={{ top: "bottom" }}
        />
      </ContainerHeader>
      <PieChartContainer container="selected">
        { data && labels && <PieChart labels={labels} data={data} colors={colors}/>}
      </PieChartContainer>
      { interactions && <TimeLine interactions={interactions} />}
    </SelectedArea>
  )
};