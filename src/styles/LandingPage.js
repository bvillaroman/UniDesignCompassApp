import styled from 'styled-components';
import { Box, Text } from 'grommet';
import { Link } from 'gatsby';

export const BoxWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  list-style-type: none;
`

export const BoxNav = styled(Box)`
  background: yellow;
  width: 100%;
  margin: 0;
`

export const BoxA = styled(Box)`
  background: red;
  flex: 0 0 50%;
  width: 50%;
`

export const BoxB = styled(Box)`
  background: orange;
  flex: 0 0 50%;
  width: 50%;
`

export const BoxC = styled(Box)`
  background: lightgreen;
  flex: 0 0 100%;
  width: 50%;
`

export const BoxAText = styled(Text)`
  margin: 0 auto;
  padding: 2rem 0 3rem 0;
  font-size: 3rem;
  font-weight: 900;
  color: #5361FE;
`

export const BoxBText = styled(Text)`
  margin: 0 auto;
  padding: 2rem 0 3rem 0;
  font-size: 3rem;
  font-weight: 900;
  color: #5361FE;
`

export const BoxNavText = styled(Text)`
  margin: 0; 
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
`
export const GatsbyLinks = styled(Link)`
  font-size: 1.0em;
  color: black;
  padding: 12px 0 8px 0;
  margin-left: auto;
  flex-direction: row;
`

export const LinkContainer = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-self: end;
  justify-content: space-between;
`

export const LogoBox = styled(Box)`
  font-size: 2rem;
  margin: 0;
  padding: 10px 0 0 0;
  width: 60%;
`