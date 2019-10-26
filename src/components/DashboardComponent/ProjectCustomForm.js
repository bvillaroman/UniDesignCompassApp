import React, { useState, useContext } from 'react';
import { DashbordContext, DashboardContext } from "../../context/DashboardPage/context"

const CustomCompassForm = () => {
  const { updateCompassSteps } = useContext(DashboardContext);
  const blankStep = { title: '', description: '', color: '' }
  const [step, setStep] = useState([
    { ...blankStep }
  ]);

  const addStep = () => {
    setStep([...step, { ...blankStep }]);
  }

  const handleStepChange = (e) => {
    const updatedSteps = [...step];
    updatedSteps[e.target.dataset.idx][e.target.className] = e.target.value;
    setStep(updatedSteps);
  };

  const CustomStepSubmit = (e) => {
    e.preventDefault()
    console.log(step)

  }

  return (
    <form onSubmit={CustomStepSubmit}>
      <label htmlFor="description">Custom Type</label>
      <input
        type="button"
        value="Add New Step"
        onClick={addStep}
      />
      {
        step.map((val, idx) => {
          const titleId = `name_of_step-${idx}`;
          const descriptionId = `description_of_step-${idx}`;
          const colorId = `color-${idx}`

          return (
            <div key={`step-${idx}`}>
              <label htmlFor={titleId}>{`Step #${idx + 1}`}</label>
              <input
                type="text"
                title={titleId}
                data-idx={idx}
                id={titleId}
                className="title"
                value={step[idx].title}
                onChange={handleStepChange}
              />
              <label htmlFor={descriptionId}>Description</label>
              <input
                type="text"
                description={descriptionId}
                data-idx={idx}
                id={descriptionId}
                className="description"
                value={step[idx].description}
                onChange={handleStepChange}
              />
              <select
                type="text"
                color={colorId}
                data-idx={idx}
                id={colorId}
                className="color"
                value={step[idx].color}
                onChange={handleStepChange}>
                <option>Red</option>
                <option>Blue</option>
                <option>DarkBlue</option>
                <option>Purple</option>
                <option>Grey</option>
                <option>Magenta</option>
                <option>Cyan</option>
                <option>Orange</option>
                <option>Green</option>
                <option>Olive</option>
                <option>Maroon</option>
              </select>
            </div>
          );
        })
      }
      <input type="submit" value="Submit" />
    </form>


  )
}

export default CustomCompassForm;