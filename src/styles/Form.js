import styled from "styled-components"
import { Box, FormField, Text, TextInput, TextArea} from "grommet"

export const FormCard = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: auto;
  // min-width: 22rem;
  padding: 2rem;
  border-radius: 2rem;
  width: 80%;
  color: black;
  background: white;
`;
export const FormContainer = styled(Box)`
  width: 80%;
  margin: 0 auto;
`;
export const FormTitle = styled(Text)`
  margin: 0 auto;
  padding-bottom: 2rem;;
  font-size: 2rem;
  font-weight: 900;
  color: #5361FE;
`;
export const FormSwitchContainer = styled(Box)`
  margin: 1rem auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;
export const FormSwitchButton = styled(Text)`
  color: #2A3664;;
  text-decoration: underline;
  cursor: pointer;
  height: auto;
  font-size: 25%;
`;
export const FormSwitchLabel = styled(Text)`
  color: #2A3664;
  font-size: 25%;
`;
export const FormErrorLabel = styled(Text)`
  color: #E74C3C;
  font-size: 30%;
  text-align: center;
  margin: 0 auto;
  img {
    width: 3rem;
    height: 3rem;
  }
`;
export const InputTextArea = styled(TextArea)`
  font-size: 1rem;
  resize: none;
  height: 100%;
  min-height: 15rem;
  color: black;
  border: 0.01rem solid grey;
`;
export const InputContainer = styled(FormField)`
  border-bottom: none;
  color: black;
  background-color: #F0F0F0;
`;
export const InputField = styled(TextInput)`
  font-weight: 550;
  font-size: 1rem;
  padding-top: 1rem;
  color: black;
`;
