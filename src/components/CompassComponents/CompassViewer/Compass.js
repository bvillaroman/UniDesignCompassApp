import React,{useState, useEffect} from "react";
import ReactApexChart from 'react-apexcharts';
import { CompassWheelContainer } from "../../../styles/CompassPage"

export default ({labels, data, colors}) => {
  const [options, setOptions]= useState({})

  useEffect(() => {
    setOptions({
      chart: {
        events: {
          click: (event, chartContext, config) => console.log(event)
        }
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '35%'
          }
        }
      },
      responsive: [{
        // breakpoint: 1130,
        // options: {
        //   dataLabels: {
        //     style: {
        //       fontSize: '8px',
        //     },
        //   },
        // }
      }],
      legend: {
        show: false
      },
      tooltip: {enabled: false},
      dataLabels: {
        enabled: true,
        formatter: (val,opts) => labels[opts.seriesIndex] ,
        style: {
          fontSize: '10px',
          color: "white",
          fontFamily: "Roboto, Helvetica Neue, sans-serif",
        },
      },
      colors
    })
  }, [labels, colors])


  return (
    <CompassWheelContainer>
      <ReactApexChart 
        options={options} 
        series={data}
        type="donut"
        height="100%"
      />
    </CompassWheelContainer>
  )
};