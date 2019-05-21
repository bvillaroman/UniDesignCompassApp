import React from "react";
import { create } from "react-test-renderer";
import Graph from "../Graph";
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount, shallow} from 'enzyme';

configure({adapter:new Adapter()});
let GraphWrapper=shallow(<Graph/>)

describe("Graph", () => {
  it("it matches the snapshot", () => {
    const component = create(
    <Graph 
        processId={'ec468ab1-9ed8-41fe-a88a-3c85cdbc7fc6'}
    />);
    expect(component.toJSON()).toMatchSnapshot();
  });


it('Constructor called properly.', () => {
  let spy=jest.spyOn(GraphWrapper.instance(),"constructor")
  expect(spy).toHaveBeenCalledTimes(0);
  });


it('componentDidMount ', () => {
  let spy=jest.spyOn(GraphWrapper.instance(),"componentDidMount")
  expect(spy).toHaveBeenCalledTimes(0);
  });

it('componentDidMount test.', () => {
  let spy=jest.spyOn(GraphWrapper.instance(),"componentDidMount")
  expect(spy).toHaveBeenCalledTimes(0);
  GraphWrapper.instance().componentDidMount()
  expect(spy).toHaveBeenCalledTimes(1);
  });

it('componentDidUpdate ',()=>{
let spy=jest.spyOn(GraphWrapper.instance(),"componentDidUpdate")
expect(spy).toHaveBeenCalledTimes(0);
});  

it('componentDidUpdate test.', () => {
  let spy=jest.spyOn(GraphWrapper.instance(),"componentDidUpdate")
  expect(spy).toHaveBeenCalledTimes(0);
  let prevProps
  GraphWrapper.instance().componentDidUpdate(prevProps)
  expect(spy).toHaveBeenCalledTimes(1);
  });

  it('msToHours ', () => {
    let spy=jest.spyOn(GraphWrapper.instance(),"msToHours")
    expect(spy).toHaveBeenCalledTimes(0);
    });
  
  it('msToHours test', () => {
    let spy=jest.spyOn(GraphWrapper.instance(),"msToHours")
    expect(spy).toHaveBeenCalledTimes(0);
    spy(10000)
    expect(spy).toHaveBeenCalledTimes(1);
    expect(Math.floor(spy(1000))).toEqual(0);
    });
    

});
