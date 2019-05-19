
import Phase from '../Compass/Phase';
import LogHandler from '../Compass/LogHandler'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});
jest.mock('../Compass/Phase')

it('Phase Constructor called properly.', () => {
  const Phase2= new Phase();//Checks if the constructor class for the Phase is called properly.
  expect(Phase).toHaveBeenCalledTimes(1);
});



