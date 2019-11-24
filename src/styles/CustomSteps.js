import styled from 'styled-components';
import { Button, TextInput } from 'grommet';

export const CustomStepsForm = styled.form`
  width: 70%;
  margin: 0 auto;
  // box-shadow: 0 1px 3px 0 #d2d4d6;
  background: white;
  padding: 1em;
`;

export const CustomStepsHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CustomStepsHeader = styled(TextInput)`
  width: 60%;
  color: black;
  font-weight: 500;
  margin: 0;
  font-size: 2.0rem;
  line-height: 2.1rem;
  margin: 0;
  padding: 0.5rem;
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
  width: 40%;
  
`;

export const CustomStepsInput = styled.input`
  border: none;
  border-bottom: 2px solid #f4f6f9;
  font-size: large;
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
  margin: 0.5rem auto;
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const CustomStepsDiv2 = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem auto;
`;

export const CustomStepsDiv3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-right: 6em;
  margin: 0.5rem auto;
`;

export const CustomStepsRemoveButton = styled(Button)`
  padding: 0;
`;