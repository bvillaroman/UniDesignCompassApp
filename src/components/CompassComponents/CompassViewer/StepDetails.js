import React, {useState, useEffect}  from "react";
import { StepDetailsContainer, StepDetailsTitle, StepDetailsDescription } from "../../../styles/CompassPage"

export default ({step}) => {
  const [title, setTitle] = useState("Compass Step")
  const [color, setColor] = useState("black")
  const [description, setDescription] = useState("palce")
  useEffect(() => {
    if(step.hasOwnProperty("title")){ 
      setTitle(step.title)
      setColor(step.color)
      setDescription(step.description)
    }

  }, [step])

  return (
    <StepDetailsContainer>
      <StepDetailsTitle color={color}>{title} </StepDetailsTitle>
      <StepDetailsDescription>{description} </StepDetailsDescription>
    </StepDetailsContainer>
)};

