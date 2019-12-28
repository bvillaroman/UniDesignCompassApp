import React, {useState, useEffect}  from "react";
import { StepDetailsTitle, StepDetailsDescription } from "../../styles/CompassPage"

export default ({step}) => {
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("black")
  const [description, setDescription] = useState("")
  
  useEffect(() => {
    if(step.hasOwnProperty("id")){ 
      setTitle(step.name_of_step)
      setColor(step.color)
      setDescription(step.description_of_step)
    }

  }, [step])

  return (
      <StepDetailsTitle color={color} label={title}> 
        <StepDetailsDescription color={color} >{description} </StepDetailsDescription>
      </StepDetailsTitle>
)};

