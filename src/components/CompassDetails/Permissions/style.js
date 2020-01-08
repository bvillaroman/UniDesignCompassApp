import styled from "styled-components";
import { Button } from 'grommet';

export const PermissionContainer = styled.div`
  width: 80%;
  // height: 40.5%;
  height: 8rem;
  // margin-top: 1rem;
  // margin-left: 0.5rem;
  // margin-right: 0.5rem;
  // margin-bottom: 0.5rem;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  padding-bottom: 0;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  transition: box-shadow 150ms ease;

  @media (max-width: 767px){
    width: 100%;
  } 
`

export const PermissionHeaderBar = styled.div`
  display: flex;
`

export const PermissionHeader = styled.div`
  text-align: left;
  padding-left: 0.5rem;
  margin: 0 auto;
  width: 100%;
  height: auto;
  color: black;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PermissionFormContainer = styled.div`
  margin-top: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const PermissionForm = styled.form`
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Permissions = styled.div`
  margin-bottom: 0.5em;
  font-size: 1.2rem;
  padding-left: 1em;
  padding-right: 1em;
`

export const PermissionButton = styled(Button)`
svg {
  transition: all 0.3s;
  fill: white; 
  stroke: white;
  height: 1.2rem;
  width: 1.2rem;
}
background: #5567FD; 
color: white;
padding: 0.3rem 0.7rem;
margin: 0;
font-size: 0.9rem;
font-weight: 500;
float: right;
`

export const DeleteContainer = styled.div`
  padding: 0.7rem;
`