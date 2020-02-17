import styled from 'styled-components';
import { Button } from 'grommet';

export const PermissionHeader = styled.div`
  text-align: left;
  //padding-left: 0.5rem;
  margin: 0 auto;
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
  margin-bottom: 0.5em;
`;

export const PermissionContainer = styled.div`
  background: white;
  padding: 1em;
  margin: 1em;
  height: fit-content;

  @media (max-width: 767px){
    margin: 0rem;
    width: 90%
  } 
`;

export const PermissionForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PermissionAdmin = styled.div`

`;

export const PermissionReader = styled.div`
  
`;

export const PermissionAdminInput = styled.input`
  border: none;
  border-bottom: 2px solid #f4f6f9;
  font-size: large;
  margin-left: 0.9em;
`;

export const PermissionReaderInput = styled.input`
    border: none;
    border-bottom: 2px solid #f4f6f9;
    font-size: large;
`;

export const PermissionAdminButton = styled(Button)`

`;

export const PermissionReaderButton = styled(Button)`

`;

export const PermissionAdminLabel = styled.label`

`;

export const PermissionReaderLabel = styled.label`

`;

export const PermissionKey = styled.div`

`;

export const PermissionSubmit = styled(Button)`
  background: #5567FD;
  color: white;
  padding: 0.3rem 0.5rem;
  margin: 0;
  font-size: 0.9rem;
`;

export const PermissionButton = styled(Button)` 
  align-self: flex-end;
`;

export const PermissionLabel = styled.label`

`;

export const PermissionInput = styled.input`

`;