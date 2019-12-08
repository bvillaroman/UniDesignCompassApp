import React, { useState,useEffect, useContext } from "react";
import { CompassContext } from "../../../context/CompassPage/context"
import { 
  CSTitle,
  CompassWheelContainer,
  CompassWheel
} from "../../../styles/CompassPage"
import Step from "./Step"

export default (props) => {
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
      <CSTitle gridArea="title">
        <span>Compass Steps</span>  
      </CSTitle>
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
