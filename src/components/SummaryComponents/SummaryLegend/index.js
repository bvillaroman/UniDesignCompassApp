import React from 'react';
import {
  LegendContainer,
  UlContainer,
  Title,
  Challenge,
  Ideas,
  Model,
  Revise,
  Prototype,
  Research,
  Reflect
} from '../../../styles/Legend'

const SummaryLegend = () => {
  return (
    // <>
    <LegendContainer>
      <UlContainer>
        <Title>Legend</Title>
        <Challenge>Challenge</Challenge>
        <Ideas>Ideas</Ideas>
        <Model>Model</Model>
        <Revise>Revise</Revise>
        <Prototype>Prototype</Prototype>
        <Research>Research</Research>
        <Reflect>Reflect</Reflect>
      </UlContainer>
    </LegendContainer>
    // </>
  )
};

export default SummaryLegend;