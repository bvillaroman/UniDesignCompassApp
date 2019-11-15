import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SummaryLegend from './index';
import {
  LegendContainer,
  UlContainer,
  Title,
  Challenge,
  Ideas,
  Model,
  Revise,
  Prototype,
  Research,
  Reflect
} from '../../../styles/Legend'

Enzyme.configure({ adapter: new Adapter() });

describe('<SummaryLegend />', () => {
  it('should contain an Title Component', () => {
    const wrapper = shallow(<SummaryLegend />);

    const legendContainer = wrapper.find(LegendContainer);
    expect(legendContainer).toHaveLength(1)

    const ulContainer = wrapper.find(UlContainer);
    expect(ulContainer).toHaveLength(1)

    const title = wrapper.find(Title);
    expect(title).toHaveLength(1)
    expect(title.text()).toBe('Legend')

    const challenge = wrapper.find(Challenge);
    expect(challenge).toHaveLength(1)
    expect(challenge.text()).toBe('Challenge')

    const ideas = wrapper.find(Ideas);
    expect(ideas).toHaveLength(1)
    expect(ideas.text()).toBe('Ideas')

    const model = wrapper.find(Model);
    expect(model).toHaveLength(1)
    expect(model.text()).toBe('Model')

    const revise = wrapper.find(Revise);
    expect(revise).toHaveLength(1)
    expect(revise.text()).toBe('Revise')

    const prototype = wrapper.find(Prototype);
    expect(prototype).toHaveLength(1)
    expect(prototype.text()).toBe('Prototype')

    const research = wrapper.find(Research);
    expect(research).toHaveLength(1)
    expect(research.text()).toBe('Research')

    const reflect = wrapper.find(Reflect);
    expect(reflect).toHaveLength(1)
    expect(reflect.text()).toBe('Reflect')
  });
});