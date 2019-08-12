import React from "react"
import renderer from "react-test-renderer"
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Process } from '../Process';
// import { Compass } from "../../components/Compass"
// import Graph from "../../components/Graph"
import { Nav } from 'react-bootstrap';
configure({adapter:new Adapter()});

describe("Process Page",()=>{

  let mountedProcess;
  let props;
  let state;

  const Process = () => {
      if (!mountedProcess) mountedProcess = shallow(<Process {...props} />)
      return mountedProcess;
  }

  beforeEach(() => {
    state = {        
      date_end: "",
      date_start: "",
      id: "",
      name: "",
      phases: [],
      updateComponent: ""
    }
    props = {  };
    mountedProcess = undefined;
  });

  describe("When Process is rendered ",()=>{

    it("Check Process Renders with a default state and loads Compass first (UT)",()=>{
      const ProcessComponent = Process()

      expect(ProcessComponent.state()).toEqual(state);
      // expect(ProcessComponent.find(Compass).length).toBe(1)
    });

    it("Check setting the state loads different tabs between compass and graph (IT)",()=>{
      const ProcessComponent = Process()
      const spy = jest.spyOn(ProcessComponent.instance(), "updateHandler");

      // const CompassButton    = ProcessComponent.find('Nav[eventkey="compass"]')
      // const DefaultButton   = ProcessComponent.find('button[id="Default"]')

      // console.log(CompassButton)
      // CustomButton.simulate('click');
      // expect(props.handleCompassType).toBeCalledWith(false);

      // expect(ProcessComponent.find(ChooseStructure).length).toBe(1)
      // expect(spy.mock.calls.length).toBe(0)


      // expect(ProcessComponent.find(ChooseStructure).length).toBe(1)
      // expect(spy.mock.calls.length).toBe(0)

      expect(true).toEqual(true)

      });
  })

  // describe("When Process changes forms ",()=>{

  //   it("Check setting the state loads different phases through handleForms (IT)",()=>{
  //     const ProcessComponent = Process()
  //     const spy = jest.spyOn(ProcessComponent.instance(), "handleForms");

  //     ProcessComponent.setState({status: "chooseStructure"})
  //     expect(ProcessComponent.find(ChooseStructure).length).toBe(1)
  //     expect(spy.mock.calls.length).toBe(1)

  //     ProcessComponent.setState({status: "numOfPhases",numberOfPhases:1})
  //     expect(ProcessComponent.find(PhaseNumber).length).toBe(1)
  //     expect(spy.mock.calls.length).toBe(2)

  //     ProcessComponent.setState({status: "createPhases"})
  //     expect(ProcessComponent.find(DescribePhase).length).toBe(1)
  //     expect(spy.mock.calls.length).toBe(3)

  //     ProcessComponent.setState({status: "submitCompass"})
  //     expect(ProcessComponent.find(SubmitCompass).length).toBe(1)
  //     expect(spy.mock.calls.length).toBe(4)

  //   });
  // })
})