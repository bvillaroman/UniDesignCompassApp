import styled from "styled-components";
import {Button} from "grommet"

const GlobalButton = styled(Button)`
  background: #5567FD; 
  color: white;
  padding: 0.3rem 0.5rem;
  margin: 0;
  font-size: 0.9rem;
  transition: all 0.15s ease-in;
  &&& :hover {
    background: white; 
    color: #5567FD; 
    border: 1px solid #5567FD;
  }
`

export {
  GlobalButton
}