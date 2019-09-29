import React,{useState, useRef} from "react";
import { Drop} from "grommet";
import { 
  TimeLineContainer,
  TimeLineBar,
  InteractionBar ,
  HeaderText,
  ToolBox,
  ToolBoxText,
  ToolLabel,
  ToolValue
} from "../../styles/AnalyticsPage"

export default ({interaction}) => {
  const [over,setOver]= useState(false);
  const ref = useRef(null);

  // const dateFormatter = (date) => {
  //   const newDate = new Date(date)
  //   const monthNames = [
  //     "January", "February", "March",
  //     "April", "May", "June", "July",
  //     "August", "September", "October",
  //     "November", "December"
  //   ];
  
  //   const day = newDate.getDate();
  //   const monthIndex = newDate.getMonth();
  //   const year = newDate.getFullYear();
  
  //   return day + ' ' + monthNames[monthIndex] + ' ' + year;
  // }

  // const timeFormatter = (d) => {
  //   let date = new Date(d)
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var ampm = hours >= 12 ? 'pm' : 'am';
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? '0'+minutes : minutes;
  //   var strTime = hours + ':' + minutes + ' ' + ampm;
  //   return strTime;
  // }
  return (
    <>
      <InteractionBar
        fill
        color={interaction.color} 
        width={`${interaction.width}%`}
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      />
      {
        ref.current && over && (
        <Drop align={{ top: "bottom" }} target={ref.current} plain>
          <ToolBox color={interaction.color}>
          <ToolBoxText>
              <ToolLabel>Step:</ToolLabel>
              <ToolValue>{interaction.step}</ToolValue>
            </ToolBoxText>
            <ToolBoxText>
              <ToolLabel>Duration: </ToolLabel>
              <ToolValue>{interaction.duration} seconds</ToolValue>
            </ToolBoxText>
            <ToolBoxText>
              <ToolLabel>Created on: </ToolLabel>
              <ToolValue>{interaction.createdAt}</ToolValue>
            </ToolBoxText>
            {/* <ToolBoxText>
              <ToolLabel>Time Created: </ToolLabel>
              <ToolValue>{timeFormatter(interaction.createdAt)}</ToolValue>
            </ToolBoxText> */}
            
          </ToolBox>
        </Drop>
      )}
    </>
  );
}
