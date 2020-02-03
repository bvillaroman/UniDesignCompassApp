import React, { useState, useContext } from 'react';
import { GlobalContext } from "../../context/context";
import { ReviewModalContext } from "../../context/ReviewModal/context"
import { createCompass, createStep, createSession } from "../../utils/mutations";
import { dateFormatter } from "../../utils/translateTime"
import { navigate } from "gatsby";
import {
  CustomStepsForm,
  CustomStepsHeaderContainer,
  CustomStepsHeader,
  CustomStepsLabel,
  CustomStepsButton,
  CustomStepsInput,
  CustomStepsSelect,
  CustomStepsOption,
  CustomStepsDiv,
  CustomStepsDiv2,
  CustomStepsDiv3,
  CustomStepsRemoveButton
} from "../../styles/CustomSteps"
import {
  LayerView,
  CloseButton,
  ReviewLogTitle,
  ReviewLogHeader,
  ReviewLogContainer
} from "../../styles/Modals"

import { AddCircle, FormClose } from 'grommet-icons';

const CustomCompassForm = (props) => {
  const { user } = useContext(GlobalContext);
  const { updateShowModal } = useContext(ReviewModalContext);

  const [compassTitle, setCompassTitle] = useState('')

  const blankStep = { title: '', description: '', color: '#5361FE' }
  const [steps, setSteps] = useState([
    { ...blankStep }
  ]);

  const addStep = () => {
    setSteps([...steps, { ...blankStep }]);
  }

  const handleStepChange = (e) => {
    const updatedSteps = [...steps];
    updatedSteps[e.target.dataset.idx][e.target.name] = e.target.value;
    setSteps(updatedSteps);
  };

  const CustomStepSubmit = (e) => {
    e.preventDefault()
    console.log(steps)

    if (steps.length <= 1 || steps.description === "" || steps.title === "") {
      alert('Please enter more than 1 step')
    }
    else {
      steps.map(step => {
        if (step.description === "" || step.title === "") {
          return alert("Title or Description cannot be empty")
        }
      })
      createCompass(compassTitle, "-", "default", user.id, user.id)
        .then(res => {
          steps.forEach((step, key) =>
            createStep(step.title, step.description, step.color, res.data.createCompass.id, key)
          )

          const today = new Date();
          const hour = today.getHours()
          const minute = today.getMinutes()

          createSession(`Session on ${dateFormatter(today)} at ${hour % 12}:${minute} ${hour >= 12 ? "p.m." : "a.m."}`, " ", res.data.createCompass.id)
            .then((result) => {
              navigate(`/Compass/?c=${res.data.createCompass.id}`)
            })
            .catch(err => {
              console.log(err)
              props.setLoading(false)
            })

          updateShowModal(false)
          navigate(`/Compass/?c=${res.data.createCompass.id}`)
        })
        .catch(err => console.log(err))
    }
  }

  const handleRemove = (e, idx) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(idx, 1);
    setSteps(updatedSteps)
  }

  const closeWindow = () => {
    updateShowModal(false);
  }

  const buttonDisabled = steps.length <= 1 || steps.filter(step => (step.description === "" || step.title === "")).length > 0

  return (
    <LayerView
      onEsc={closeWindow}
      onClickOutside={closeWindow}
    >
      <ReviewLogContainer>
        <ReviewLogHeader>
          <ReviewLogTitle> Custom Project </ReviewLogTitle>
          <CloseButton onClick={closeWindow} />
        </ReviewLogHeader>
        <CustomStepsForm onSubmit={CustomStepSubmit}>
          <CustomStepsHeaderContainer>
            <CustomStepsHeader placeholder="Compass Title" value={compassTitle} onChange={e => { setCompassTitle(e.target.value) }} />
            <CustomStepsButton
              label="Add New Step"
              onClick={addStep}
              icon={<AddCircle />}
            />
          </CustomStepsHeaderContainer>
          {
            steps.map((val, idx) => {
              const titleId = `name_of_step-${idx}`;
              const descriptionId = `description_of_step-${idx}`;
              const colorId = `color-${idx}`

              return (
                <CustomStepsDiv key={`step-${idx}`}>
                  <CustomStepsDiv2>
                    <CustomStepsLabel htmlFor={titleId}>{`Step #${idx + 1}`}</CustomStepsLabel>
                    <CustomStepsInput
                      placeholder="Step Title..."
                      type="text"
                      title={titleId}
                      data-idx={idx}
                      id={titleId}
                      name="title"
                      value={steps[idx].title}
                      onChange={handleStepChange}
                    />
                    <CustomStepsSelect
                      type="text"
                      color={colorId}
                      data-idx={idx}
                      id={colorId}
                      name="color"
                      value={steps[idx].color}
                      onChange={handleStepChange}>
                      <CustomStepsOption>Blue</CustomStepsOption>
                      <CustomStepsOption>Turquoise</CustomStepsOption>
                      <CustomStepsOption>Lavender</CustomStepsOption>
                      <CustomStepsOption>Purple</CustomStepsOption>
                      <CustomStepsOption>Teal</CustomStepsOption>
                      <CustomStepsOption>Pink</CustomStepsOption>
                      <CustomStepsOption>Yellow</CustomStepsOption>
                    </CustomStepsSelect>
                    <CustomStepsRemoveButton onClick={() => handleRemove(idx)} icon={<FormClose />} />
                  </CustomStepsDiv2>
                  <CustomStepsDiv3>
                    <CustomStepsLabel htmlFor={descriptionId}>Description</CustomStepsLabel>
                    <CustomStepsInput
                      placeholder="Step Description..."
                      type="text"
                      description={descriptionId}
                      data-idx={idx}
                      id={descriptionId}
                      name="description"
                      value={steps[idx].description}
                      onChange={handleStepChange}
                    />
                  </CustomStepsDiv3>

                </CustomStepsDiv>

              );
            })
          }
          <CustomStepsButton type="submit" label="Submit" value="Submit" disabled={buttonDisabled} />
        </CustomStepsForm>
      </ReviewLogContainer>
    </LayerView>
  )
}

export default CustomCompassForm;