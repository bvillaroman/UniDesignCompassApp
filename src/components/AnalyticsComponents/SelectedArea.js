import React,{useState, useEffect} from "react";
import PieChart from './PieChart';
import {SelectedArea, PieChartContainer, ContainerHeader, HeaderText, } from '../../styles/AnalyticsPage';

export default ({session = {}}) => {
  const [data,setData] = useState([])
  const [labels,setLabels] = useState([])

  useEffect(() => {
    if (session.interactions && session.interactions.items.length > 0) {
      const interactions = session.compass.steps.items.map((step) => ({
          id : step.id,
          title : step.name_of_step,
          color: step.color,
          value: 0
        })
      );

      session.interactions.items.forEach(item => {
        interactions.find((step) => {
          if (step.id === item.step.id){
            step.value = step.value + item.duration
          }
        })
      })

      const filteredData = interactions.filter((interaction) => (interaction.value > 0))
      setLabels( filteredData.map((item) => item.title) )
      setData( filteredData.map((item) => item.value))
    }

  }, [session])

  return (
    <SelectedArea gridArea ='selected'>
      <ContainerHeader> 
        <HeaderText> {session.name_of_session} </HeaderText>
      </ContainerHeader>
      <PieChartContainer container="selected">
        { data && labels && <PieChart labels={labels} data={data} />}
      </PieChartContainer>
    </SelectedArea>
  )
};