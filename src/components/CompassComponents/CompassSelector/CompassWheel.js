import React, { useState,useEffect, useContext } from "react";
import { CompassContext } from "../../../context/CompassPage/context"
import { 
  StepRow, 
  CSMain,
  CSTitle,
  SessionClock,
  CompassWheelContainer,
  CompassWheel
} from "../../../styles/CompassPage"
import * as Mutation from "../../../utils/mutations"
import Step from "./Step"
import ReactApexChart from 'react-apexcharts';


export default ({ selectStep }) => {
  const {session, interactions, interaction = {},updateInteraction, time} = useContext(CompassContext)
  const [steps,setSteps] = useState([])
  const [options, setOptions]= useState({})

  useEffect(() => {
    if(session.hasOwnProperty("compass")){
      const compassSteps = session.compass.steps.items.flat();
      let arr = compassSteps.map((step) => ({
          id : step.id,
          name_of_step : step.name_of_step,
          color: step.color,
          duration: 0
        })
      );

      if (interactions.length) {
        interactions.forEach(item => {
          arr.find((step) => {
            if (step.id === item.step.id){
              step.duration = step.duration + item.duration
            }
          })
        })
      }

      setSteps(arr)

    }
  }, [session,interactions])

  const goToLog = async (id) => {
    // if(interaction.hasOwnProperty("id")){
    //   console.log("from compassWheel: ",interaction)
    //   // await Mutation.updateInteraction(interaction);
    //   updateInteraction(interaction)
    // }
    const newInteraction = await Mutation.startInteraction(session.id,id);
    selectStep(newInteraction.data.createInteraction);   
  }

  useEffect(() => {
    if(steps !== []) {
      setOptions({
        labels: steps.map(step => step.name_of_step),
        responsive: [{
          breakpoint: 480,
          options: {
            
          }
        }],
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
        chart: {
          events: {
            dataPointSelection: function(event, chartContext, config){
              goToLog(steps[config.dataPointIndex].id)
            }
          }
        },
        colors: steps.map(step => step.color),
        series: steps.map(step => Math.floor(100/steps.length) * 0.1)
      })
    }
  }, [steps])

  const translateTime = (secs) => {
    const sec_num = parseInt(secs, 10)
    const hours   = Math.floor(sec_num / 3600)
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60

    return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":") 
  }

  return (
    <CompassWheelContainer >
      <CSTitle gridArea="title">
        <span>Compass Steps</span>  
      </CSTitle>
      <CompassWheel >
        {
          options.series && (
            <ReactApexChart 
              options={options} 
              type="donut" 
              series={options.series}
            />
          )
        }
      </CompassWheel>
      
      {/* <StepRow gridArea="content" circleLength={steps.length}>
        <SessionClock> {translateTime(time)} </SessionClock>
        {
          steps.length > 0 ? steps.map((item,key) => {
            return (
              <Step 
                activeStep={item} 
                key={key} 
                selectStep={selectStep} 
                circleLength={steps.length}
                rotateAngle={key*(360/(steps.length))}
                session={session}
              />
            )
          }) : ''
        }
      </StepRow> */}
    </CompassWheelContainer >
  )
};
