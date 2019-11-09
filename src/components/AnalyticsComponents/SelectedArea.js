import React,{useState, useEffect} from "react";
import Loadable from "@loadable/component"
import TimeLine from './TimeLine';
import {
  SelectedArea, 
  PieChartContainer, 
  ContainerHeader, 
  HeaderText,
  SessionSelector,
} from '../../styles/AnalyticsPage';

const PieChart = Loadable(() => import('./PieChart'));

export default ({sessions = [], steps = []}) => {
  const [selectedSession,setSelectedSession] = useState({})
  const [selectedSessionIndex,setSelectedSessionIndex] = useState(0)
  const [interactions,setInteractions] = useState([])
  const [data,setData] = useState([])
  const [labels,setLabels] = useState([])
  const [colors,setColors] = useState([])
  const [formattedSessions,setFormatterSessions] = useState([])

  useEffect(() => {
    const filteredSessions = sessions.length ? sessions.filter((session) => (session.interactions && session.interactions.items.length > 0)) : []
    if (filteredSessions.length > 0) {
      
      let arrOfSessions = filteredSessions.map((item,index) => ({
                              onClick: () => {
                                setSelectedSession(item)
                                setSelectedSessionIndex(index)
                              },
                              label: item.name_of_session 
                            }))
                              
      let session = filteredSessions[selectedSessionIndex]
                
      
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

      parsedInteractions.forEach( step => {
        let temp = allInteractions.filter(interaction => interaction.step.id === step.id)
        const value = temp.reduce((totalTime = 0, interaction) => parseInt(totalTime) + parseInt(interaction.duration), 0)
        step.value = value
      })
      
      const filteredData = parsedInteractions.filter((interaction) => (interaction.value > 0))
      setFormatterSessions(arrOfSessions)
      setSelectedSession(session)
      setInteractions(allInteractions)
      setLabels( filteredData.map((item) => item.title) )
      setData( filteredData.map((item) => item.value))
      setColors( filteredData.map((item) => item.color))
    }

  }, [sessions,selectedSession, steps])

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