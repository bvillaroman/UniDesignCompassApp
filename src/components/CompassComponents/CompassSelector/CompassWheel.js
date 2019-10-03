import React, { useState,useEffect } from "react";
import { 
  StepRow, 
  CSMain,
  CSTitle
} from "../../../styles/CompassPage"
import Step from "./Step"

const CompassWheel = ({compassSteps = [],interactions = [], selectStep}) => {
  const [steps,setSteps] = useState([])

  useEffect(() => {
    if (compassSteps.length) {
      // assign values for compassSteps with starting duration 0
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
    
  }, [compassSteps, interactions])


  // const translateTime = (secs) => {
  //   const sec_num = parseInt(secs, 10)
  //   const hours   = Math.floor(sec_num / 3600)
  //   const minutes = Math.floor(sec_num / 60) % 60
  //   const seconds = sec_num % 60

  //   return [hours,minutes,seconds]
  //     .map(v => v < 10 ? "0" + v : v)
  //     .filter((v,i) => v !== "00" || i > 0)
  //     .join(":") 
  // }

  return (
    <CSMain 
      gridArea="main"
      rows={['3rem', '30rem']}
      columns={['15rem', 'fill']}
      fill
      areas={[
        { name: 'title', start: [0, 0], end: [0, 1] },
        { name: 'content', start: [0, 1], end: [1, 1] },
      ]}
    >
      <CSTitle gridArea="title">
        <span>Compass Steps</span>  
      </CSTitle>
      <StepRow gridArea="content" circleLength={compassSteps.length}>
        {
          steps.length > 0 ? steps.map((item,key) => {
            return (
              <Step 
                activeStep={item} 
                key={key} 
                selectStep={selectStep} 
                circleLength={compassSteps.length}
                rotateAngle={key*(360/(compassSteps.length))}
              />
            )
          }) : ''
        }
      </StepRow>
    </CSMain>
  )
};
export default CompassWheel;
