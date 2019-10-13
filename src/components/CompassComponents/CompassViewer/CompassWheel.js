import React, { useState,useEffect, useContext } from "react";
import { CompassContext } from "../../../context/CompassPage/context"
import { 
  StepRow, 
  CompassWheelContainer,
} from "../../../styles/CompassPage"
import Step from "./Step"

const CompassWheel = ({ selectStep }) => {
  const { compass } = useContext(CompassContext)
  const [steps,setSteps] = useState([])

  useEffect(() => {
    if(compass.hasOwnProperty("id")){
      const compassSteps = compass.steps.items.flat();
      let arr = compassSteps.map((step) => ({
          description: step.description_of_step,
          title: step.name_of_step,
          color: step.color,
        })
      );
      setSteps(arr)
    }
  }, [compass])

  return (
    <CompassWheelContainer >
      <StepRow gridArea="content" circleLength={steps.length}>
        {
          steps.length > 0 ? steps.map((item,key) => {
            return (
              <Step 
                activeStep={item} 
                key={key} 
                selectStep={selectStep} 
                circleLength={steps.length}
                rotateAngle={key*(360/(steps.length))}
              />
            )
          }) : ''
        }
      </StepRow>
    </CompassWheelContainer>
  )
};
export default CompassWheel;
