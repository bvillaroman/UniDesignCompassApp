import React,{useContext,useEffect, useState} from "react";
import { 
  ProjectDetailsContainer, 
  ProjectDetailsTitle, 
  ProjectDetailsDescription,
  EditProjectButton,
  ProjectTitleText,
  ProjectDescriptionText,
  ProjectEditButtons,
  CompassDetailsDescription,
  CompassStepAccordion,
  CompassStepPanel,
  CompassStepDescription
} from "../../../styles/CompassPage"
import {
  InputContainer,
  InputField,
  InputTextArea
} from "../../../styles/Form"
import { CompassContext } from "../../../context/CompassPage/context"
import { updateCompass } from "../../../utils/mutations"
import { Edit } from 'grommet-icons';
import StepDetails from "./StepDetails"

export default (props) => {
  const {compass} = useContext(CompassContext)
  const [title, setTitle] = useState("Compass Details")
  const [description, setDescription] = useState(" ")
  const [steps, setSteps] = useState([])
  const [edit, setEdit] = useState(false)
  const [errors] = useState({
    title: '',
    description: '',
  })
  const [message, setMessage] = useState("")
  const [error,setError] = useState("")

  const onChange = event => {
    const { target: { value, name } } = event;
    if(name === "title") setTitle(value)
    else setDescription(value)
    setError('')
    setMessage('')
  };

  const submitForm = (e) => {
    updateCompass(compass.id, title, description)
    .then((res) => {
      setMessage("Saved!")
    }).catch(err => {
      setMessage(err.message)
    })
  }

  useEffect(() => {
    if(compass.hasOwnProperty("id")){
      const name = compass.name_of_compass.charAt(0).toUpperCase() + compass.name_of_compass.slice(1);
      setTitle(name)
      const desc = compass.description_of_compass.charAt(0).toUpperCase() + compass.description_of_compass.slice(1) ;
      setDescription(desc)

      setSteps(compass.steps.items)
    }  
  }, [compass])
  
  return (
    <ProjectDetailsContainer>
      <ProjectDetailsTitle > 
        <span>Project Details</span>
      <EditProjectButton label="Edit" icon={<Edit/>} onClick={e => setEdit(!edit)} />
      </ProjectDetailsTitle>
      { 
        edit ? (        
          <form
            onSubmit={submitForm}
            onChange={onChange}
            value={{title,description}}
            errors={{ ...errors }}
          >
            <InputContainer name="title">
              <InputField name="title" value={title} />
            </InputContainer>
            <InputContainer name="description">
              <InputTextArea name="description" value={description} />
            </InputContainer>
            <ProjectEditButtons>
              <span> {message} </span>
              <EditProjectButton label="Save" onClick={submitForm} />
            </ProjectEditButtons>
          </form>
        ) : (
          <ProjectDetailsDescription>
            <ProjectTitleText>{title}</ProjectTitleText>
            <ProjectDescriptionText> {description} </ProjectDescriptionText>
          </ProjectDetailsDescription>
        )
      }
      <ProjectDetailsTitle> 
        <span> Compass Details</span> 
      </ProjectDetailsTitle>
      
      {/* compass details */}
      <CompassDetailsDescription>
        <CompassStepAccordion>
          { steps && steps.map(step => (<StepDetails step={step} />)) }
        </CompassStepAccordion> 
      </CompassDetailsDescription>
        
    </ProjectDetailsContainer>
  ) 
};