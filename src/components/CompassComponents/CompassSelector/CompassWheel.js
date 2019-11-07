import React, { useState,useEffect, useContext } from "react";
import { CompassContext } from "../../../context/CompassPage/context"
import { 
  CSTitle,
  // SessionClock,
  CompassWheelContainer,
  CompassWheel
} from "../../../styles/CompassPage"
import * as Mutation from "../../../utils/mutations"
// import ReactApexChart from 'react-apexcharts';
import PieChart from 'react-minimal-pie-chart';
import {navigate} from 'gatsby'

const FULL_WIDTH = 32;
const NORMAL_WIDTH = 30;

export default (props) => {
  const {compass, session, interactions, updateInteraction, clearInteraction} = useContext(CompassContext)
  const [steps,setSteps] = useState([])
  const [options, setOptions]= useState({})
  const [activeStep, setActiveStep] = useState({})

  useEffect(() => {
    if(session.hasOwnProperty("compass")){
      const compassSteps = session.compass.steps.items.flat();
      let arr = compassSteps.map((step, key) => ({
          id : step.id,
          key,
          name_of_step : step.name_of_step,
          color: step.color,
          defaultColor: step.color,
          duration: 0,
          title: step.name_of_step,
          value: 100/compassSteps.length

        })
      );

      arr.forEach( step => {
        let temp = interactions.filter(interaction => interaction.step.id === step.id)
        const value = temp.reduce((totalTime = 0, interaction) => parseInt(totalTime) + parseInt(interaction.duration), 0)
        step.duration = value
      })

      setSteps(arr)
    }
  }, [session,interactions])
  
  useEffect(() => {
    if(steps !== []) {
      setOptions({
        labels: steps.map(step => step.name_of_step),
        dataLabels: {
          formatter: function(value, { seriesIndex, dataPointIndex, w }) {
            return steps[seriesIndex].name_of_step 
          }
        },
        legend: {
          show: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: '40%',
              labels: {
                show: true,
                name: {
                  show:true
                },
                value: {
                  show:false
                }
              }
            }
          }
        },
        tooltip : {
          enabled: false,
        },
        chart: {
          events: {
            dataPointSelection: function(event, chartContext, config){
              goToLog(steps[config.dataPointIndex].id)
            }
          }
        },
        colors: steps.map(step => step.color),
        series: steps.map(() => Math.floor(100/steps.length) * 0.1)
      })
    }
  }, [steps])

  const goToLog = async (id) => {
    Mutation.startInteraction(session.id,id)
    .then((res) => {
      updateInteraction(res.data.createInteraction);
    });
  } 

  function onMouseOut(event, propsData, index) {
    const data = propsData.map((entry, i) => {
      return i === index
        ? {
            ...entry,
            style: {
              ...entry.style,
              strokeWidth: i === activeStep.key ? FULL_WIDTH : NORMAL_WIDTH,
            },
          }
        : entry;
    });

    setSteps(data)
  }

  function onMouseOver(event, propsData, index) {
    const data = propsData.map((entry, i) => {
      return i === index
        ? {
            ...entry,
            style: {
              ...entry.style,
              strokeWidth: FULL_WIDTH,
            },
          }
        : entry;
    });

    setSteps(data)
  }

  function onClick(event, propsData, index) {
    
    const data = propsData.map((entry, i) => {
      return {
        ...entry,
        ...{
          style: {
            ...entry.style,
            strokeWidth: i === index && i !== activeStep.key ? FULL_WIDTH : NORMAL_WIDTH,
            labelStyle:{
              fill: 'black',
              fontSize: '0.2rem'
            }
          },
        },
      };
    });

    setSteps(data)
    if (activeStep.key !== index) {
      setActiveStep(steps[index])
      goToLog(steps[index].id)
    }
    else { 
      setActiveStep({}) 
      clearInteraction()
    }
  }

  
  return (
    <CompassWheelContainer >
      <CSTitle gridArea="title">
        <span>Compass Steps</span>  
      </CSTitle>
      <CompassWheel color={activeStep.defaultColor}>
        {
          options.series && (
            // <ReactApexChart 
            //   options={options} 
            //   type="donut" 
            //   series={options.series}
            //   width="100%"
            //   height="110%"
            // />
            <PieChart
              label={({ data, dataIndex }) => data[dataIndex].title }
              labelPosition={70}
              labelStyle={{
                fill: 'white',
                fontSize: '20%',
                fontWeight: "550"
              }}
              lineWidth={60}
              data={steps}
              segmentsStyle={{ transition: 'stroke .3s' }}
              onClick={onClick}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              animate
            />
          )
        }
      </CompassWheel>
    </CompassWheelContainer >
  )
};
