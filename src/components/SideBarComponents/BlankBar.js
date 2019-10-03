import React from 'react';
import { NavigationContainer,  } from '../../styles/SideBar';
import {Loader} from '../../styles/layout'

export default props => {
  return (
    <NavigationContainer>
      <Loader/>
    </NavigationContainer>
  )
}

