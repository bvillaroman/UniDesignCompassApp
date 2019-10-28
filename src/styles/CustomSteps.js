import styled from 'styled-components';
import { Button } from 'grommet';

export const CustomStepsForm = styled.form`
  width: fit-content;
  margin: 1em;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  background: white;
  padding: 1em;
  //overflow: auto;
`;

export const CustomStepsHeader = styled.label`
  color: black;
  font-weight: 500;
  margin: 0;
  font-size: 2.5rem;
  line-height: 2.6rem;
  margin: 0;
  padding: 0;
`;

export const CustomStepsLabel = styled.label`
  margin-right: 0.5em;
  margin-left: 0.5em;
`;

export const CustomStepsButton = styled(Button)`
  svg {
    transition: all 0.3s;
    fill: white; 
    stroke: white;
    height: 1.2rem;
    width: 1.2rem;
  }
  background: #5567FD;
  color: white;
  padding: 0.3rem 0.5rem;
  margin: 0;
  font-size: 0.9rem;
  float: right;
  //margin-bottom: -1em;
  
`;

export const CustomStepsInput = styled.input`
  border: none;
  border-bottom: 2px solid #f4f6f9;
  font-size: large;
  width: 50%
`;

export const CustomStepsSelect = styled.select`
  background: #0563af;
  color: #fff;
  //padding: 1em;
  //width: 2em;
  height: 5em
  // border: none;
  // font-size: 1em;
  // box-shadow: 0 5px 25px rgba(0, 0, 0, .5);
  // outline: none;
  min-width: max-content;
`;

export const CustomStepsOption = styled.option`
  
`;

export const CustomStepsDiv = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
