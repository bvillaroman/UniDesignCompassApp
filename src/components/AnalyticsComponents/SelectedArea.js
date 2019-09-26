import React,{useState, useEffect} from "react";
import PieChart from './PieChart';
import TimeLine from './TimeLine';

import {
  SelectedArea, 
  PieChartContainer, 
  ContainerHeader, 
  HeaderText,
  TimeLineContainer 
} from '../../styles/AnalyticsPage';

export default ({session = {}}) => {
  const [interactions,setInteractions] = useState([])
  const [data,setData] = useState([])
  const [labels,setLabels] = useState([])
  const [colors,setColors] = useState([])

  useEffect(() => {
    if (session.interactions && session.interactions.items.length > 0) {
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
      setInteractions(allInteractions)
      setLabels( filteredData.map((item) => item.title) )
      setData( filteredData.map((item) => item.value))
      setColors( filteredData.map((item) => item.color))
    }

  }, [session])

  return (
    <SelectedArea gridArea ='selected'>
      <ContainerHeader> 
        <HeaderText> {session.name_of_session} </HeaderText>
      </ContainerHeader>
      <PieChartContainer container="selected">
        { data && labels && <PieChart labels={labels} data={data} colors={colors}/>}
      </PieChartContainer>
      { interactions && <TimeLine interactions={interactions} />}
    </SelectedArea>
  )
};