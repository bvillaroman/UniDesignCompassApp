import React from "react"
import styled from "styled-components"
import { Box, Button, Grid, Accordion, AccordionPanel, Text, TextInput } from "grommet"
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
export const DashboardTabs = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  button div {
    border-color: transparent;
  }
`;
export const DashboardTab = styled(Box)`
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
  width: 100%;
  margin: 0.5rem auto;
  min-height: 17rem;
  overflow: auto;
  color: black;
  section {
    height: 100%;
    overflow: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
export const CompassCard = styled(Box)`
  margin: 0.5rem;
  padding: 1rem;
  height: 16rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;

export const CompassCardTitle = styled(Box)`
  width: 100%;
  min-height: 2rem;
  height: 20%;
  color: black;
  font-weight: 550;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
`;

export const CompassCardDetails = styled(Box)`
  height: 80%;
  min-height: 10rem;
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
  top: 35%;
  left: 40%;
  background-color: ${props => props.color ? props.color : '#5567FD'};
  list-style: none;
	height: 2.8rem;
  width: 2.8rem;
  display: block;
	position: absolute;
  transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength * 0.5}rem) rotate(-${props.rotateAngle}deg)` || 'none'};
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

// Permissions Components
export const PermissionsCard = styled(Box)`
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
export const PermissionsDetails = styled(Box)`
  height: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const PermissionsTitle = styled(Text)`
  color: black;
  font-weight: 600;
  font-size: 2rem;
`
export const PermissionsForm = styled(Box)`
  color: black;
`
export const GoToReviewButton = styled(Button)`
  background-color: white;
  border: 0.1rem solid #5567FD;
  border-radius: 1rem;
  color: black;
  padding: 0.1rem 1rem;
  align-self: center;
  margin: 0 auto;
`
export const PermissionsInputs = styled(Box)`
  width: 100%;
  color: black;
  marigin: 1rem auto;
`

export const PermissionInput = styled(TextInput)`
  width: 100%;
  height: 1.8rem;
  padding: 0 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
  border-radius: 0.2rem;
  border: 2px solid #d4d5d6;
  color: #565656;
  -webkit-appearance: none;

  :focus {
    border-color: #5567FD;
    outline: none;
  }
`
export const PermissionItem = styled(Box)`
  width: 100%;
  height: 2rem;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  border: 2px solid #5567FD;
  color: white;
  background: #5567FD;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button { 
    color: white;
    background: transparent;
    border: none;
    font-size: 1.5rem;
  }
`
export const PermissionError = styled(Text)`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  color: tomato-red;
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
export const ReviewTitle = styled(Text)`
  color: black;
  font-weight: 600;
  font-size: 2rem;
`
export const ReviewDescription = styled(Box)`
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

export const AddCompass = ({ onClick }) => (
  <DashboardButton
    onClick={e => onClick()}
    icon={(<AddCircle color="#5567FD" />)}
    label="New Project"
    alignSelf="end"
  />
)

export const BackButton = ({ onClick }) => (
  <DashboardButton
    onClick={e => onClick()}
    icon={(<FormPreviousLink color="#5567FD" />)}
    style={{ float: 'left' }}
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

export const CompassTitle = styled(Text)`
  color: black;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.1rem;
`
export const CompassDescription = styled(Text)`
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