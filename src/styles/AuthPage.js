import styled from "styled-components"
import { Button, Box, FormField, Text} from "grommet"

export const AuthSwitchButton = styled(Text)`
  color: white;
  text-decoration: underline;
  padding-left: 0.5rem;
  height: auto;
`;

export const AuthSwitchLabel = styled(Text)`
  color: white;
  width: auto;
  height: auto;
`;

export const Input = styled(FormField)`
  // font-weight: 500;
  background-color: white;
  color: #5361FF;
`;
export const AuthCard = styled(Box)`
  color: white;
  background-color: #2A3664;
  margin: 0 auto;
  width: 60%;
`;
export const AuthFormContainer = styled(Box)`
  width: 60%;
  margin: 1.5rem auto;
`;
export const AuthFormTitle = styled(Text)`
  margin: 0 auto;
  padding: 2rem 0 3rem 0;
  font-size: 3rem;
  font-weight: 900;
`;
export const AuthSwitchContainer = styled(Box)`
  color: white;
  background-color: #2A3664;
  margin: 0 auto;
  padding: 2rem 0 1rem;
  text-align: center;
`;