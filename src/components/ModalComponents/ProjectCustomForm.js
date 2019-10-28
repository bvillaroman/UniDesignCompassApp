import React, { useState, useContext } from 'react';
import { GlobalContext } from "../../context/context";
import {ReviewModalContext} from "../../context/ReviewModal/context"
import { createCompass, createStep } from "../../utils/mutations";
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
  CustomStepsDiv3
} from "../../styles/CustomSteps"
import { 
  LayerView, 
  CloseButton,
  ReviewLogTitle,
  ReviewLogHeader,
  ReviewLogContainer
} from "../../styles/Modals"

import { AddCircle } from 'grommet-icons';

const CustomCompassForm = () => {
  const { user } = useContext(GlobalContext);
  const { updateShowModal } = useContext(ReviewModalContext);

  const blankStep = { title: '', description: '', color: '#5361FE' }
  const [step, setStep] = useState([
    { ...blankStep }
  ]);

  const addStep = () => {
    setStep([...step, { ...blankStep }]);
  }

  const handleStepChange = (e) => {
    const updatedSteps = [...step];
    updatedSteps[e.target.dataset.idx][e.target.name] = e.target.value;
    setStep(updatedSteps);
  };

  const CustomStepSubmit = (e) => {
    e.preventDefault()
    console.log(step)

    createCompass("Untitled", "-", "default", [user.email], [])
      .then(res => {
        step.forEach((step, key) =>
          createStep(step.title, step.description, step.color, res.data.createCompass.id)
        )
        updateShowModal(false)
        navigate(`/Compass?c=${res.data.createCompass.id}`)
      })
      .catch(err => console.log(err))
  }

  const closeWindow = () => {
    updateShowModal(false);
  }

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
            <CustomStepsHeader placeholder="Compass Title"/>
            <CustomStepsButton
              label="Add New Step"
              onClick={addStep}
              icon={<AddCircle />}
            />
          </CustomStepsHeaderContainer>
          {
            step.map((val, idx) => {
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
                      value={step[idx].title}
                      onChange={handleStepChange}
                    />
                    <CustomStepsSelect
                      type="text"
                      color={colorId}
                      data-idx={idx}
                      id={colorId}
                      name="color"
                      value={step[idx].color}
                      onChange={handleStepChange}>
                      <CustomStepsOption>#5361FE</CustomStepsOption>
                      <CustomStepsOption>#99EDCC</CustomStepsOption>
                      <CustomStepsOption>#9D96B8</CustomStepsOption>
                      <CustomStepsOption>#8D6A9F</CustomStepsOption>
                      <CustomStepsOption>#03F7EB</CustomStepsOption>
                    </CustomStepsSelect>
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
                      value={step[idx].description}
                      onChange={handleStepChange}
                    />
                  </CustomStepsDiv3>

                </CustomStepsDiv>

              );
            })
          }
          <CustomStepsButton type="submit" label="Submit" value="Submit" />
        </CustomStepsForm>
      </ReviewLogContainer>
    </LayerView>
  )
}

export default CustomCompassForm;