import React from "react"
import styled from "styled-components"
import { Box, Button, Grid, Tabs,Text} from "grommet"
import { AddCircle, FormPreviousLink } from 'grommet-icons';

export const DashboardContainer = styled(Box)`
  width: 90vw;
`;
export const DashboardGrid = styled(Grid)`
  padding: 1rem;
  width: 100%;
  min-width: 95vw;
`;
export const Header = styled(Box)`
  color: black;
  min-height: 5rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-self: ${props => props.End ? 'end' : 'auto'}
`;
export const Divider = styled(Box)`
  min-height: 1rem;
  border-top: 0.1rem solid rgba(0,0,0,0.1);
`;
export const Title = styled.p`
  color: #5567FD;
  font-weight: 500;
  font-size: 3rem;
  margin: 0;
`;
export const Feed = styled(Box)`
  min-height: 10rem;
  color: black;
`;

export const DashboardButton = styled(Button)`
  transition: all 0.3s;
  max-width: 11rem;
  padding: 0.2rem;
  border: 0.1rem solid #5567FD;
  border-radius: 2rem;
  background-color: #5567FD;
  color: white;
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
  />
)
export const FormHeader = styled(Box)`
  display: inline;
  color: black;
  text-align: center;
`;

export const BackButton = ({onClick}) =>(
  <DashboardButton     
    onClick={e => onClick()} 
    icon={(<FormPreviousLink color="#5567FD"/>)}
    style={{float: 'left'}}
    // label="Add Compass"
  />
)

export const CompassCard = styled(Box)`
  margin: 0 auto;
  padding: 2rem;
  width: 80%;
  background-color: #5567FD;
  color: white;
`;

export const CompassLabel = styled(Text)`
  color: black;
  font-weight: 500;
  font-size: 2rem;
`
