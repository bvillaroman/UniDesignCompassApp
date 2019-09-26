import styled from "styled-components"
import { 
  Button, 
  Box, 
  Grid,
  Text
} from "grommet"
import React from "react";
import ReactApexChart from 'react-apexcharts';


// Pie chart elements
export const PieChartContainer = styled(Box)`
  width: ${ props => props.container === "overall" ? '95%' : '65%' };
  height: auto;
  margin : 1rem auto;
`;

export const PieChartComponent = styled(ReactApexChart)`
`;


// Grids and Containers
export const AnalyticsGrid = styled(Grid)`
  height: 100%;
  width: 100%;
`;

export const SelectedArea = styled(Box)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`

export const OverallArea = styled(Box)`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  background-color: white;
`

export const TimeLineContainer = styled(Box)`
  // padding: 2rem;
  // display: flex;
  // flex-direction: column;
  // height: 100%;
  // overflow: auto;
`

export const ContainerHeader = styled(Box)`
  width: 100%;
  height: 2.1rem;
` 

export const HeaderText = styled(Text)`
  font-weight: 600;
  font-size: 2rem;
` 

