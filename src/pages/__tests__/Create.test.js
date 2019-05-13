import React from "react"
import renderer from "react-test-renderer"
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CreatePage, DescribePhase, PhaseNumber, ChooseStructure, SubmitCompass } from '../Create';
import { Button, Form } from 'react-bootstrap';

configure({adapter:new Adapter()});

// const tree = shallow(<Provider store={store}><CreatePage /></Provider>).dive().dive();

// describe("Render Testing for Creat Page",()=>{

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

    describe("When DescribePhase is rendered correctly by snapshot",()=>{
        const DescribePhaseRendered = renderer.create(<DescribePhase />).toJSON();
        it("SnapShot matching",()=>{
            expect(DescribePhaseRendered).toMatchSnapshot();
        });
    
    })

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
                createPhase: jest.fn(),
            };

        });

        it("renders a `Form`", () => {
            expect(describePhase().find(Form.Label).length).toBe(1);
        });
    
        it("Check DescribePhase Phase Label is correctly rendered with the right data",()=>{
            const PhaseLabel = describePhase().find(Form.Label)
            expect(PhaseLabel.props().children).toEqual("Phase 1");
        });

        it("Check DescribePhase is calling onChange correctly",()=>{
            const titleEvent = {
                target: { name:"title", value: 'this is a title' }
            };
            const descriptionEvent = {
                target: { name:"description", value: 'this is a description' }
            };

            const DescribePhase = describePhase();
            const spy = jest.spyOn(DescribePhase.instance(), "onChange");
            
            DescribePhase.instance().forceUpdate()
            DescribePhase.update();

            const TitleInput = DescribePhase.find("input[name='title']");
            const DescriptionInput = DescribePhase.find("textarea[name='description']");

            TitleInput.simulate('change', titleEvent);
            DescriptionInput.simulate('change', descriptionEvent);

            expect(spy.mock.calls.length).toBe(2);

            spy.mockRestore();
        });
    
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
    
        it("Check PhaseNumber Phase Label is correctly rendered with the right amount of options",()=>{
            const NumberForm = phaseNumber().find(Form.Control)
            expect(NumberForm.props().children.length).toEqual(12);
        });

        it("Check PhaseNumber is calling handlePhaseAmount when a selection has been made",()=>{
            const selectEvent = { target: { value: '2'} };

            const PhaseNumber = phaseNumber();

            const PhaseSelector = PhaseNumber.find("select");

            expect(props.handlePhaseAmount.mock.calls.length).toBe(0);

            PhaseSelector.simulate('change', selectEvent);

            expect(props.handlePhaseAmount.mock.calls.length).toBe(1);
        })
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
                handleCompassType: jest.fn(),
            };
        });

        it("renders two Buttons with the correct props", () => {
            expect(chooseStructure().find('button[id="Default"]').length).toBe(1);
            expect(chooseStructure().find('button[id="Custom"]').length).toBe(1);
        });

        it("Check chooseStructure's handleCompassType is being called",()=>{
            const ChooseStructure = chooseStructure();
            const CustomButton    = ChooseStructure.find('button[id="Custom"]')
            const DefaultButton   = ChooseStructure.find('button[id="Default"]')

            CustomButton.simulate('click');
            expect(props.handleCompassType).toBeCalledWith(false);

            DefaultButton.simulate('click');
            expect(props.handleCompassType).toBeCalledWith(true);

        });
    
    })

})

describe("SubmitCompass",()=>{

    let mountedSubmitCompass;
    let props;

    const submitCompass = () => {
        if (!mountedSubmitCompass) mountedSubmitCompass = mount(<SubmitCompass {...props} />)
        return mountedSubmitCompass;
    }

    beforeEach(() => {
        props = {
            createCompass: undefined,
            title: undefined,
            onChange: undefined
        };
        mountedSubmitCompass = undefined;
    });

    describe("When SubmitCompass is rendered with empty props",()=>{
        beforeEach(() => {
            props = {
                createCompass: undefined,
                title: undefined,
                onChange: undefined
            };
        });

        it("Check submitCompass Renders with blank props",()=>{
            const SubmitCompassComponent = submitCompass()
            expect(SubmitCompassComponent.props()).toEqual(props);
        });
    
    })

    describe("When props are being passed to SubmitCompass",()=>{
        beforeEach(() => {
            props = {
                createCompass: jest.fn(),
                title: "",
                onChange: jest.fn()
            };
        });

        it("renders submit button and input", () => {
            const SubmitCompassComponent = submitCompass()
            expect(SubmitCompassComponent.find('input[name="title"]').length).toBe(1);
            expect(SubmitCompassComponent.find('button[className="input-button btn btn-primary"]').length).toBe(1);
        });

        it("Check SubmitCompassComponent's createCompass and onChange are being called",()=>{
            const SubmitCompassComponent = submitCompass()
            const TitleEvent = {target: {value: "Testing Title"}}
            const TitleInput   = SubmitCompassComponent.find('input[name="title"]')
            const SubmitButton = SubmitCompassComponent.find('button[className="input-button btn btn-primary"]')

            TitleInput.simulate('change',TitleEvent);
            expect(props.onChange).toBeCalled();
        
            SubmitButton.simulate('click');
            expect(props.createCompass).toBeCalled();

        });
    
    })

})