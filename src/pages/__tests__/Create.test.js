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

    describe("When props are being passed to DescribePhase",()=>{
        beforeEach(() => {
            state = {
                title: "",
                description: ""
            };
            props = {
                id: 0,
                createPhase: jest.fn( (title,description) => {
                    state.title = title;
                    state.description = description
                }),
            };

        });

        it("renders a `Form`", () => {
            expect(describePhase().find(Form.Label).length).toBe(1);
        });
    
        it("Check DescribePhase Phase Label is correctly rendered with the right data",()=>{
            const PhaseLabel = describePhase().find(Form.Label)
            expect(PhaseLabel.props().children).toEqual("Phase 1");
        });

        // it("Check DescribePhase Phase Label is correctly rendered with the write data",()=>{
        //     const onChangeMock = jest.fn();
        //     const titleEvent = {
        //         target: { name:"title", value: 'this is a title' }
        //     };
        //     const descriptionEvent = {
        //         target: { name:"description", value: 'this is a description' }
        //     };
        //     const DescribePhase = describePhase();

        //     const instance = DescribePhase.instance();
        //     jest.spyOn(instance, 'onChange');

        //     DescribePhase.find("input[name='title']").prop('onChange')(titleEvent)
        //     // PhaseTitle.simulate('change', titleEvent);
        //     // DescribePhase.setState({title: state.title, description: state.description})
        //     // expect(PhaseTitle.props().value).toEqual("this is a title");
        //     expect(instance.onChange).toHaveBeenCalled();

        // });
    
    })

})

describe("PhaseNumber",()=>{

    let mountedPhaseNumber;
    let props;

    const phaseNumber = () => {
        if (!mountedPhaseNumber) mountedPhaseNumber = mount(<PhaseNumber {...props} />)
        return mountedPhaseNumber;
    }

    beforeEach(() => {
        props = {
            handlePhaseAmount: undefined,
        };
        mountedPhaseNumber = undefined;
    });

    describe("When PhaseNumber is rendered with empty props",()=>{
        beforeEach(() => {
            props = {
                handlePhaseAmount: undefined,
            };
        });


        it("Check PhaseNumber Render with a blank prop",()=>{
            const PhaseNumberComponent = phaseNumber()
            expect(PhaseNumberComponent.props()).toEqual(props);
        });
    
    })

    describe("When props are being passed to PhaseNumber",()=>{
        beforeEach(() => {
            props = {
                handlePhaseAmount: jest.fn( ),
            };
        });

        it("renders a `Form`", () => {
            expect(phaseNumber().find(Form.Control).length).toBe(1);
        });
    
        it("Check DescribePhase Phase Label is correctly rendered with the right amount of options",()=>{
            const NumberForm = phaseNumber().find(Form.Control)
            expect(NumberForm.props().children.length).toEqual(12);
        });

        // it("Check DescribePhase Phase Label is correctly rendered with the write data",()=>{
        //     const onChangeMock = jest.fn();
        //     const titleEvent = {
        //         target: { name:"title", value: 'this is a title' }
        //     };
        //     const descriptionEvent = {
        //         target: { name:"description", value: 'this is a description' }
        //     };
        //     const DescribePhase = describePhase();

        //     const instance = DescribePhase.instance();
        //     jest.spyOn(instance, 'onChange');

        //     DescribePhase.find("input[name='title']").prop('onChange')(titleEvent)
        //     // PhaseTitle.simulate('change', titleEvent);
        //     // DescribePhase.setState({title: state.title, description: state.description})
        //     // expect(PhaseTitle.props().value).toEqual("this is a title");
        //     expect(instance.onChange).toHaveBeenCalled();

        // });
    
    })

})

describe("ChooseStructure",()=>{

    let mountedChooseStructure;
    let props;

    const chooseStructure = () => {
        if (!mountedChooseStructure) mountedChooseStructure = mount(<ChooseStructure {...props} />)
        return mountedChooseStructure;
    }

    beforeEach(() => {
        props = {
            handleCompassType: undefined,
        };
        mountedChooseStructure = undefined;
    });

    describe("When ChooseStructure is rendered with empty props",()=>{
        beforeEach(() => {
            props = {
                handleCompassType: undefined,
            };
        });

        it("Check ChooseStructure Renders with blank props",()=>{
            const ChooseStructureComponent = chooseStructure()
            expect(ChooseStructureComponent.props()).toEqual(props);
        });
    
    })

    describe("When props are being passed to ChooseStructure",()=>{
        beforeEach(() => {
            props = {
                handleCompassType: jest.fn((e) => {return e} ),
            };
        });

        it("renders two Buttons with the correct props", () => {
            expect(chooseStructure().find('button[id="Default"]').length).toBe(1);
            expect(chooseStructure().find('button[id="Custom"]').length).toBe(1);
        });
    
        // it("Check ChooseStructure chilrden is correctly rendered with the handler",()=>{
        //     const CustomButton  = chooseStructure().find('button[id="Custom"]')
        //     const DefaultButton = chooseStructure().find('button[id="Default"]')
            
        //     expect(CustomButton.props().onClick).toEqual(props.handleCompassType);
        //     expect(DefaultButton.props().onClick).toEqual(props.handleCompassType);

        // });

        // it("Check DescribePhase Phase Label is correctly rendered with the write data",()=>{
        //     const onChangeMock = jest.fn();
        //     const titleEvent = {
        //         target: { name:"title", value: 'this is a title' }
        //     };
        //     const descriptionEvent = {
        //         target: { name:"description", value: 'this is a description' }
        //     };
        //     const DescribePhase = describePhase();

        //     const instance = DescribePhase.instance();
        //     jest.spyOn(instance, 'onChange');

        //     DescribePhase.find("input[name='title']").prop('onChange')(titleEvent)
        //     // PhaseTitle.simulate('change', titleEvent);
        //     // DescribePhase.setState({title: state.title, description: state.description})
        //     // expect(PhaseTitle.props().value).toEqual("this is a title");
        //     expect(instance.onChange).toHaveBeenCalled();

        // });
    
    })

})
