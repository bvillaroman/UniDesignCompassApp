import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import { Button, TextArea } from "grommet"
import { Edit } from 'grommet-icons';

import * as Mutation from '../../../utils/mutations'
import { CompassContext } from "../../../context/CompassPage/context"
import { LoggerHeaderText, LoggerHeaderContainer } from "../style"
import { Loader } from "../../../styles/layout"

export const EditingLogger = (props) => {
  const { interaction, updateInteraction, interactionUpdated } = useContext(CompassContext);

  const intialStep = {
    name_of_step: "Notes",
    color: "black",
  };

  const [step, setStep] = useState(intialStep);
  const [log, setLog] = useState('');
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  // place a past interaction into the logger if it is updateInteraction is called
  useEffect(() => {

    if (interaction.id && interactionUpdated) {
      const { log_content, step } = interaction
      const parsedLog = log_content !== " " ? log_content : ""  
      setStep(step)
      setLog(parsedLog)
      setEdit(true);
      props.setLoading(false)     
    }

    // eslint-disable-next-line
  }, [updateInteraction, interactionUpdated])


  const editLog = (e) => {
    setLoading(true);
    const newInteraction = {
      id: interaction.id,
      log_content: log ? log : " "
    }
    if(interaction.log_content !== log){
      Mutation.updateInteraction(newInteraction)
      .then(() => {
        setLoading(false)
        setEdit(true)
      })
    } else {
      setLoading(false)
      setEdit(true)
    }
    
  }

  return (
    <>
      <LoggerHeaderContainer height="69px">
        <LoggerHeaderText><LoggerTitle color={step.color}>{step.name_of_step}</LoggerTitle> </LoggerHeaderText>
        <StepClock>        
          {
            (props.loading || loading) ? <Loader/> : (  /* if it is saveable */
              edit ? <EditLogButton color={step.color} onClick={ e => setEdit(false) } /> : <SaveButton onClick={editLog} color={step.color} label="Save" /> 
            )
          }
        </StepClock>
      </LoggerHeaderContainer>
      <LoggerInput
        placeholder={step.name_of_step !== "Notes" ? "Enter Log" : "Select a log or create a new log."}
        value={log}
        onChange={event => setLog(event.target.value)}
        color={step.color}
        disabled={edit}
      />
    </>
  );
}

export default EditingLogger;

const LoggerTitle = styled.span`
  align-self: center;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  margin-left: 0.2rem;
  margin-right: 1rem;
  width: 50%;
  color: ${props => props.color ? props.color : '#5567FD'};
  line-height: 1.3rem;
  text-align: left;
  font-weight: 600;
`
const LoggerInput = styled(TextArea)`
  margin-top: 0.5rem;
  border-color: black;
  resize: none;
  min-height: 7rem;
  font-size: 0.8rem;
  font-weight: 400;
  
`;
const StepClock = styled.div`
  height: 4rem;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 500;
`

const EditLogButtonStyle = styled(Button)`
  svg {
    color: white
  }
  background: transparent;
  color: black;
  border-color: ${props => props.color ? props.color : '#5567FD'};
  padding: 0.3rem .5rem;
  font-weight: 500;
  font-size: 1rem;
  width: 8rem;
  :hover {
    background: white;
  }
`
const SaveButton = styled(EditLogButtonStyle)`
  width: 5rem;
`
export const EditLogButton = ({ onClick,color }) => (
  <EditLogButtonStyle
    onClick={onClick}
    icon={<Edit color={color ? color : '#5567FD'} />}
    label="Edit Log"
    color={color}
  />
)