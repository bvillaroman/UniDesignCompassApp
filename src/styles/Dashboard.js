import React from "react"
import styled from "styled-components"
import { Box, Button, Grid, Accordion, AccordionPanel, Text, Tabs, Tab } from "grommet"
import { AddCircle, FormPreviousLink } from 'grommet-icons';

// Dashboard
export const DashboardContainer = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  overflow: auto;
`;
export const DashboardGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  // margin-bottom: 3rem;
`;
export const DashboardTabs= styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  button div {
    border-color: transparent;
  }
`;
export const DashboardTab= styled(Box)`
  width: 100%;
  height: 100%;
`;
export const DashboardButton = styled(Button)`
  transition: all 0.3s;
  max-width: 11rem;
  padding: 0.5rem;
  border: 0.1rem solid #5567FD;
  border-radius: 2rem;
  background-color: #5567FD;
  color: white;
  align-self: auto;
  svg { 
    stroke: white;
    background: transparent;
  }
  :hover {
    transition: all 0.3s;
    background-color: white;
    color: #5567FD;
    svg {
      transition: all 0.3s;
      stroke: #5567FD; 
      background: transparent;
    }
  }
`;

export const Header = styled(Box)`
  padding: 0 2rem;
  color: black;
  min-height: 4rem;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.1rem solid rgba(0,0,0,0.1);
  margin-top: 1rem;
  width: 100%;
`;
export const Title = styled.p`
  color: black;
  font-weight: 500;
  font-size: 3rem;
  margin: 0;
`;
export const Feed = styled(Box)`
  color: black;
  height: 90%;
  overflow: auto;
  padding: 2rem;
  section {
    height: 100%;
    overflow: scroll;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

// Compass Form Info
export const CompassFormTabs = styled(Box)`
  height: auto;
  width: 100%;
  margin: 1rem auto;
`
export const CompassFormTab = styled(Box)`
  width: 100%;
  margin: 0 auto;
`

// compass type
export const CompassTypeFeed = styled(Box)`
  // min-height: 30rem;
  height: 100%;
  overflow: auto;
  color: black;
  section {
    height: 100%;
    overflow: auto;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
export const CompassCard = styled(Box)`
  margin: 0.5rem;
  padding: 1rem 2rem;
  width: 25rem;
  height: 20rem;
  border 0.1rem solid #5567FD;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CompassCardTitle = styled(Box)`
  width: 100%;
  min-height: 2rem;
  height: 20%;
  color: black;
  font-weight: 600;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
`;

export const CompassCardDetails = styled(Box)`
  height: 80%;
  min-height: 14rem;
  width: 100%!important;
  color: black;
  font-weight: 600;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
`;
export const CompassCircle = styled(Box)`
  min-width: ${props => props.size ? `${props.size}rem` : '12rem'};
  min-height: ${props => props.size ? `${props.size}rem` : '8rem'};
  width: 40%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`
export const StepContainer = styled(Box)`
  border: 0.15rem solid ${props => props.color ? props.color : '#5567FD'};
  border-radius: 50%;
  transition: all 0.3s;
  top: 38%;
  left: 35%;
  background-color: ${props => props.color ? props.color : '#5567FD'};
  list-style: none;
	height: 3.0rem;
  width: 3.0rem;
  display: block;
	position: absolute;
  transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength*0.6}rem) rotate(-${props.rotateAngle}deg)` || 'none'};
`
export const StepText = styled(Box)`
  padding: 1rem;
  color: black; 
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  word-break: break-all;
  p {
    margin: 0;
  }
`
export const CompassButtonContainer = styled(Box)`
  min-width: 10rem;
  min-height: 8rem;
  width: 40%;
  height: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const CompassButtonLink = styled(Button)`
  font-size: 1rem;
  width: 100%;
  height: auto;  
  padding: 0.5rem 1rem;
  color: black;
  border: 0.1rem solid #5567FD;
`

// Review Components
export const ReviewCard = styled(Box)`
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  background-color: white;
  border: 0.1rem solid ;
  border-radius: 1rem;
  color: white;
  display: flex;
  flex-direction: row;
`;
export const ReviewDetails = styled(Box)`
  height: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ReviewTitle= styled(Text)`
  color: black;
  font-weight: 600;
  font-size: 2rem;
`
export const ReviewDescription= styled(Box)`
  color: black;
`
export const ReviewStepsView = styled(Accordion)`
  overflow: scroll;
  height: 100%;
`

export const ReviewStepPanel = styled(AccordionPanel)`
  font-size: 0.5rem;
  padding: 0.5rem;
  background-color: ${props => props.color ? props.color : 'black'};
  color: white;
  border-radius: 1rem;
  width: 80%;
  margin: 0.1rem auto;
  word-break: break-all;
`
export const ReviewStepDescription = styled(Box)`
  font-size: 1.5rem;
  line-height: 1.6rem;
  height: auto;
  padding: 2rem 1rem;
  background-color: white;
  color: black;
  border-radius: 1rem;
  width: 80%;
  margin: 0.1rem auto;
  word-break: break-word;
`
export const SubmitCompassButton = styled(Button)`
  background-color: white;
  border: 0.1rem solid #5567FD;
  border-radius: 1rem;
  color: black;
  padding: 0.1rem 1rem;
  align-self: center;
  margin: 0 auto;
`

export const AddCompass = ({onClick}) =>(
  <DashboardButton     
    onClick={e => onClick()} 
    icon={(<AddCircle color="#5567FD"/>)}
    label="New Project"
    alignSelf="end"
  />
)

export const BackButton = ({onClick}) =>(
  <DashboardButton     
    onClick={e => onClick()} 
    icon={(<FormPreviousLink color="#5567FD"/>)}
    style={{float: 'left'}}
    // label="Add Compass"
  />
)

export const ProjectCard = styled(Grid)`
  margin: 1rem;
  padding: 2rem;
  width: 25rem;
  height: 20rem;
  background-color: white;
  border-radius: 1rem;
  color: white;
`;

export const CompassTitle= styled(Text)`
  color: black;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.1rem;
`
export const CompassDescription= styled(Text)`
  color: black;
  padding: 0 2rem;
  font-weight: 400;
  font-size: 1.2rem;
  overflow: scroll;
`
export const GoToCompassButton = styled(Button)`
  background-color: white;
  border: 0.1rem solid #5567FD;
  border-radius: 1rem;
  color: black;
  padding: 0.1rem 1rem;
  align-self: center;
  margin: 0 auto;
`