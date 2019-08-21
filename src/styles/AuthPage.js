import styled from "styled-components"
import { Button, Box, FormField, Text, TextInput} from "grommet"

export const AuthSwitchButton = styled(Text)`
  color: #2A3664;;
  text-decoration: underline;
  cursor: pointer;
  padding-left: 0.5rem;
  height: auto;
`;

export const AuthSwitchLabel = styled(Text)`
  color: #2A3664;
  width: auto;
  height: auto;
`;

export const InputContainer = styled(FormField)`
  // font-weight: 500;
  color: #5361FE;
  background-color: transparent;
  // margin: 1rem auto;
`;

export const InputField = styled(TextInput)`
  font-weight: 550;
  font-size: 1rem;
  padding-top: 1.2rem;
  color: black;
`;

export const AuthCard = styled(Box)`
  color: white;
  background-color: transparent;
  margin: 0 auto;
  width: 70%;
`;
export const AuthFormContainer = styled(Box)`
  width: 80%;
  margin: 1.5rem auto;
`;
export const AuthFormTitle = styled(Text)`
  margin: 0 auto;
  padding: 2rem 0 3rem 0;
  font-size: 3rem;
  font-weight: 900;
  color: #5361FE;
`;
export const AuthSwitchContainer = styled(Box)`
  color: white;
  // background-color: #2A3664;
  margin: 0 auto;
  padding: 2rem 0 1rem;
  text-align: center;
`;