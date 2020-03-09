import React, { useContext } from "react";
import styled from "styled-components"
import { LinkNext } from "grommet-icons"
import { navigate } from "gatsby"

import {timeFormatter} from "../../../utils/translateTime"
import { CompassContext } from "../../../context/CompassPage/context"

const Interaction = (props) => {
  const { compass, session} = useContext(CompassContext);

  const { id, createdAt } = props.interaction;

  const openReviewLog = async (evt) => {
    evt.preventDefault()
    // clicking addInteraction when 
    navigate(`/Logger/?c=${compass.id}&s=${session.id}&i=${id}`)
  }

  return (
    <InteractionContainer className="recent-steps-help">
      <InteractionButtonContainer>
        <InteractionButton onClick={openReviewLog}/>
        <span>{timeFormatter(createdAt)}</span>
      </InteractionButtonContainer>

      {!props.isLastStep && <LinkNext color="#5567FD" />}
    </InteractionContainer>


  )
};
export default Interaction;

const InteractionContainer = styled.div`
  margin: 0 0.5rem;
  min-width: 6rem;
  min-height: 7rem;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  svg {
    margin-bottom: 1rem;
  }
`;
const InteractionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  span {
    font-size: 0.8rem;
  }
`;
const InteractionButton = styled.div`
  color: black; 
  height: 5rem;
  width: 1rem;
  background-color: black;
  margin: 0 auto;
`;
