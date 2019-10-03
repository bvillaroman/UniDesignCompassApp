import React,{useState, useEffect} from "react";
import { 
  TimeLineContainer,
  TimeLineBar,
  HeaderText
} from "../../styles/AnalyticsPage"
import InteractionBar from "./InteractionBar"

const TimeLine = ({interactions}) => {
  const [data,setData] = useState([])
  
  useEffect(() => {

    if(interactions.length ) {
      let totalTime = interactions.reduce((accum, currentValue) => accum + currentValue.duration, 0)
         
      const parsedInteractions = interactions.map( (item,index) => ({
        createdAt : item.createdAt,
        step: item.step.name_of_step,
        color: item.step.color,
        duration: item.duration,
        width: (item.duration/totalTime) * 100,
        index
      }))      
      
      setData( parsedInteractions)
    }

  }, [interactions])

  return (
    <TimeLineContainer >
      <HeaderText> Timeline </HeaderText>
      { 
        data.length > 0 && (
          <TimeLineBar>
            {
              data.map((item,index) => (
                <InteractionBar interaction={item}/>
              ))
            }
          </TimeLineBar>
        )
      }
    </TimeLineContainer>
  )
};

export default TimeLine;