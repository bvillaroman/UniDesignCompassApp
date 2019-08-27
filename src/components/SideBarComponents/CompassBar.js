import React from 'react';
import { Grommet } from 'grommet';
import {
  CompassSideBar,
  CompassText,
  LinkContainer,
  CompassLink,
  SummaryLink,
  AnalyticsLink,
  HelpContainer,
  HelpLink
} from '../../styles/CompassBar'

class CompassBar extends React.Component {
  render() {
    return (
      <Grommet>
        <CompassSideBar>
          <CompassText>Compass Title</CompassText>
          <LinkContainer>
            <CompassLink to="/">Compass</CompassLink>
            <SummaryLink to="/">Summary</SummaryLink>
            <AnalyticsLink to="/">Analytics</AnalyticsLink>
            <HelpContainer>
              <HelpLink to="/">Help</HelpLink>
            </HelpContainer>
          </LinkContainer>
        </CompassSideBar>
      </Grommet>
    )
  }
}

export default CompassBar;