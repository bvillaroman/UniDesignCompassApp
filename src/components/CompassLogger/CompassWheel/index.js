import React, { useState,useEffect, useContext } from "react";
import styled from "styled-components"
import { SectionHeader } from "../style"

import { CompassContext } from "../../../context/CompassPage/context"
import Step from "./Step"

export const Wheel = (props) => {
  const { session, interactions } = useContext(CompassContext)
  const [steps,setSteps] = useState([])

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

  
  return (
    <CompassWheelContainer >
      <SectionHeader>
        <span>Compass Steps</span>  
      </SectionHeader>
      <CompassWheel >
        {
          steps.length &&  steps.map((item,key) => {
            return (
              <Step 
                activeStep={item} 
                key={key} 
                circleLength={steps.length}
                rotateAngle={key*(360/(steps.length))}
              />
            )
          })
        }
      </CompassWheel>
    </CompassWheelContainer >
  )
};

export default Wheel;


export const CompassWheelContainer = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  background: transparent;
  position: relative;
  margin-top: 1rem;
`;

export const CSTitle = styled.div`
  width: 100%;
  min-height: 2.0rem;
  font-size: 2rem;
  line-height: 2.2rem;
  font-weight: 600;
  text-align: left;
  padding-left: 1.5rem;
  @media (max-width: 767px){
    min-height:3rem;
    font-size: 3rem;
    font-height: 3.3rem;
  }  
`;

export const CompassWheel = styled.div`
  position: relative;
  width: 100%;
  height: 19rem;
  @media (max-width: 767px){
    height: 35rem;
  }  
  margin: 0 auto;
`;