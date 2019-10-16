import styled from 'styled-components';

export const LegendContainer = styled.div`
  width: fit-content;
  margin: 0;
  padding: 0; 
  background-color: white;

  @media (max-width: 376px){
    width: 100%
  }
`;

export const UlContainer = styled.ul`
  list-style: none;
  padding: 2em;
  text-align: left;
  margin: 0;

  @media (max-width: 376px){
    list-style: none;
    padding: 1em;
    text-align: center;
    margin: 0;
    display: block;
  }
`;

export const Title = styled.li`
  color: black;
  font-weight: 900;
`;

export const Challenge = styled.li`
  //background: #3498db;
  color: #3498db;
  font-weight: 400;
`;

export const Ideas = styled.li`
//background: #9b59b6;
  color: #9b59b6;
  font-weight: 400;
`;

export const Model = styled.li`
//background: #f1c40f;
  color: #f1c40f;
  font-weight: 400;
`;

export const Revise = styled.li`
//background: #e74c3c;
  color: #e74c3c;
  font-weight: 400;
`;

export const Prototype = styled.li`
//background: #e67e22;
  color: #e67e22;
  font-weight: 400;
`;

export const Research = styled.li`
//background: #2ecc71;
  color: #2ecc71;
  font-weight: 400;
`;

export const Reflect = styled.li`
//background: #7f8c8d;
  color: #7f8c8d;
  font-weight: 400;
`;