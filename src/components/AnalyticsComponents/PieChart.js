import React,{useState, useEffect} from "react";
import ReactApexChart from 'react-apexcharts';

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
    <ReactApexChart 
      options={options} 
      series={data}
      type="pie"
    />
  )
};