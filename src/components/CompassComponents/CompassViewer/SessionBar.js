import React,{useContext} from "react";
import { 
  CompassDetailsContainer, 
  CompassDetailsTitle, 
  CompassDetailsDescription,
} from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"

export default (props) => {
  const {compass} = useContext(CompassContext)

  return (
    <CompassDetailsContainer>
      <CompassDetailsTitle >
        {compass.name_of_compass} 
      </CompassDetailsTitle>
      <CompassDetailsDescription >
        {compass.description_of_compass} 
      </CompassDetailsDescription>
    </CompassDetailsContainer>
  ) 
};