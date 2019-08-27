import React from "react"
import styled from 'styled-components';
import { Box, Text, Button } from 'grommet';
import { Link } from 'gatsby';

export const MainViewContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  list-style-type: none;
`
export const NavContainer = styled(Box)`
  width: 90%;
  height: 20%;
  min-height: 6rem;
  margin: 0 auto;
  border-bottom: 0.1rem solid rgba(0,0,0,.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const LogoBox = styled(Box)`
  width: 20%;
  height: 100%;
  font-size: 2.8rem;
  font-weight: 550;
`
export const LinkContainer = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 20rem;
`
export const GatsbyLinkContainer = styled(Link)`
  text-decoration: none;
  color: black;
  align-self: center;
`
export const LinkButton = styled(Button)`
  font-size: 1.2rem;
  transition: all 0.3s;
  border: 0.15rem solid #5567FD;
  border-radius: 2rem;
  background-color:#5567FD;
  color: white; 
`;
export const GatsbyLink = ({to,label,primary}) => (
  <GatsbyLinkContainer to={to}>
    {primary ? <LinkButton label={label}/> : label}
  </GatsbyLinkContainer>
)

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