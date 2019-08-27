import styled from 'styled-components';
import { Box } from 'grommet';
import { Link } from 'gatsby';

export const NavigationSideBar = styled(Box)`
  height: 100vh;
  width: 100%;
  background: grey;
  margin: 0;
`;

export const LinkContainer = styled(Box)`
  margin: 0;
  padding: 1.5rem;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

export const HomepageLink = styled(Link)`
  width: 100%;
  background: white;
  align-self: center;
`;

export const ProfileLink = styled(Link)`
  width: 100%;
  background: white;
  align-self: center;
  margin-top: 3rem;
`;