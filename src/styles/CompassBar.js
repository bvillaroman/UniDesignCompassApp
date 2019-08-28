import styled from 'styled-components';
import { Box, Text } from 'grommet';
import { Link } from 'gatsby';

export const CompassSideBar = styled(Box)`
  height: 100vh;
  width: 100%;
  background: #D3D3D3;
  margin: 0;
  display: flex;
`

export const CompassText = styled(Text)`
  margin: 0 auto;
  padding: 1em;
  font-size: 1.5rem;
  font-weight: 900;
  color: #5361FE;
`

export const LinkContainer = styled(Box)`
  margin: 0;
  padding: 2rem;
  flex-direction: column;
  justify-self: end;
  height: 30%;
  align-self: center;
  font-size: 1.5rem;
`

export const CompassLink = styled(Link)`
  width: 100%;
  background: white;
  align-self: center;
  margin-top: 0;
`

export const SummaryLink = styled(Link)`
  width: 100%;
  background: white;
  align-self: center;
  margin-top: auto;
`

export const AnalyticsLink = styled(Link)`
  width: 100%;
  background: white;
  align-self: center;
  margin-top: auto;
`

export const HelpContainer = styled(Box)`
  margin: 0;
  align-self: center;
`
export const HelpLink = styled(Link)`
  width: 100%;
  background: white;
  align-self: flex-end;
`