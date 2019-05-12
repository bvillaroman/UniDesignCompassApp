import React from "react"
import renderer from "react-test-renderer"
import { store } from "../../state/store";
import { Provider } from 'react-redux';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
import {CreatePage, DescribePhase, PhaseNumber, ChooseStructure, SubmitCompass } from '../Create';
import { Button, Form } from 'react-bootstrap';

configure({adapter:new Adapter()});

// const tree = shallow(<Provider store={store}><CreatePage /></Provider>).dive().dive();

// describe("Render Testing for Creat Page",()=>{

//     const DescribePhaseComponent = shallow(<DescribePhase debug/>)
//     it("Check DescribePhase Render",()=>{
//         expect(shallowToJson(DescribePhaseComponent)).toMatchSnapshot();
//     });

//     const PhaseNumberComponent = shallow(<PhaseNumber debug/>)
//     it("Check PhaseNumber Render",()=>{
//         expect(shallowToJson(PhaseNumberComponent)).toMatchSnapshot();
//     });

//     const ChooseStructureComponent = shallow(<ChooseStructure debug/>)
//     it("Check ChooseStructure Render",()=>{
//         expect(shallowToJson(ChooseStructureComponent)).toMatchSnapshot();
//     });

//     const SubmitCompassComponent = shallow(<SubmitCompass debug/>)
//     it("Check SubmitCompass Render",()=>{
//         expect(shallowToJson(SubmitCompassComponent)).toMatchSnapshot();
//     });

//     const CreatePageComponent = shallow(<CreatePage debug/>)
//     it("Check CreatePage Render",()=>{
//         expect(shallowToJson(CreatePageComponent)).toMatchSnapshot();
//     });
// })

describe("DescribePhase",()=>{

    let mountedDescribePhase;
    let state;
    let props;

    const describePhase = () => {
        if (!mountedDescribePhase) mountedDescribePhase = mount(<DescribePhase {...props} />)
        return mountedDescribePhase;
    }


    beforeEach(() => {
        state = {
          title: "",
          description: ""
        };
        props = {
            createPhase: undefined,
            id: undefined,
            key: undefined
        };
        mountedDescribePhase = undefined;
    });


    // describe("When DescribePhase is rendered correctly by snapshot",()=>{
    //     it("Check DescribePhase Render with a blank state",()=>{
    //         expect(shallowToJson(DescribePhase())).toMatchSnapshot();
    //     });
    
    // })

    describe("When DescribePhase is rendered with empty state/props",()=>{
        beforeEach(() => {
            state = {
              title: "",
              description: ""
            };
            props = {
                createPhase: undefined,
                id: undefined,
                key: undefined
            };
        });
    
        it("Check DescribePhase Render with a blank state",()=>{
            const DescribePhaseComponent = describePhase()
            expect(DescribePhaseComponent.state()).toEqual(state);
        });

        it("Check DescribePhase Render with a blank prop",()=>{
            const DescribePhaseComponent = describePhase()
            expect(DescribePhaseComponent.props()).toEqual(props);
        });
    
    })

    describe("When DescribePhase is  passed an id and a key",()=>{
        beforeEach(() => {
            props = {
                id: 0,
                key: 1
            };

        });

        it("renders a `Form`", () => {
            expect(describePhase().find(Form.Label).length).toBe(1);
        });
    
        it("Check DescribePhase createPhase is a function",()=>{
            const DescribePhaseComponent = describePhase().find(Form.Label)
            expect(DescribePhaseComponent.props().children).toEqual("Phase 1");
        });
    
    })

})
