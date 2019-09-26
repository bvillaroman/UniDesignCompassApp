import React,{useState, useEffect} from "react";
import { PieChartComponent } from "../../styles/AnalyticsPage"

export default ({labels, data, colors}) => {
  const [options, setOptions]= useState({})

  useEffect(() => {
    setOptions({
      labels,
      responsive: [{
        breakpoint: 480,
        options: {
          
        }
      }],
      legend: {
        position: 'bottom',
        horizontalAlign: 'center'
      },
      colors
    })
  }, [labels, colors])


  return (
    <PieChartComponent 
      options={options} 
      series={data}
      type="pie"
      // width="430"
    />
  )
};