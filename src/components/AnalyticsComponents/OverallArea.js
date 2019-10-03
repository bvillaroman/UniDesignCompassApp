import React,{useState, useEffect} from "react";
// import TimeLine from './TimeLine';
import Loadable from "@loadable/component"

import { 
  ContainerHeader, 
  HeaderText, 
  PieChartContainer, 
  OverallArea,
  TimeLineContainer
} from '../../styles/AnalyticsPage';


const PieChart = Loadable(() => import('./PieChart'));

export default ({sessions = {}, steps={}}) => {
  // const [interactions, setInteractions]  = useState([])
  const [data,setData] = useState([])
  const [labels,setLabels] = useState([])
  const [colors,setColors] = useState([])

  useEffect(() => {

    if(sessions.length && steps.length) {
      let allInteractions = sessions
                              .map(item => item.interactions.items)
                              .flat().filter((interaction) => (interaction.duration > 0))
                               
      const parsedInteractions = steps.map((step) => ({
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

      // setInteractions(allInteractions)
      setLabels( parsedInteractions.map((item) => item.title) )
      setData( parsedInteractions.map((item) => item.value))
      setColors( parsedInteractions.map((item) => item.color))

    }

  }, [sessions, steps])

  return (
    <OverallArea gridArea ='overall'>
      <ContainerHeader> 
        <HeaderText> All Sessions </HeaderText>
      </ContainerHeader>
      <PieChartContainer container="overall">
        { data && labels && <PieChart labels={labels} data={data} colors={colors}/>}
      </PieChartContainer>
      <TimeLineContainer pad="large" direction="row" gap="medium">
        {/* { interactions && <TimeLine interactions={interactions} />} */}
      </TimeLineContainer>
    </OverallArea>
  )
};