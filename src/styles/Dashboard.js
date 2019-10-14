import styled from "styled-components"
import { Box, Button, Grid, Accordion, AccordionPanel, Text, TextInput } from "grommet"

// Dashboard Containers
export const DashboardContainer = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 2rem;
`;
export const Header = styled(Box)`
  color: black;
  min-height: 2.5rem;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.1rem solid rgba(0,0,0,0.1);
  width: 100%;
`;
export const Title = styled.p`
  color: black;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
`;
export const InfoText = styled.p`
  color: black;
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
`;
export const DashboardSectionHeader = styled(Box)`
  width: 100%;
  min-height: 1.3rem;
  margin: 0.5rem auto;
  color: black;
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: left;
  align-items: center;
`;

// Project Type
export const ProjectTypeFeedContainer = styled(Box)`
  width: 100%;
  min-height: 15.6rem;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem 2rem;
`;

export const ProjectTypeFeed = styled(Box)`
  width: 100%;
  min-height: 12rem;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const TemplateContainer = styled(Box)`
  padding: 0 1rem;
  width: 9.5rem;
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProjectTypeDetails = styled(Box)`
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
export const CompassCardTitle = styled(Box)`
  width: 100%;
  height: 1rem;
  color: black;
  font-weight: 450;
  font-size: 0.9rem;
  text-align: center;
  
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
  top: 40%;
  left: 26%;
  background-color: ${props => props.color ? props.color : '#5567FD'};
  list-style: none;
	height: 1.5rem;
  width: 1.5rem;
  display: block;
	position: absolute;
  transform: ${props => `rotate(${props.rotateAngle}deg) translate(${props.circleLength * 0.3}rem) rotate(-${props.rotateAngle}deg)` || 'none'};
`
// Project Feed details

export const ProjectFeedContainer = styled(Box)`
  color: black;
  width: 100%;
  height: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
`;
export const ProjectFeedHeader = styled(Box)`
  padding: .5rem 0;
  width: 100%;
  min-height: 1.5rem;
  background-color: none;
  flex-direction: row;
  div {
    font-size: 1.0rem;
    font-weight: 4500;
    color: rgba(0,0,0,0.6);
  }
  border-bottom: 0.05rem solid rgba(0,0,0,0.1);
`;
export const Feed = styled(Box)`
  color: black;
  width: 100%;
  height: 100%;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
`;
export const ProjectCard = styled(Box)`
  padding: 1rem 0;
  width: 100%;
  min-height: 4rem;
  background-color: none;
  flex-direction: row;
  // transition: all 0.2s;
  :hover {
    cursor: pointer;
    // transition: all 0.2s;
    background-color: white;
    box-shadow: 0 1px 3px 0 #d2d4d6;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
    border-radius: 0.5rem;
  }
`;
export const CompassTitle = styled(Box)`
  color: black;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.1rem;
  width: 30%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 2rem;
`
export const CompassDescription = styled(Box)`
  color: rgba(0,0,0,0.8);
  font-weight: 400;
  padding: 0 2rem;
  font-size: 0.9rem;
  width: 40%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
export const CompassDate = styled(Box)`
  padding: 0 2rem;
  font-size: 0.9rem;
  color: rgba(0,0,0,0.8);
  width: 30%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: end;
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
