import React from 'react'
import Phase from '../Compass/Phase2';
import LogHandler from '../Compass/LogHandler'
import {shallow} from 'enzyme'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});
const Phase1= shallow(<Phase/>)

it('Check Time State', () => {
    expect(Phase1.state().time).toEqual(0)
  });

it('Check New Log State', () => {
    expect(Phase1.state().newLog).toEqual('')
    });

it('Check Title State', () => {
    expect(Phase1.state().title).toEqual('')
    });

it('Check Description State', () => {
    expect(Phase1.state().description).toEqual('')
    });
it('Check DataLoaded State', ()=> {
expect(Phase1.state().dataLoaded).toEqual(false)
})    

        