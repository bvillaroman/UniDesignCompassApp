import React, { useContext  } from "react";
import styled from "styled-components"
import { Button, TextArea } from "grommet"
import { PauseFill, PlayFill, Edit } from 'grommet-icons';

import { CompassContext } from "../../../context/CompassPage/context"
// import { GlobalContext } from "../../../context/context"

import EditLogger from "./EditingLogger"
import ScribeLogger from "./ScribeLogger"

export const Logger = (props) => {
  // const { interactionAdded, compass} = useContext(CompassContext);
  const { interactionAdded, interactionUpdated } = useContext(CompassContext);
  // const { user } = useContext(GlobalContext)

  // const previousFooRef = useRef(newestInteraction);

  // const scribe = compass.scribe.email === user.email

  // const intialStep = {
  //   name_of_step: "Notes",
  //   color: "black",
  // };

  return (
    <LoggerGrid>
      { interactionAdded && <ScribeLogger setLoading={props.setLoading} loading={props.loading}/> }
      { interactionUpdated && <EditLogger setLoading={props.setLoading} loading={props.loading}/> }
    </LoggerGrid>
  );
}

export default Logger;

const LoggerGrid = styled.div`
  width: 90%;
  min-height: 4rem;
  height: auto;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`

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
const ControlButton = styled(Button)`
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  padding-right: 0;
  padding-left: 0.5rem;
`

export const TimerButton = ({ onClick, start, color }) => (
  <ControlButton
    onClick={e => onClick()}
    icon={start ? <PauseFill color={color ? color : '#5567FD'} /> : <PlayFill color={color ? color : '#5567FD'} />}
  />
)

const EditLogButtonStyle = styled(Button)`
  svg {
    color: white
  }
  background: transparent;
  color: black;
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
export const EditLogButton = ({ onClick }) => (
  <EditLogButtonStyle
    onClick={onClick}
    icon={<Edit color="#5567FD" />}
    label="Edit Log"
  />
)