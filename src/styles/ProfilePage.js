import React from "react"
import styled from 'styled-components';
import Button from 'grommet';

export const ProfileContainer = styled.div`
  display: flex; 
  flex-direction: column;
  padding: 1em;
  width: 100%;
  padding: 0 2rem;
`;

export const ProfileTitle = styled.h3`
  color: black;
  font-weight: 500;
  font-size: 1.5rem;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  margin: 0;
  border-bottom: 0.1rem solid rgba(0,0,0,0.1);
`;

export const FormContainter = styled.div`
  border: "line"
  display: block;

  margin: 1em;
  //width: 96%;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  background: white;
  padding: 1em;
`;

export const FormName = styled.form`
display: flex;
flex-direction: column;
`;

export const FormNameLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
  display: inline-block
  width: 5em;
`;

export const FormNameInput = styled.input`
  border: none;
  border-bottom: 2px solid #f4f6f9;
  font-size: large;
`;

export const NameButton = styled.button`
  color: black; 
  width: 16%;
  -webkit-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 0.15em solid #5567FD;
  background-color: #5567FD;
  color: white;
  //margin: 0 auto;
  float: left;
`;

export const FormPassword = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormPasswordLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
  display: inline-block
  width: 5em;
`;

export const FormPasswordInput = styled.input`
  border: none;
  border-bottom: 2px solid #f4f6f9;
  font-size: large;
`;

export const PasswordButton = styled.button`
  color: black;
  width: 16%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 0.15rem solid #5567FD;
  background-color: #5567FD;
  color: white;
  float: left;
`;