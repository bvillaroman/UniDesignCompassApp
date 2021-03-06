import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import { navigate } from "gatsby"

import { LoggerHeaderText, LoggerHeaderContainer, LoggerHeaderButtonContainer } from "../style"

import { CompassContext } from "../../../context/CompassPage/context"
import { GlobalContext } from "../../../context/context"
import { createSession } from '../../../utils/mutations'
import { dateFormatter } from "../../../utils/translateTime"
import BreakModal from "../../../components/ModalComponents/BreakModal"

import PauseButton from "./pause"
import Step from "./Step"

export const Wheel = (props) => {
  const { compass, session, interactions } = useContext(CompassContext)
  const { user } = useContext(GlobalContext)

  const scribe = compass.scribe.email === user.email

  const [steps, setSteps] = useState([])
  const [pause, setPause] = useState({})
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (session.hasOwnProperty("compass")) {
      const compassSteps = session.compass.steps.items.flat().sort((a, b) => (a.index) - b.index)
      let arr = compassSteps.map((step, key) => ({
        id: step.id,
        key,
        name_of_step: step.name_of_step,
        color: step.color,
        defaultColor: step.color,
        duration: 0,
        title: step.name_of_step,
        value: 100 / compassSteps.length
      })
      );

      setPause(arr[0])
      arr.shift()
      
      arr.forEach(step => {

        let temp = interactions.filter(interaction => interaction.step && (interaction.step.id === step.id))

        const value = temp.reduce((totalTime = 0, interaction) => parseInt(totalTime) + parseInt(interaction.duration), 0)
        step.duration = value
      })

      setSteps(arr)
    }
  }, [session, interactions])

  const onBreak = (e) => {

    const today = new Date();
    const hour = today.getHours()
    const minute = today.getMinutes()

    createSession(`Session on ${dateFormatter(today)} at ${hour < 13 ? hour : hour % 12}:${minute < 10 ? `0${minute}` : minute} ${hour > 12 ? "p.m." : "a.m."}`, " ", compass.id)
      .then((result) => {
        navigate(`/Logger/?c=${compass.id}&s=${result.data.createSession.id}`)
      })
      .catch(err => console.log(err))
  }

  return (
    <CompassWheelContainer >
      <CSTitle>
        <LoggerHeaderContainer>
          <LoggerHeaderText>{compass.name_of_compass}</LoggerHeaderText>

          {/* <LoggerHeaderButtonContainer >
            {scribe ? <BreakModal show={show} setShow={setShow} onClick={onBreak}/> : ""}
          </LoggerHeaderButtonContainer> */}
        </LoggerHeaderContainer>

      </CSTitle>
      <CompassWheel className="compass-wheel-help">
        {
          pause.hasOwnProperty("id") && (
            <PauseButton 
              activeStep={pause}
              index={0}
              setLoading={props.setLoading}
            />
          )
        }
        {
          steps.length && steps.map((item, key) => {
            return (
              <Step
                activeStep={item}
                index={item.index}
                key={key}
                circleLength={steps.length}
                rotateAngle={((key + Math.ceil(steps.length / 2)) * (360 / (steps.length))) + 90}
                setLoading={props.setLoading}
              />
            )
          })
        }
      </CompassWheel>
    </CompassWheelContainer >
  )
};

export default Wheel;


export const CompassWheelContainer = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  background: transparent;
  position: relative;
`;

export const CSTitle = styled.div`  
  width: 95%;
  margin: 1rem auto;
  margin-bottom: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  transition: box-shadow 150ms ease;
`;

export const CompassWheel = styled.div`
  position: relative;
  width: 100%;
  height: 20.5rem;
  @media (max-width: 767px){ height: 40rem;}  
  @media (max-width: 650px){ height: 38rem; }  
  @media (max-width: 550px){ height: 33rem; } 
  @media (max-width: 475px){ height: 30rem; }  
  @media (max-width: 413px){ height: 28rem; }   
  @media (max-width: 370px){ height: 24rem; }    
  margin: 0 auto;
`;