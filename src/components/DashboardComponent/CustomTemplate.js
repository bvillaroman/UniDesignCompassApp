import React, { useContext } from 'react';
import { ReviewModalContext } from "../../context/ReviewModal/context";
import styled from "styled-components";
import CustomCompass from './Logos/CustomCompass-1.jpg';

export default (props) => {
  const { updateShowModal } = useContext(ReviewModalContext)

  const goToReview = (event) => {
    return updateShowModal(true)
  };

  return (
    <TemplateContainer onClick={goToReview} className="custom-template-help">
      <ProjectTypeDetails>
        <img src={CustomCompass} alt="source: Cliparts.co CustomCompass-1" style={{ maxWidth: '5.1em' }} />
      </ProjectTypeDetails>
      <CompassCardTitle>Custom Compass: <br /> Solo or Team Design</CompassCardTitle>
    </TemplateContainer>
  )
}

export const TemplateContainer = styled.div`
  padding: 0 1rem;
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 123.188px;
  @media (max-width: 767px){
    padding: 0;
  }
`;
export const ProjectTypeDetails = styled.div`
  cursor: pointer;
  height: 9rem;
  width: 100%!important;
  color: black;
  font-weight: 600;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  background: white;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;
export const CompassCardTitle = styled.div`
  width: 100%;
  height: 1rem;
  color: black;
  font-weight: 530;
  font-size: 0.8rem;
  text-align: center;
  
`;
