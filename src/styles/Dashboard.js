import React from "react"
import styled from "styled-components"
import { Box, Button, Grid, Accordion, AccordionPanel, Text, Tabs, Tab } from "grommet"
import { AddCircle, FormPreviousLink } from 'grommet-icons';

export const DashboardContainer = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`;
export const DashboardGrid = styled(Grid)`
  width: 100%;
  height: 100%;
`;
export const DashboardTabs= styled(Tabs)`
  width: 100%;
  height: 100%;
  button div {
    border-color: transparent;
  }
`;
export const DashboardTab= styled(Tab)`
  width: 100%;
  height: 100%;
`;
export const Header = styled(Box)`
  padding: 0 2rem;
  color: black;
  min-height: 5rem;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.1rem solid rgba(0,0,0,0.1);
`;
export const Title = styled.p`
  color: black;
  font-weight: 500;
  font-size: 3rem;
  margin: 0;
`;
export const Feed = styled(Box)`
  color: black;
  height: 100%;
  overflow: scroll;
  padding: 0 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: repeat(100,minmax(14rem,1fr));
  grid-gap: 1rem;
  align-items:center;
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
export const AddCompass = ({onClick}) =>(
  <DashboardButton     
    onClick={e => onClick()} 
    icon={(<AddCircle color="#5567FD"/>)}
    label="Add Compass"
    alignSelf="end"
  />
)
export const FormHeader = styled(Box)`
  display: flex;
  color: black;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = ({onClick}) =>(
  <DashboardButton     
    onClick={e => onClick()} 
    icon={(<FormPreviousLink color="#5567FD"/>)}
    style={{float: 'left'}}
    // label="Add Compass"
  />
)
export const ReviewCard = styled(Grid)`
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  background-color: #5567FD;
  border-radius: 1rem;
  color: white;
`;

export const ReviewTitle= styled(Text)`
  color: black;
  font-weight: 600;
  font-size: 2rem;
`
export const ReviewDescription= styled(Text)`
  color: black;
  padding: 2rem;
  font-weight: 400;
  font-size: 1.2rem;
  overflow: scroll;
  // height: 100%;
`
export const ReviewStepsView = styled(Accordion)`
  overflow: scroll;
  height: 100%;
`

export const ReviewStepPanel = styled(AccordionPanel)`
  font-size: 0.5rem;
  padding: 0.5rem;
  background-color: white;
  color: black;
  border-radius: 1rem;
  // border: 0.01rem solid black;
  margin: 0.1rem auto;
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
export const CompassCard = styled(Box)`
  margin: 1rem auto;
  padding: 2rem;
  width: 20rem;
  height: auto;
  background-color: white;
  border-radius: 1rem;
  color: white;
`;
export const CompassTitle= styled(Text)`
  color: black;
  font-weight: 600;
  font-size: 2rem;
`
export const CompassDescription= styled(Text)`
  color: black;
  padding: 2rem;
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