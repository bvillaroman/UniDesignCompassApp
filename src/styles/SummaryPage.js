// import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TableBody
} from 'grommet';


export const SummaryTitle = styled.h4`
  padding: 0;
  margin: 0; 
  display: inline-block;
  margin: auto;
  font-size:xx-large;
`;

export const SummaryListButton = styled(Button)`
  float: right;
  color: black;
  padding: initial;
  width: 15%;
  transition: all 0.3s;
  border: 0.15rem solid #5567FD;
  background-color:#5567FD;
  color: white; 
  svg {
    transition: all 0.3s;
    fill: white; 
    stroke: white; 
  }
  margin: 0 auto;
`;

export const SummaryLogBox = styled.div`
  width: 70%; 
  height: 85%;
  border-radius: 10px; 
  border-color: black; 
  border-style: solid; 
  margin-top: 0.5em;
  padding: 0.5em;
  overflow: auto;
  
`;

export const SingleSummaryLog = styled.h4`
  margin: 0;
  padding; 0.5em;
  font-weight: 400;
`;

export const LogAttachments = styled.h6`
  margin: 0;
  padding: 0;
  margin-left: 0.5em;
  float: left;
  margin-right: 0.5em;
`;

export const SummaryTable = styled(Table)`
  //display: block;
  overflow: auto;
  width:100%;
  table-layout: fixed;
`;

export const SummaryTableHeader = styled(TableHeader)`
  font-weight: bold;
  border-bottom: solid 1.5px;
  width: 20%;
`;

export const SummaryTableBody = styled(TableBody)`
  overflow: auto;
`;

export const SummaryTableRow = styled(TableRow)`
  // td {}
`;

export const SummaryTableCell = styled(TableCell)`
`;

export const SummaryTableCellHeader = styled(TableCell)`
  scope: col; 
  border: bottom;
  size: large;
`;

export const SummaryTableCellBody = styled(TableCell)`
  scope: "row"; 
  border: "bottom";
  border-bottom: solid 1px;
  background-color: ${props => props.color ? props.color : "transparent"};
`;

export const SummaryTdBody = styled.td`
  border-bottom: solid 1px;
  background-color: ${props => props.color ? props.color : "transparent"};
`;

export const SummaryLogHeader = styled.div`

`;

export const SummaryTableConatiner = styled.div`
  width: 100%;
  display: block;
  overflow: auto;
`;

export const SummaryContainer = styled.div`
  padding: 2em;
  width: 100%;
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: row;
`;

export const TextArea = styled.textarea`
  height: 90%;
  width: 85%;
  float: right; 
  //margin-top: 1em; 
  padding-left: 0.5em;
  border-radius: 10px; 
  margin-left: 1em;
  font-size: 20px;
`;

export const CommentButton = styled(Button)`
  width: 90%;
  margin-left 2.4em;
  transition: all 0.3s;
  border: 0.15rem solid #5567FD;
  background-color:#5567FD;
  color: white; 
  svg {
    transition: all 0.3s;
    fill: white; 
    stroke: white; 
  }
  border-radius: 1em;
  margin-top: 0.5em;
`;

export const SummaryMainView = styled.div`
  overflow: auto;
  width: 80%; 
  margin-top: 1em;
  margin-Left: 1em; 
  margin-bottom: 1em;
  border: outset;
`;

export const SummaryTdHeader = styled.td`
  text-align: center;
  font-size: 1.4em;
`;