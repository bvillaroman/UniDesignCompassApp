
import React from 'react'
import Phase from '../Compass/Phase';
import LogHandler from '../Compass/LogHandler'
jest.mock('../Compass/Phase')
// beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  // Phase.mockClear();
// });

it('If the constructor for the phaseclass is called once we pass.', () => {
  const Phase1 = new Phase();//Checks if the constructor class for the Phase is called properly.
  expect(Phase).toHaveBeenCalledTimes(1);
});
