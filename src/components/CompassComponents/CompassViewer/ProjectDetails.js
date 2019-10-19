import React,{useContext,useEffect, useState} from "react";
import { 
  ProjectDetailsContainer, 
  ProjectDetailsTitle, 
  CompassDetailsDescription,
} from "../../../styles/CompassPage"
import { CompassContext } from "../../../context/CompassPage/context"
import { Compass } from 'grommet-icons';

export default (props) => {
  const {compass} = useContext(CompassContext)
  const [title, setTitle] = useState("Compass Details")
  const [description, setDescription] = useState(" ")
  const [steps, setSteps] = useState([])

  useEffect(() => {
    if(compass.hasOwnProperty("id")){
      const name = compass.name_of_compass.charAt(0).toUpperCase() + compass.name_of_compass.slice(1);
      setTitle(name)
      const desc = compass.description_of_compass.length > 2 ? compass.description_of_compass.charAt(0).toUpperCase() + compass.description_of_compass.slice(1) : " ";
      setDescription(desc)

      setSteps(compass.steps.items)
    }  
  }, [compass])
  
  return (
    <ProjectDetailsContainer>
      {/* <div> Project </div> */}
      <ProjectDetailsTitle >
        {title} 
      </ProjectDetailsTitle>
      <CompassDetailsDescription >
        {description} 
      </CompassDetailsDescription>

      {/* <div> Compass </div>

      <ProjectDetailsTitle >
        Compass Type
      </ProjectDetailsTitle>
      <CompassDetailsDescription >
        {
          steps && steps.map(step => (
            <div>
              <div> {step.name_of_step}</div>
              <div> {step.description_of_step}</div>
            </div> 
          )
        ) }
      </CompassDetailsDescription> */}
    </ProjectDetailsContainer>

  ) 
};