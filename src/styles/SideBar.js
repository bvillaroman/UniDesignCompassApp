import styled from 'styled-components';
import { Box, Text, Button } from 'grommet'
import { Link } from 'gatsby';

export const NavigationContainer = styled(Box)`
  text-align: center;
  min-width: 4rem;
  background: white;
  padding: 1rem 0;
  border-right: 0.1rem solid #e5e5e5;
`;

export const NavLink = styled(Button)`
  padding-top: 2rem;
  width: 100%;
  align-self: center;
`;

export const CompassSideBar = styled(Box)`
  background: #5361FE;
  display: flex;
  flex-direction: column;
`
export const CompassText = styled(Text)`
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 900;
  color: white;
  text-align: center;
`
export const LinkContainer = styled(Box)`
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  width: 0 12rem;
`;

export const CompassLink = styled(Link)`
  display: flex;
  flex-direction: row;
  height: 3rem;
  color: white;
  text-decoration: none;
  font-weight: 560;
  justify-content: space-evenly;
  align-items: center;
  min-width: 9rem;
  svg {
    fill: black;
    stroke: black;
  }
`