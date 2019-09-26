import React,{useState, useEffect} from "react";
import PieChart from './PieChart';
import {ContainerHeader, HeaderText, PieChartContainer, OverallArea} from '../../styles/AnalyticsPage';

export default ({sessions = {}, steps={}}) => {
  const [data,setData] = useState([])
  const [labels,setLabels] = useState([])

  useEffect(() => {

    if(sessions.length && steps.length) {
      let allInteractions = sessions
                              .map(item => item.interactions.items)
                              .flat().filter((interaction) => (interaction.duration > 0))
                               
      const interactions = steps.map((step) => ({
              id : step.id,
              title : step.name_of_step,
              color: step.color,
              value: 0
            })
          );
    
      allInteractions.forEach(item => {
        interactions.find((step) => {
          if (step.id === item.step.id){
            step.value = step.value + item.duration
          }
        })
      })

      setLabels( interactions.map((item) => item.title) )
      setData( interactions.map((item) => item.value))
    }

  }, [sessions, steps])

  return (
    <OverallArea gridArea ='overall'>
      <ContainerHeader> 
        <HeaderText> All Sessions </HeaderText>
      </ContainerHeader>
      <PieChartContainer container="overall">
        { data && labels && <PieChart labels={labels} data={data} />}
      </PieChartContainer>
    </OverallArea>
  )
};