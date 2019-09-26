import React from "react";
import { PieChartComponent } from "../../styles/AnalyticsPage"

export default ({labels, data}) => {
  const options =  {
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
    // dataLabels: {
    //   formatter: (val, { seriesIndex, dataPointIndex, w }) => {
    //     console.log(data[seriesIndex])
    //     return `${Math.floor(val)}% \n(${data[seriesIndex]}s)`
    //   }
    // },

  }

  return (
    <PieChartComponent 
      options={options} 
      series={data}
      type="pie"
      // width="430"
    />
  )
};