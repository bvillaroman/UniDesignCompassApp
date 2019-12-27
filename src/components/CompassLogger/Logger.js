import React, {useState, useEffect, useContext}  from "react";
import { 
  LoggerGrid,
  LoggerTitle,
  LoggerInput, 
  LoggerHeader,
  StepClock,
  TimerButton,
} from "../../styles/CompassPage"
import translateTime from '../../utils/translateTime'
import * as Mutation from '../../utils/mutations'
import { CompassContext } from "../../context/CompassPage/context"

const Logger = (props) => {
  const {interaction,updateInteraction} = useContext(CompassContext);

  const intialStep = {
    name_of_step: "Logger",
    color: "black",
  };

  const [step, setStep] = useState(intialStep);
  const [interactionTime,setInteractionTime] = useState(0);
  const [log, setLog] = useState('');
  const [start,setStart] = useState(false);

  // intialize interaction into the logger
  useEffect(() => {
    if(interaction.id){
      const {log_content, duration, step} = interaction
      const parsedLog = log_content !== " " ? log_content : ""
      setInteractionTime(duration)
      setStep(step)
      setLog(parsedLog)
      setStart(true)
    }

  // eslint-disable-next-line
  }, [interaction.id])

  // handle interaction time
  useEffect(() => {
    let interval = null;

    if (interaction.hasOwnProperty("id")){
      if (start) {
        interval = setInterval(() => {
          updateInteraction({ duration: interactionTime+1 })
          setInteractionTime(interactionTime+1)
        }, 1000)

      } else if (!start) {
        clearInterval(interval)
      }
      return () => clearInterval(interval);
    }
    
  // eslint-disable-next-line
  }, [start,interactionTime, interaction])
  
  // pause the timer
  const pause = (e) => {
    const newInteraction = {
      id: interaction.id,
      log_content: log ? log : " ",
      duration: interactionTime,
    }
    if (start) {
      Mutation.updateInteraction(newInteraction)
    }
    
    return setStart(!start)
  }

  return (
    <LoggerGrid>
      <LoggerHeader>
        <LoggerTitle color={step.color}>
          {step.name_of_step} 
        </LoggerTitle>
        {
          step.hasOwnProperty("id") && (
            <StepClock >
              {translateTime(interactionTime)}
              <TimerButton color={step.color} onClick={pause} start={start}/>
            </StepClock>
          )
        }
      </LoggerHeader>
      <LoggerInput
        placeholder="Enter Log"
        value={log}
        onChange={event => setLog(event.target.value)}
        color={step.color}
        disabled={!start}
      />
    </LoggerGrid>
  );
}

export default Logger;