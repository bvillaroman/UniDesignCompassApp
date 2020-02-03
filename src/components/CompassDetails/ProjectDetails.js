import React, { useContext, useEffect, useState } from "react";
import {
  ProjectDetailsTitleContainer,
  ProjectDetailsTitle,
  ProjectDetailsDescription,
  EditProjectButton,
  // ProjectTitleText,
  ProjectDescriptionText,
  ProjectEditButtons,
  ProjectDetailsStepContainer,
  CompassDetailsDescription,
  CompassStepAccordion
} from "../../styles/CompassPage"
import {
  InputContainer,
  InputField,
  InputTextArea
} from "../../styles/Form"
import { CompassContext } from "../../context/CompassPage/context"
import { updateCompass } from "../../utils/mutations"
import { Edit } from 'grommet-icons';
import StepDetails from "./StepDetails"

export default (props) => {
  const { compass } = useContext(CompassContext)
  const [title, setTitle] = useState("Compass Details")
  const [description, setDescription] = useState(" ")
  const [steps, setSteps] = useState([])
  const [edit, setEdit] = useState(false)
  const [errors, setErrors] = useState({
    title: '',
    description: '',
  })
  const [message, setMessage] = useState("")

  const onChange = event => {
    const { target: { value, name } } = event;
    if (name === "title") setTitle(value)
    else setDescription(value)
    setErrors('')
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
    if (compass.hasOwnProperty("id")) {
      const name = compass.name_of_compass.charAt(0).toUpperCase() + compass.name_of_compass.slice(1);
      setTitle(name)
      const desc = compass.description_of_compass.charAt(0).toUpperCase() + compass.description_of_compass.slice(1);
      setDescription(desc)

      setSteps(compass.steps.items)
    }
  }, [compass])

  return (
    <>
      <ProjectDetailsTitleContainer>
        {/* <ProjectDetailsTitle > 
        <span>{compass.name_of_compass}</span>
        <EditProjectButton label="Edit" icon={<Edit/>} onClick={e => setEdit(!edit)} />
      </ProjectDetailsTitle> */}
        {
          edit ? (
            <form
              onSubmit={submitForm}
              onChange={onChange}
              value={{ title, description }}
              errors={{ ...errors }}
            >
              <ProjectDetailsTitle >
                <InputContainer name="title" >
                  <InputField name="title" value={title} />
                </InputContainer>
                <EditProjectButton label="Edit" icon={<Edit />} onClick={e => setEdit(!edit)} />
              </ProjectDetailsTitle>
              <InputContainer name="description">
                <InputTextArea name="description" value={description} />
              </InputContainer>
              <ProjectEditButtons>
                <span> {message} </span>
                <EditProjectButton label="Save" onClick={submitForm} />
              </ProjectEditButtons>
            </form>
          ) : (
              <>
                <ProjectDetailsTitle >
                  <span>{compass.name_of_compass}</span>
                  <EditProjectButton label="Edit" icon={<Edit />} onClick={e => setEdit(!edit)} />
                </ProjectDetailsTitle>
                <ProjectDetailsDescription>
                  <ProjectDescriptionText> {description} </ProjectDescriptionText>
                </ProjectDetailsDescription>
              </>
            )
        }
        {/* <ProjectDetailsTitle> 
        <span> {compass.compassType} </span> 
      </ProjectDetailsTitle>
      <CompassDetailsDescription>
        <CompassStepAccordion>
          { steps && steps.map(step => (<StepDetails step={step} />)) }
        </CompassStepAccordion> 
      </CompassDetailsDescription> */}

      </ProjectDetailsTitleContainer>

      <ProjectDetailsStepContainer>
        <ProjectDetailsTitle>
          <span> {compass.compassType.charAt(0).toUpperCase() + compass.compassType.slice(1)} </span>
        </ProjectDetailsTitle>
        <CompassDetailsDescription>
          <CompassStepAccordion>
            {steps && steps.map(step => (<StepDetails step={step} />))}
          </CompassStepAccordion>
        </CompassDetailsDescription>
      </ProjectDetailsStepContainer>
    </>
  )
};