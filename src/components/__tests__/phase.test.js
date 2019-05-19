
import React from 'react'
import Phase from '../Compass/Phase';
import LogHandler from '../Compass/LogHandler'
import {shallow} from 'enzyme'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

const Phase1= shallow(<Phase/>)
jest.mock('../Compass/Phase')

// beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  // Phase.mockClear();
// });

it('Constructor called properly.', () => {
  const Phase2= new Phase();//Checks if the constructor class for the Phase is called properly.
  expect(Phase).toHaveBeenCalledTimes(2);
});

it('State Set Properly', () => {
  console.log(Phase1.state())
});

