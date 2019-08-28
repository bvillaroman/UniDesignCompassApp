import styled from "styled-components"
import { Box, FormField, Text, TextInput} from "grommet"

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
  color: #5361FE;
  background-color: transparent;
`;

export const InputField = styled(TextInput)`
  font-weight: 550;
  font-size: 1rem;
  padding-top: 1rem;
  color: black;
`;

export const AuthCard = styled(Box)`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0 auto;
  width: 90%;
  min-width: 22rem;
`;
export const AuthFormContainer = styled(Box)`
  width: 80%;
  margin: 0 auto;
`;
export const AuthFormTitle = styled(Text)`
  margin: 0 auto;
  padding: 0;
  font-size: 2rem;
  font-weight: 900;
  color: #5361FE;
`;
export const AuthSwitchContainer = styled(Box)`
  color: white;
  margin: 0 auto;
  padding: 2rem 0 1rem;
  text-align: center;
`;