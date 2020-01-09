import React, { useContext, useEffect, useRef, useState } from "react";

import styled from "styled-components"

import Interaction from "./interaction"
import { CompassContext } from "../../../context/CompassPage/context"

const Interactions = (props) => {
  const { interactions, newestInteraction, interaction } = useContext(CompassContext)
  const EndRef = useRef(null);

  const [canScroll, setCanScroll] = useState(true)
  const scrollToRight = () => {
    EndRef.current.scrollIntoView({ behavior: "smooth", inline: "end"});
    setCanScroll(false)
  };

  useEffect( () => {
    if(newestInteraction.id === interaction.id && canScroll){
      scrollToRight()      
    } else {
      setCanScroll(true)
    }
    
    // eslint-disable-next-line
  }, [newestInteraction.id, interaction.id]);

  
  // getting the current session
  return (
    <InteractionsContainer >
      <InteractionsTitle> Recent Entries </InteractionsTitle>
      <InteractionsFeed >
        {
          interactions ? interactions.map((item, key) => {
            if (item.step) {
              return (
                <Interaction
                  key={key}
                  interaction={item}
                  isLastStep={key === 0}
                  setLoading={props.setLoading}
                />
              )
            }
            return ''
          }
          ).reverse() : <p>There are no logs!</p>          
        }
        <LastRef ref={EndRef} />
      </InteractionsFeed>
    </InteractionsContainer>
  )
};

export default Interactions;

export const LastRef = styled.div`
  
`;

// InteractionFeed 
const InteractionsContainer = styled.div`
  width: auto;
  min-height: 11rem;
  margin: 1rem 0;
`;
const InteractionsTitle = styled.div`
  text-align: left;
  font-size: 2rem;
  font-weight: 600;
  width: auto;
  padding-left: 1.5rem;
  margin: 0.5rem auto;
  min-height: 1.3rem;
`;
const InteractionsFeed = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap; 
  min-height: 8.5rem;
  padding: 1rem;
`;