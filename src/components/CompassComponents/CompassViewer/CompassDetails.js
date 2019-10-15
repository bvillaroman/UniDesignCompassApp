import React,{useContext,useEffect, useState} from "react";
import { 
  CompassDetailsContainer, 
  CompassDetailsTitle, 
  CompassDetailsDescription,
} from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import { Compass } from 'grommet-icons';

export default (props) => {
  const {compass} = useContext(CompassContext)
  const [title, setTitle] = useState("Compass Details")
  const [description, setDescription] = useState(" ")

  useEffect(() => {
    if(compass.hasOwnProperty("id")){
      const name = compass.name_of_compass.charAt(0).toUpperCase() + compass.name_of_compass.slice(1);
      setTitle(name)
      const desc = compass.description_of_compass.length > 2 ? compass.description_of_compass.charAt(0).toUpperCase() + compass.description_of_compass.slice(1) : " ";
      setDescription(desc)
    }  
  }, [compass])
  
  return (
    <CompassDetailsContainer>
      <Compass />
      <CompassDetailsTitle >
        {title} 
      </CompassDetailsTitle>
      <CompassDetailsDescription >
        {description} 
      </CompassDetailsDescription>
    </CompassDetailsContainer>
  ) 
};